import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

import ScreenTemplate from '../components/templates/ScreenTemplate';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import { useProducts } from '../modules/useProducts';

export default function ProductList() {
  const { data: products, isLoading, error } = useProducts();

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
    return products?.map((product, index) => (
      <View key={index} style={styles.cardContainer}>
        <ProductCard 
          product={product} 
          showPrice 
          showButtons 
          disabled={product.stock === 0}
        />
      </View>
    ));
  };

  return (
    <ScreenTemplate title="Product List">
      <ScrollView>
        <View style={styles.grid}>
          {renderProductGrid()}
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
    marginBottom: 8,
  },
});