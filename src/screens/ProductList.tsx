import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import ScreenTemplate from '../components/templates/ScreenTemplate';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import BottomBar from '../components/organisms/BottomBar/BottomBar';
import CurrencyDisplay from '../components/atoms/CurrencyDisplay/CurrencyDisplay';
import { useProducts } from '../modules/useProducts';
import { useBasket } from '../reducer/useBasket';
import { calculateProductPrice } from '../utils/currencyConverter';

export default function ProductList() {
  const router = useRouter();
  const { data: products, isLoading, error } = useProducts();
  const { basket, currency, selectedCategory, handleIncrement, handleDecrement, setCurrency, handleCategoryChange } = useBasket();
  
  const calculateTotalPrice = () => {
    if (!products) return 0;
    return basket.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return total;
      const { totalPrice } = calculateProductPrice(product, selectedCategory, currency, item.quantity);
      return total + totalPrice;
    }, 0);
  };

  if (isLoading) {
    return (
      <ScreenTemplate title="Product List">
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
        </View>
      </ScreenTemplate>
    );
  }

  if (error) {
    return (
      <ScreenTemplate title="Product List">
        <View style={styles.centered}>
          <Text>Error loading products</Text>
        </View>
      </ScreenTemplate>
    );
  }

  const renderProductGrid = () => {
    return products?.map((product, index) => {
      const basketItem = basket.find(item => item.productId === product.id);
      const quantity = basketItem?.quantity || 0;
      const { convertedPrice } = calculateProductPrice(product, selectedCategory, currency);
      const productWithCorrectPrice = { ...product, price: convertedPrice };
      return (
        <View key={index} style={styles.cardContainer}>
          <ProductCard 
            product={productWithCorrectPrice} 
            quantity={quantity}
            showPrice  
            disabled={product.stock === 0}
            currency={currency}
            onIncrement={() => handleIncrement(product.id, product.label)}
            onDecrement={() => handleDecrement(product.id)}
          />
        </View>
      );
    });
  };

  return (
    <ScreenTemplate title="Product List">
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.grid}>
            {renderProductGrid()}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <BottomBar 
            totalPrice={calculateTotalPrice()} 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedCurrency={currency}
            onPayPress={() => router.push('/payment')}
          />
          <CurrencyDisplay 
            usdAmount={calculateTotalPrice()} 
            selectedCurrency={currency}
            onCurrencyChange={setCurrency}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 8,
  },
});