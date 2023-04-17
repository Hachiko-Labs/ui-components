import { Icon } from '../Icon/Icon';

import StyledButton from './StyledButton';
import { ButtonProps } from './types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  size: $size,
  type = 'default',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const size = $size === 'medium' ? 'middle' : $size;
  return (
    <StyledButton
      icon={leftIcon ? <Icon>{leftIcon}</Icon> : null}
      size={size}
      type={type}
      {...props}
    >
      {children}
      {rightIcon && <Icon>{rightIcon}</Icon>}
    </StyledButton>
  );
};
