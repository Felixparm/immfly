import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import ScreenTemplate from '../components/templates/ScreenTemplate';
import ProductCard from '../components/molecules/ProductCard/ProductCard';

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
    const rows = [];
    for (let i = 0; i < products!.length; i += 2) {
      const row = (
        <View key={i} style={styles.row}>
          <View style={styles.cardContainer}>
            <ProductCard 
              product={products![i]} 
              showPrice 
              showButtons 
            />
          </View>
          {products![i + 1] ? (
            <View style={styles.cardContainer}>
              <ProductCard 
                product={products![i + 1]} 
                showPrice 
                showButtons 
              />
            </View>
          ) : (
            <View style={styles.cardContainer} />
          )}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <ScreenTemplate title="Product List">
      <ScrollView>
        {renderProductGrid()}
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
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  cardContainer: {
    flex: 1,
    maxWidth: '50%',
  },
});