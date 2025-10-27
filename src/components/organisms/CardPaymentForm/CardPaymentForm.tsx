import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CardPaymentFormProps } from './CardPaymentForm.types';
import { Container, RowContainer, InputContainer, ErrorText } from './CardPaymentForm.styles';
import Input from '../../atoms/Input/Input';
import ExpirationDateInput from '../../atoms/ExpirationDateInput/ExpirationDateInput';
import ConfirmButton from '../../atoms/ConfirmButton/ConfirmButton';

export default function CardPaymentForm({ onSubmit }: CardPaymentFormProps) {
  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cardholderName: ''
    }
  });

  return (
    <Container>
      <Controller
        control={control}
        name="cardNumber"
        rules={{
          required: 'Card number is required',
          pattern: {
            value: /^\d{12}$/,
            message: 'Card number must be exactly 12 digits'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <InputContainer>
            <Input
              label="Card Number"
              value={value}
              onChangeText={(text) => onChange(text.replace(/\D/g, '').slice(0, 12))}
              keyboardType="numeric"
              width={200}
            />
            {errors.cardNumber && <ErrorText>{errors.cardNumber.message}</ErrorText>}
          </InputContainer>
        )}
      />
      <RowContainer>
        <Controller
          control={control}
          name="expirationDate"
          rules={{
            required: 'Expiration date is required',
            validate: (value) => {
              if (value.length !== 5) return 'Invalid date format';
              const [month, year] = value.split('-');
              const currentDate = new Date();
              const currentYear = currentDate.getFullYear() % 100;
              const currentMonth = currentDate.getMonth() + 1;
              const expYear = parseInt(year);
              const expMonth = parseInt(month);
              if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
                return 'Card has expired';
              }
              return true;
            }
          }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <ExpirationDateInput
                label="Expiration Date"
                value={value}
                onChangeText={onChange}
                width={100}
              />
              {errors.expirationDate && <ErrorText>{errors.expirationDate.message}</ErrorText>}
            </InputContainer>
          )}
        />
        <Controller
          control={control}
          name="cvv"
          rules={{
            required: 'CVV is required',
            pattern: {
              value: /^\d{3}$/,
              message: 'CVV must be exactly 3 digits'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Input
                label="CVV"
                value={value}
                onChangeText={(text) => onChange(text.replace(/\D/g, '').slice(0, 3))}
                keyboardType="numeric"
                width={80}
              />
              {errors.cvv && <ErrorText>{errors.cvv.message}</ErrorText>}
            </InputContainer>
          )}
        />
      </RowContainer>
      <Controller
        control={control}
        name="cardholderName"
        rules={{
          required: 'Cardholder name is required',
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Name must contain only letters'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <InputContainer>
            <Input
              label="Cardholder Name"
              value={value}
              onChangeText={(text) => onChange(text.replace(/[^A-Za-z\s]/g, ''))}
              keyboardType="default"
              width={200}
            />
            {errors.cardholderName && <ErrorText>{errors.cardholderName.message}</ErrorText>}
          </InputContainer>
        )}
      />
      <ConfirmButton
        title="Confirm"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </Container>
  );
}