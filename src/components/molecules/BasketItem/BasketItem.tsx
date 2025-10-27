import React from 'react';
import { Dimensions, Image } from 'react-native';
import { formatPrice, getCurrencySymbol } from '../../../utils/currencyConverter';
import { getImageSource } from '../../../utils/imageUtils';
import { BasketItemProps } from './BasketItem.types';
import {
  Container,
  LeftSection,
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
  id,
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
            <Image source={getImageSource(id)} style={{ width: 40, height: 40, borderRadius: 20 }} />
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