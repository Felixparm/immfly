export const formatLabel = (value: string): string => {
  return value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const formatExpirationDate = (text: string): string => {
  const digits = text.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  }
  return digits;
};