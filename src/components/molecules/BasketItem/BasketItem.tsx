import React from 'react';
import { Dimensions } from 'react-native';
import { formatPrice, getCurrencySymbol } from '../../../utils/currencyConverter';
import { BasketItemProps } from './BasketItem.types';
import {
  Container,
  LeftSection,
  Circle,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  RightSection,
  CountText,
} from './BasketItem.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = 0.3 * width; 

type Props = BasketItemProps & {
  onDismiss?: (label: string) => void;
};

export default function BasketItem({
  label,
  count,
  totalPrice,
  currency,
  onDismiss,
}: Props) {
  const currencySymbol = getCurrencySymbol(currency);
  const translateX = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX > 0) {
        translateX.value = event.translationX;
      }
    })
    .onEnd((event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(width, {}, (finished) => {
          if (finished && onDismiss) {
            runOnJS(onDismiss)(label);
          }
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: 1 - translateX.value / width,
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyle}>
        <Container>
          <LeftSection>
            <Circle />
            <ProductInfo>
              <ProductTitle>{label}</ProductTitle>
              <ProductPrice>
                {currencySymbol}
                {formatPrice(totalPrice)}
              </ProductPrice>
            </ProductInfo>
          </LeftSection>
          <RightSection>
            <CountText>{count}</CountText>
          </RightSection>
        </Container>
      </Animated.View>
    </GestureDetector>
  );
}