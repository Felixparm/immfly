import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import ScreenTemplate from '../../components/templates/ScreenTemplate';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';
import BottomBar from '../../components/organisms/BottomBar/BottomBar';
import CurrencyDisplay from '../../components/atoms/CurrencyDisplay/CurrencyDisplay';
import { useProducts } from '../../modules/useProducts';
import { useBasket } from '../../reducer/useBasket';
import { calculateProductPrice } from '../../utils/currencyConverter';
import {
  Container,
  ScrollContainer,
  BottomContainer,
  Centered,
  Grid,
  CardContainer,
  ErrorText
} from './ProductList.styles';

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
        <Centered>
          <ActivityIndicator size="large" />
        </Centered>
      </ScreenTemplate>
    );
  }

  if (error) {
    return (
      <ScreenTemplate title="Product List">
        <Centered>
          <ErrorText>Error loading products</ErrorText>
        </Centered>
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
        <CardContainer key={index}>
          <ProductCard 
            product={productWithCorrectPrice} 
            quantity={quantity}
            showPrice  
            disabled={product.stock === 0}
            currency={currency}
            onIncrement={() => handleIncrement(product.id, product.label)}
            onDecrement={() => handleDecrement(product.id)}
          />
        </CardContainer>
      );
    });
  };

  return (
    <ScreenTemplate title="Product List">
      <Container>
        <ScrollContainer>
          <Grid>
            {renderProductGrid()}
          </Grid>
        </ScrollContainer>
        <BottomContainer>
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
        </BottomContainer>
      </Container>
    </ScreenTemplate>
  );
}

