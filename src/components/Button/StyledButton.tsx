import { Icon } from '../Icon';
import { Space } from '../Space';
import { ButtonProps, ButtonSize, ButtonType } from './type';

const getSizeClasses = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return 'px-[12px] py-[6px] text-sm';
    case 'large':
      return 'px-[16px] py-[12px] text-lg';
    default:
      // default to medium
      return 'px-[14px] py-[9px] text-base';
  }
};

const getTypeClasses = (type?: ButtonType) => {
  switch (type) {
    case 'primary':
      return 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active';
    default:
      // default to primary
      return 'border border-primary text-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active';
  }
};

const getDisabledClasses = (disabled?: boolean) => {
  if (disabled) {
    return 'border disabled:border-neutral-border cursor-not-allowed bg-neutral-fillSecondary text-neutral-textSecondary';
  }
};

const iconSizes = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return 16;
    case 'large':
      return 24;
    default:
      // default to medium
      return 20;
  }
};

const BASE_BUTTON_CLASS = 'flex items-center rounded-lg font-medium';

export const StyledButton = ({
  size,
  type,
  children,
  className,
  leftIcon,
  loading,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const composedClasses = [
    BASE_BUTTON_CLASS,
    getSizeClasses(size),
    !disabled && !loading && getTypeClasses(type),
    getDisabledClasses(disabled || loading),
    className,
  ].join(' ');

  return (
    <button className={composedClasses} disabled={disabled} {...props}>
      <Space>
        {loading && (
          <Icon size={iconSizes(size)} className="animate-spin" customIcon="spinner" />
        )}
        {!loading && leftIcon && <Icon size={iconSizes(size)}>{leftIcon}</Icon>}
        <div>{children}</div>
        {rightIcon && <Icon size={iconSizes(size)}>{rightIcon}</Icon>}
      </Space>
    </button>
  );
};
