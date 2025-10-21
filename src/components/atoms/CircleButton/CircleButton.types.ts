export enum ButtonType {
  PLUS = 'plus',
  MINUS = 'minus',
}

export interface CircleButtonProps {
  type: ButtonType;
  onPress?: () => void;
}