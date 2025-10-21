import { Product } from '../types';

const API_BASE_URL = 'https://my-json-server.typicode.com/Felixparm/immfly-api';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/product`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};