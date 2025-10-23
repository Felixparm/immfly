import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ScreenTemplate from '../components/templates/ScreenTemplate';
import TopHeader from '../components/molecules/TopHeader/TopHeader';
import BasketItem from '../components/molecules/BasketItem/BasketItem';

import { useBasket } from '../reducer/useBasket';
import { calculateProductPrice } from '../utils/currencyConverter';
import { PriceCategory } from '../types/enums';
import { useProducts } from '../modules/useProducts';
import { BasketItemProps } from '../components/molecules/BasketItem/BasketItem.types';
import { theme } from '../theme';
import Dropdown from '../components/molecules/Dropdown/Dropdown';

export default function Payment() {
  const router = useRouter();
  const { basket, currency, selectedCategory, handleRemoveItem } = useBasket();
  const { data: products } = useProducts();
  const paymentItems = basket.reduce((acc, item) => {
    const product = products?.find(p => p.id === item.productId);
    if (!product) return acc;
    const { totalPrice } = calculateProductPrice(product, selectedCategory, currency, item.quantity);
    acc.push({
      id: item.productId,
      label: item.title,
      count: item.quantity,
      totalPrice,
      currency
    });
    return acc;
  }, [] as Array<BasketItemProps>);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScreenTemplate title="Payment">
        <TopHeader
          title="Receipt"
          description="Selected products"
          onClose={() => router.push('/')}
        />
        <ScrollView style={styles.content}>
          <View style={styles.basketContainer}>
            {paymentItems.map((item) => (
              <BasketItem
                id={item.id}
                key={item.id}
                label={item.label}
                count={item.count}
                totalPrice={item.totalPrice}
                currency={item.currency}
                onDismiss={() => handleRemoveItem(item.id)}
              />
            ))}
          </View>
        </ScrollView>
        <View>
        
        </View>
      </ScreenTemplate>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  basketContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
    backgroundColor: theme.colors.lightGray,
    flex: 1,
  },
});