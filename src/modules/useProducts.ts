import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';

export const useProducts = () => {
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://my-json-server.typicode.com/Felixparm/immfly-api/product');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };

  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};