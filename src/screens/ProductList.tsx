import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

import ScreenTemplate from '../components/templates/ScreenTemplate';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import BottomBar from '../components/organisms/BottomBar/BottomBar';
import { useProducts } from '../modules/useProducts';
import { useBasket } from '../reducer/useBasket';

export default function ProductList() {
  const { data: products, isLoading, error } = useProducts();
  const { basket, handleIncrement, handleDecrement } = useBasket();
  const [selectedCategory, setSelectedCategory] = React.useState('retail');

  const calculateTotalPrice = () => {
    if (!products) return 0;
    return Object.entries(basket).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      if (!product) return total;
      const price = selectedCategory === 'retail' ? product.price : product.discountPrice;
      return total + (price * quantity);
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
      const quantity = basket[product.id] || 0;
      const displayPrice = selectedCategory === 'retail' ? product.price : product.discountPrice;
      const productWithCorrectPrice = { ...product, price: displayPrice };
      return (
        <View key={index} style={styles.cardContainer}>
          <ProductCard 
            product={productWithCorrectPrice} 
            quantity={quantity}
            showPrice 
            showButtons 
            disabled={product.stock === 0}
            onIncrement={() => handleIncrement(product.id)}
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
        <BottomBar 
          totalPrice={calculateTotalPrice()} 
          onCategoryChange={setSelectedCategory}
        />
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