import { SwitchSize, SpanProps } from './type';

let enabledTranslateAmount: string;
let translateAmount: string;

// Tailwind can't construct class names dynamically
const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      translateAmount = `translate-x-0.5`;
      enabledTranslateAmount = `translate-x-3.5`;
      return 'w-3 h-3';
    default:
      translateAmount = `translate-x-1`;
      enabledTranslateAmount = `translate-x-6`;
      return 'w-4 h-4';
  }
};

const getEnabledClasses = (enabled?: boolean) => {
  if (enabled) {
    return enabledTranslateAmount;
  }
  return translateAmount;
};

const BASE_SPAN_CLASS =
  'pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out';

export const StyledSpan = ({ checked, size }: SpanProps) => {
  const composedClasses = [BASE_SPAN_CLASS, getSizeClasses(size), getEnabledClasses(checked)].join(
    ' '
  );

  return <span className={composedClasses} />;
};
