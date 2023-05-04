import { SwitchSize, SpanProps } from './type';

enum translateAmounts {
  SMALL_DISABLED = '0.125rem',
  SMALL_ENABLED = '0.875rem',
  DEFAULT_DISABLED = '0.25rem',
  DEFAULT_ENABLED = '1.5rem',
}

let enabledTranslateAmount: string;
let translateAmount: string;

const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      enabledTranslateAmount = translateAmounts.SMALL_ENABLED;
      translateAmount = translateAmounts.SMALL_ENABLED;
      return 'w-3 h-3';
    default:
      enabledTranslateAmount = translateAmounts.DEFAULT_ENABLED;
      translateAmount = translateAmounts.DEFAULT_ENABLED;
      return 'w-4 h-4';
  }
};

const getEnabledClasses = (enabled?: boolean) => {
  if (enabled) {
    return `translate-x-${enabledTranslateAmount}`;
  }
  return `translate-x-${translateAmount}`;
};

const BASE_SPAN_CLASS =
  'pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out';

export const StyledSpan = ({ enabled, size, ...props }: SpanProps) => {
  const composedClasses = [BASE_SPAN_CLASS, getSizeClasses(size), getEnabledClasses(enabled)].join(
    ' '
  );

  return <span className={composedClasses} />;
};
