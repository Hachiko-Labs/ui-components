import { SwitchProps, SwitchSize } from './type';

import { Switch } from '@headlessui/react';

const getEnabledClasses = (enabled?: boolean) => {
  if (enabled) {
    return 'translate-x-6';
  }
  return 'translate-x-1';
};

const BASE_SPAN_CLASS = 'inline-block h-4 w-4 transform rounded-full bg-white transition';

const BASE_SWITCH_CLASS =
  'relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-not-checked:bg-gray-200 bg-primary';

export const StyledSwitch = ({ className, size, enabled, ...props }: SwitchProps) => {
  const composedClasses = [BASE_SWITCH_CLASS, className].join(' ');
  const spanClasses = [BASE_SPAN_CLASS, getEnabledClasses(enabled)].join(' ');

  return (
    <Switch className={composedClasses} {...props}>
      <span className={spanClasses} />
    </Switch>
  );
};
