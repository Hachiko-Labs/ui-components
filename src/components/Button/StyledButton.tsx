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

const getLoadingClasses = (loading?: boolean) => {
  if (loading) {
    return 'opacity-50 cursor-wait';
  }
  return '';
};

const BASE_BUTTON_CLASS = 'd-flex items-center rounded-lg font-medium';

export const StyledButton = ({
  size,
  type,
  children,
  className,
  loading,
  ...props
}: ButtonProps) => {
  const composedClasses = [
    BASE_BUTTON_CLASS,
    getSizeClasses(size),
    getTypeClasses(type),
    getLoadingClasses(loading),
    className,
  ].join(' ');

  return (
    <button className={composedClasses} {...props}>
      {children}
    </button>
  );
};
