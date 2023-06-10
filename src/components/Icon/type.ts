export type IconFamily = 'rounded' | 'outlined' | 'sharp';

export interface IconProps {
  customIcon?: string;
  className?: string;
  children?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  family?: IconFamily;
}
