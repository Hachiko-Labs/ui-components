import { ButtonProps as AntdButtonProps } from 'antd/lib/button';

interface ButtonProps {
  /** React element */
  children?: React.ReactNode;
  /** Class of the button */
  className?: string;
  /** Defines if the button is clickable or not */
  disabled?: boolean;
  /** The left material icon */
  leftIcon?: string;
  /** The right material icon */
  rightIcon?: string;
  /** Defines if the button is loading or not */
  loading?: boolean;
  /** Event called when clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Defines the size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Styles of the button */
  style?: React.CSSProperties;
  /** Type of the button */
  type?: 'default' | 'primary';
}

export type BaseButtonProps = ButtonProps & Omit<AntdButtonProps, 'size'>;
