import React, { useState } from 'react';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import { formatPrice } from '../../../utils/currencyConverter';
import { WhiteContainer, Container, LeftSection, RightSection, PayText, CurrencyDropdownContainer, CurrencyText } from './BottomBar.styles';

interface BottomBarProps {
  totalPrice: number;
  onCategoryChange: (category: string) => void;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  onPayPress: () => void;
}

export default function BottomBar({ totalPrice, onCategoryChange, selectedCurrency, onPayPress }: BottomBarProps) {
  const [selectedValue, setSelectedValue] = useState('retail');

  const options = ['retail', 'cabine_crew', 'happy_hour', 'business_invitation', 'tourism_invitation'];

  const handleCategoryChange = (value: string) => {
    setSelectedValue(value);
    onCategoryChange(value);
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
            value={selectedValue}
            options={options}
            onValueChange={handleCategoryChange}
          />
        </RightSection>
      </Container>
    </WhiteContainer>
  );
}