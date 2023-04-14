import StyledButton from './StyledButton';
import { BaseButtonProps } from './types';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size: $size,
  type = 'default',
  ...props
}: BaseButtonProps) => {
  const size = $size === 'medium' ? 'middle' : $size;
  return <StyledButton size={size} type={type} {...props} />;
};

export default Button;
