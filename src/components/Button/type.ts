export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'primary' | 'default';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
