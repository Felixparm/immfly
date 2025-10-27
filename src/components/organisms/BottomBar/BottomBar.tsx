import React from 'react';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import { formatPrice } from '../../../utils/currencyConverter';
import { WhiteContainer, Container, LeftSection, RightSection, PayText, CurrencyDropdownContainer, CurrencyText } from './BottomBar.styles';
import { PRICE_CATEGORY_OPTIONS, PriceCategory } from '../../../types/enums';

interface BottomBarProps {
  totalPrice: number;
  selectedCategory: PriceCategory;
  onCategoryChange: (category: PriceCategory) => void;
  selectedCurrency: string;
  onPayPress: () => void;
}

export default function BottomBar({ totalPrice, selectedCategory, onCategoryChange, selectedCurrency, onPayPress }: BottomBarProps) {
  const handleCategoryChange = (value: string) => {
    onCategoryChange(value as PriceCategory);
  };

  return (
    <WhiteContainer>
      <Container>
        <LeftSection onPress={onPayPress} disabled={totalPrice === 0}>
          <PayText>Pay {formatPrice(totalPrice)}</PayText>
          <CurrencyDropdownContainer>
            <CurrencyText>{selectedCurrency}</CurrencyText>
          </CurrencyDropdownContainer>
        </LeftSection>
        <RightSection>
          <Dropdown
            value={selectedCategory}
            options={PRICE_CATEGORY_OPTIONS}
            onValueChange={handleCategoryChange}
          />
        </RightSection>
      </Container>
    </WhiteContainer>
  );
}