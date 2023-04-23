import { InputProps, InputSize } from './type';

const getSizeClasses = (size?: InputSize) => {
  switch (size) {
    case InputSize.SMALL:
      return 'text-sm px-[12px] py-[5px]';
    case InputSize.MEDIUM:
      return 'text-base px-[20px] py-[10px]';
    case InputSize.LARGE:
      return 'text-lg px-[24px] py-[15px]';
  }
};

const getBorderedClasses = (bordered?: boolean) => {
  if (!bordered) {
    return 'border border-primary active:border-primary-active focus:ring-0';
  }
  return 'border-0';
};

const BASE_INPUT_CLASS = 'd-flex items-center rounded-md';

export const StyledInput = ({
  className,
  size,
  placeholder,
  maxLength,
  type,
  value,
  bordered,
  ...props
}: InputProps) => {
  const composedClasses = [
    BASE_INPUT_CLASS,
    getSizeClasses(size),
    getBorderedClasses(bordered),
    className,
  ].join(' ');

  return <input className={composedClasses} {...props} placeholder={placeholder}></input>;
};
