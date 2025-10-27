import { useMutation } from '@tanstack/react-query';

export const usePayment = () => {
  const processPayment = async (paymentData: any): Promise<void> => {
    const response = await fetch('https://my-json-server.typicode.com/Felixparm/immfly-api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.status) {
      throw new Error('Payment failed');
    }
  };

  return useMutation({
    mutationFn: processPayment,
  });
};