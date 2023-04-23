import { InputProps, InputSize } from './type';

const getSizeClasses = (size?: InputSize) => {
  switch (size) {
    case 'small':
      return 'text-sm px-[12px] py-[5px]';
    case 'large':
      return 'text-lg px-[24px] py-[15px]';
    default:
      return 'text-base px-[20px] py-[10px]';
  }
};

const getBorderedClasses = (bordered?: boolean) => {
  if (bordered) {
    return 'border border-neutral-border hover:border-primary focus:border-primary';
  }
  return 'border border-transparent focus:border-primary hover:border-primary';
};

const getDisabledClasses = (disabled?: boolean) => {
  if (disabled) {
    return 'border disabled:border-neutral-border cursor-not-allowed';
  }
};

const BASE_INPUT_CLASS = 'd-flex items-center rounded-md focus:outline-none';

export const StyledInput = ({
  className,
  size,
  placeholder,
  bordered,
  disabled,
  ...props
}: InputProps) => {
  const composedClasses = [
    BASE_INPUT_CLASS,
    getSizeClasses(size),
    getBorderedClasses(bordered),
    getDisabledClasses(disabled),
    className,
  ].join(' ');

  return (
    <input className={composedClasses} disabled={disabled} {...props} placeholder={placeholder} />
  );
};
