import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ScreenTemplate from '../components/templates/ScreenTemplate';
import TopHeader from '../components/molecules/TopHeader/TopHeader';
import BasketItem from '../components/molecules/BasketItem/BasketItem';
import PaymentButton from '../components/molecules/PaymentButton/PaymentButton';
import CustomModal from '../components/molecules/CustomModal/CustomModal';
import Input from '../components/atoms/Input/Input';
import ConfirmButton from '../components/atoms/ConfirmButton/ConfirmButton';
import CardPaymentForm from '../components/organisms/CardPaymentForm/CardPaymentForm';
import { useBasket } from '../reducer/useBasket';
import { calculateProductPrice, getCurrencySymbol, formatPrice } from '../utils/currencyConverter';
import { PriceCategory } from '../types/enums';
import { useProducts } from '../modules/useProducts';
import { BasketItemProps } from '../components/molecules/BasketItem/BasketItem.types';
import { theme } from '../theme';

export default function Payment() {
  const router = useRouter();
  const { basket, currency, selectedCategory, handleRemoveItem } = useBasket();
  const { data: products } = useProducts();
  const [showCashModal, setShowCashModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cashAmount, setCashAmount] = useState('');

  const { paymentItems, grandTotal } = basket.reduce((acc, item) => {
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

  const currencySymbol = getCurrencySymbol(currency);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScreenTemplate title="Payment">
        <TopHeader
          title="Receipt"
          description="Selected products"
          onClose={() => router.push('/')}
        />
        <ScrollView style={styles.content}>
          <View style={styles.basketContainer}>
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
          </View>
        </ScrollView>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>{currencySymbol}{formatPrice(grandTotal)}</Text>
        </View>
        <View style={styles.paymentButtonsContainer}>
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
        </View>
        <CustomModal visible={showCashModal} onClose={() => setShowCashModal(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cash Payment</Text>
            <Text style={styles.modalLabel}>Enter the cash amount you want to provide:</Text>
            <View style={styles.inputContainer}>
              <Input
                value={cashAmount}
                onChangeText={setCashAmount}
                keyboardType="decimal-pad"
                width={100}
                adornment={currencySymbol}
              />
            </View>
            <ConfirmButton
              title="Confirm"
              onPress={() => setShowCashModal(false)}
            />
          </View>
        </CustomModal>
        <CustomModal visible={showCardModal} onClose={() => setShowCardModal(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Card Payment</Text>
            <CardPaymentForm onSubmit={() => setShowCardModal(false)} />
          </View>
        </CustomModal>
      </ScreenTemplate>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  basketContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
    backgroundColor: theme.colors.lightGray,
    flex: 1,
  },
  totalContainer: {
    alignItems: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
  totalLabel: {
    fontSize: theme.typography.small.fontSize,
    color: theme.colors.gray,
    marginBottom: 4,
  },
  totalPrice: {
    fontSize: theme.typography.large.fontSize,
    fontWeight: theme.typography.large.fontWeight,
    color: theme.colors.black,
  },
  paymentButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
    backgroundColor: theme.colors.white,
  },
  modalContent: {
    padding: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: theme.typography.large.fontSize,
    fontWeight: theme.typography.large.fontWeight,
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: theme.typography.medium.fontSize,
    color: theme.colors.black,
    marginBottom: 12,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  modalButtons: {
    marginTop: 16,
  },

});