import { Button } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled, { css } from 'styled-components';

const SizeStyles = css<{ size?: string }>`
  &.ant-btn {
    ${({ size }) =>
      size === 'small' &&
      `
      padding: 6px 12px;
      font-size: 14px;

      [class^="material-"] {
        font-size: 18px;
      }
    `}
    ${({ size }) =>
      size === 'middle' &&
      `
      padding: 9px 14px;
      font-size: 16px;
      
      [class^="material-"] {
        font-size: 20px;
      }
    `}
    ${({ size }) =>
      size === 'large' &&
      `
      padding: 12px 16px;
      font-size: 18px;

      [class^="material-"] {
        font-size: 22px;
      }
    `}
  }
`;

const ColorStyles = css<{ type?: string }>`
  ${({ type, theme }) =>
    type === 'primary' &&
    `
    &.ant-btn:not(:disabled):not(.ant-btn-dangerous) {
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

  ${({ type, theme }) =>
    type === 'default' &&
    `
    &.ant-btn:not(:disabled):not(.ant-btn-dangerous) {
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

  ${({ theme }) => `
    &.ant-btn {
      &:disabled {
        border-color: ${theme.colors.colorBorder};
        background-color: ${theme.colors.colorBorderSecondary};
        color: ${theme.colors.colorTextQuaternary};
  
        &:hover {
          border-color: ${theme.colors.colorBorder};
          background-color: ${theme.colors.colorBorderSecondary};
          color: ${theme.colors.colorTextQuaternary};
        }
  
        &:active {
          border-color: ${theme.colors.colorBorder};
          background-color: ${theme.colors.colorBorderSecondary};
          color: ${theme.colors.colorTextQuaternary};
        }
      }
    }
  `}
`;

const StyledButton = styled(Button)<AntdButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 6px;
    box-shadow: none;
    font-family: ${({ theme }) => theme.typography.family};
  }

  ${SizeStyles}
  ${ColorStyles}
`;

export default StyledButton;
