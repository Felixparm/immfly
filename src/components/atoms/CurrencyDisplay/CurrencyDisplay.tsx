import React, { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import { Container, CurrencyText, Overlay, ModalContainer, Option, OptionText } from './CurrencyDisplay.styles';
import { getDisplayAmount } from '../../../utils/currencyConverter';

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
      
      <Modal visible={isVisible} transparent animationType="fade">
        <Overlay onPress={() => setIsVisible(false)}>
          <ModalContainer>
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
          </ModalContainer>
        </Overlay>
      </Modal>
    </>
  );
}

