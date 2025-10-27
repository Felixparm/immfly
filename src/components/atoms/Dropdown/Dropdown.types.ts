export interface DropdownProps {
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
}