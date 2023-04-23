export enum InputSize {
  SMALL = 24,
  MEDIUM = 32,
  LARGE = 40,
}
export type InputType = 'text' | 'textarea';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  size?: InputSize;
  placeholder?: string;
  maxLength?: number;
  type?: InputType;
  value?: string;
  bordered?: boolean;
  disabled?: boolean;
}
