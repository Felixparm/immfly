const API_BASE_URL = 'https://my-json-server.typicode.com/Felixparm/immfly-api';

export const processPayment = async (paymentData: any): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });
  
  if (!response.ok) {
    throw new Error('Payment failed');
  }
};