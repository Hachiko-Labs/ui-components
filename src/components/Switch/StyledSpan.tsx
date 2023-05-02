import { SwitchSize, SpanProps } from './type';

let enabledTranslateAmount = 0;
let translateAmount = 0;

const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      enabledTranslateAmount = 3.5;
      translateAmount = 0.5;
      return 'w-3 h-3';
    default:
      enabledTranslateAmount = 6;
      translateAmount = 1;
      return 'w-4 h-4';
  }
};

const getEnabledClasses = (enabled?: boolean) => {
  if (enabled) {
    return `translate-x-${enabledTranslateAmount}`;
  }
  return `translate-x-${translateAmount}`;
};

const BASE_SPAN_CLASS = 'inline-block transform rounded-full bg-white transition';

export const StyledSpan = ({ enabled, size, ...props }: SpanProps) => {
  const composedClasses = [BASE_SPAN_CLASS, getSizeClasses(size), getEnabledClasses(enabled)].join(
    ' '
  );

  return <span className={composedClasses} />;
};
