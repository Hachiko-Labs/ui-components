import { StyledButton } from './StyledButton';
import { ButtonProps } from './type';

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
