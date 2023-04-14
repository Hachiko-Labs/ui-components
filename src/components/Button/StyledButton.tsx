import { Button } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled,  { css } from 'styled-components';

const SizeStyles = css<{ size?: string }>`
  &.ant-btn {
    ${({ size }) => size === 'small' && `
      height: 32px;
      padding: 0 16px;
    `}
    ${({ size }) => size === 'medium' && `
      height: 35px;
      padding: 0 22px;
    `}
    ${({ size }) => size === 'large' && `
      height: 50px;
      padding: 0 30px;
    `}
  }
`;

const ColorStyles = css<{ type?: string }>`
  ${({ type, theme }) => type === 'primary' && `
    &.ant-btn {
      background-color: ${theme.colors.primaryBg};
      color: ${theme.colors.whiteText};

      &:hover {
        background-color: ${theme.colors.primaryBgHover};
      }

      &:active {
        background-color: ${theme.colors.primaryBgActive};
      }
    }
  `}

  ${({ type, theme }) => type === 'default' && `
    &.ant-btn {
      border-width: 2px;
      border-color: ${theme.colors.primaryBg};
      color: ${theme.colors.primaryText};

      &:hover {
        border-color: ${theme.colors.primaryBgHover};
        color: ${theme.colors.primaryBgHover};
      }

      &:active {
        border-color: ${theme.colors.primaryBgActive};
        color: ${theme.colors.primaryBgActive};
      }
    }
  `}
`;

const StyledButton = styled(Button)<AntdButtonProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  box-shadow: none;
  font-family: ${({ theme }) => theme.typography.family};

  ${SizeStyles}
  ${ColorStyles}
`;

export default StyledButton;