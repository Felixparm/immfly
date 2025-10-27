import React, { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ScreenTemplate from '../../components/templates/ScreenTemplate';
import TopHeader from '../../components/molecules/TopHeader/TopHeader';
import BasketItem from '../../components/molecules/BasketItem/BasketItem';
import PaymentButton from '../../components/atoms/PaymentButton/PaymentButton';
import CustomModal from '../../components/molecules/CustomModal/CustomModal';
import Input from '../../components/atoms/Input/Input';
import ConfirmButton from '../../components/atoms/ConfirmButton/ConfirmButton';
import CardPaymentForm from '../../components/organisms/CardPaymentForm/CardPaymentForm';
import { useBasket } from '../../store/useBasket';
import { calculateProductPrice, getCurrencySymbol, formatPrice } from '../../utils/currencyConverter';
import { useProducts } from '../../modules/useProducts';
import { usePayment } from '../../modules/usePayment';
import { BasketItemProps } from '../../components/molecules/BasketItem/BasketItem.types';
import { theme } from '../../theme';
import {
  Content,
  BasketContainer,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  PaymentButtonsContainer,
  ModalContent,
  ModalTitle,
  ModalLabel,
  InputContainer
} from './Payment.styles';

export default function Payment() {
  const router = useRouter();
  const { basket, currency, selectedCategory, handleRemoveItem, handleClearBasket } = useBasket();
  const { data: products } = useProducts();
  const { mutate: processPayment } = usePayment();
  const [showCashModal, setShowCashModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cashAmount, setCashAmount] = useState('');

  const { paymentItems, grandTotal } = useMemo(() => {
    return basket.reduce((acc, item) => {
      const product = products?.find(p => p.id === item.productId);
      if (!product) return acc;
      const { totalPrice } = calculateProductPrice(product, selectedCategory, currency, item.quantity);
      acc.paymentItems.push({
        id: item.productId,
        label: item.title,
        count: item.quantity,
        totalPrice,
        currency
      });
      acc.grandTotal += totalPrice;
      return acc;
    }, { paymentItems: [] as Array<BasketItemProps>, grandTotal: 0 });
  }, [basket, products, selectedCategory, currency]);

  const currencySymbol = getCurrencySymbol(currency);

  const handleCashPayment = useCallback(() => {
    processPayment({
      type: 'cash',
      amount: parseFloat(cashAmount),
      currency,
      items: paymentItems
    }, {
      onSuccess: () => {
        handleClearBasket();
        setShowCashModal(false);
        router.push('/');
      },
      onError: (error) => {
        console.error('Payment failed:', error);
      }
    });
  }, [processPayment, cashAmount, currency, paymentItems, handleClearBasket, router]);

  const handleCardPayment = useCallback(() => {
    processPayment({
      type: 'card',
      amount: grandTotal,
      currency,
      items: paymentItems
    }, {
      onSuccess: () => {
        handleClearBasket();
        setShowCardModal(false);
        router.push('/');
      },
      onError: (error) => {
        console.error('Payment failed:', error);
      }
    });
  }, [processPayment, grandTotal, currency, paymentItems, handleClearBasket, router]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScreenTemplate title="Payment">
        <TopHeader
          title="Receipt"
          description="Selected products"
          onClose={() => router.push('/')}
        />
        <Content>
          <BasketContainer>
            {paymentItems.map((item) => (
              <BasketItem
                id={item.id}
                key={item.id}
                label={item.label}
                count={item.count}
                totalPrice={item.totalPrice}
                currency={item.currency}
                onDismiss={() => handleRemoveItem(item.id)}
              />
            ))}
          </BasketContainer>
        </Content>
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>{currencySymbol}{formatPrice(grandTotal)}</TotalPrice>
        </TotalContainer>
        <PaymentButtonsContainer>
          <PaymentButton
            logo="💵"
            title="Cash"
            backgroundColor={theme.colors.black}
            onPress={() => setShowCashModal(true)}
          />
          <PaymentButton
            logo="💳"
            title="Card"
            backgroundColor={theme.colors.blue}
            onPress={() => setShowCardModal(true)}
          />
        </PaymentButtonsContainer>
        <CustomModal visible={showCashModal} onClose={() => setShowCashModal(false)}>
          <ModalContent>
            <ModalTitle>Cash Payment</ModalTitle>
            <ModalLabel>Enter the cash amount you want to provide:</ModalLabel>
            <InputContainer>
              <Input
                value={cashAmount}
                onChangeText={setCashAmount}
                keyboardType="decimal-pad"
                width={100}
                adornment={currencySymbol}
              />
            </InputContainer>
            <ConfirmButton
              title="Confirm"
              onPress={handleCashPayment}
              disabled={parseFloat(cashAmount) < grandTotal || !cashAmount}
            />
          </ModalContent>
        </CustomModal>
        <CustomModal visible={showCardModal} onClose={() => setShowCardModal(false)}>
          <ModalContent>
            <ModalTitle>Card Payment</ModalTitle>
            <CardPaymentForm onSubmit={handleCardPayment} />
          </ModalContent>
        </CustomModal>
      </ScreenTemplate>
    </GestureHandlerRootView>
  );
}