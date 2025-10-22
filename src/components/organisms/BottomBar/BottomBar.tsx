import React, { useState } from 'react';
import { Text } from 'react-native';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import { formatPrice } from '../../../utils/currencyConverter';
import { WhiteContainer, Container, LeftSection, RightSection, PayText, CurrencyDropdownContainer } from './BottomBar.styles';

interface BottomBarProps {
  totalPrice: number;
  onCategoryChange: (category: string) => void;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export default function BottomBar({ totalPrice, onCategoryChange, selectedCurrency, onCurrencyChange }: BottomBarProps) {
  const [selectedValue, setSelectedValue] = useState('retail');
  
  const options = ['retail', 'cabine_crew', 'happy_hour', 'business_invitation', 'tourism_invitation'];

  const handleCategoryChange = (value: string) => {
    setSelectedValue(value);
    onCategoryChange(value);
  };

  return (
    <WhiteContainer>
      <Container>
        <LeftSection>
          <PayText>Pay {formatPrice(totalPrice)}</PayText>
          <CurrencyDropdownContainer>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{selectedCurrency}</Text>
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