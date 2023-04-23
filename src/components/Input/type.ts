export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  size?: InputSize;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  bordered?: boolean;
  disabled?: boolean;
}
