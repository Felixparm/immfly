import React, { useState } from 'react';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import { WhiteContainer, Container, LeftSection, RightSection, PayText } from './BottomBar.styles';

interface BottomBarProps {
  totalPrice: number;
}

export default function BottomBar({ totalPrice }: BottomBarProps) {
  const [selectedValue, setSelectedValue] = useState('retail');
  const [currency, setCurrency] = useState('USD');
  
  const options = ['retail', 'cabine_crew', 'happy_hour', 'business_invitation', 'tourism_invitation'];
  const currencies = ['USD', 'EUR', 'GBP'];

  return (
    <WhiteContainer>
      <Container>
        <LeftSection>
          <PayText>Pay {totalPrice.toFixed(2)} {currency}</PayText>
        </LeftSection>
        <RightSection>
          <Dropdown 
            value={selectedValue}
            options={options}
            onValueChange={setSelectedValue}
          />
        </RightSection>
      </Container>
    </WhiteContainer>
  );
}