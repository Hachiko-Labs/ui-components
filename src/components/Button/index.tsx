import { StyledButton } from './StyledButton';
import { ButtonProps } from './type';

export const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);
