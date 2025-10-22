import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { ProductCardProps } from './ProductCard.types';
import { styles } from './ProductCard.styles';
import CircleButton from '../../atoms/CircleButton/CircleButton';
import { ButtonType } from '../../atoms/CircleButton/CircleButton.types';
import PriceBadge from '../../atoms/PriceBadge/PriceBadge';

export default function ProductCard({
  product,
  quantity = 0,
  showButtons = false,
  showPrice = false,
  disabled = false,
  currency = 'USD',
  onIncrement,
  onDecrement,
}: ProductCardProps) {
  const capitalizedLabel = product.label.charAt(0).toUpperCase() + product.label.slice(1);

  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <ImageBackground source={{ uri: product.url }} style={styles.background} imageStyle={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Text style={styles.label}>{capitalizedLabel}</Text>
            <Text style={styles.quantity}>Unity: {quantity}</Text>
          </View>
          
          <View style={styles.bottomSection}>
            {showButtons && (
              <View style={styles.buttons}>
                <CircleButton 
                  type={ButtonType.MINUS} 
                  onPress={onDecrement} 
                  disabled={quantity === 0}
                />
                <CircleButton 
                  type={ButtonType.PLUS} 
                  onPress={onIncrement} 
                  disabled={quantity >= product.stock}
                />
              </View>
            )}
            
            {showPrice && (
              <PriceBadge price={product.price} currency={currency} />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}