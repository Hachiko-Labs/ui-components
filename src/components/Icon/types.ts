export interface IconProps {
  children: string;
  className?: string;
  family?: 'round' | 'outlined';
  size?: 'small' | 'medium' | 'large' | number;
  style?: React.CSSProperties;
  spin?: boolean;
  color?: string;
}
