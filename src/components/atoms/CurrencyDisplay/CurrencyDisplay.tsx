import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, CurrencyText, Option, OptionText } from './CurrencyDisplay.styles';
import { getDisplayAmount } from '../../../utils/currencyConverter';
import CustomModal from '../../molecules/CustomModal/CustomModal';

interface CurrencyDisplayProps {
  usdAmount: number;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export default function CurrencyDisplay({ usdAmount, selectedCurrency, onCurrencyChange }: CurrencyDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const currencies = ['USD', 'EUR', 'GBP'];
  const otherCurrencies = currencies.filter(c => c !== selectedCurrency);


  return (
    <>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Container>
          {otherCurrencies.map(currency => (
            <CurrencyText key={currency}>{getDisplayAmount(usdAmount, currency)}</CurrencyText>
          ))}
        </Container>
      </TouchableOpacity>
      
      <CustomModal visible={isVisible} onClose={() => setIsVisible(false)}>
        {currencies.map(currency => (
          <Option
            key={currency}
            onPress={() => {
              onCurrencyChange(currency);
              setIsVisible(false);
            }}
          >
            <OptionText>{currency}</OptionText>
          </Option>
        ))}
      </CustomModal>
    </>
  );
}

