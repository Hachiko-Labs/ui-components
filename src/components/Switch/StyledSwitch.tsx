import { SwitchProps, SwitchSize } from './type';

import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { StyledSpan } from './StyledSpan';

const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      return 'w-7 h-4';
    default:
      return 'w-11 h-6';
  }
};

const getEnabledClasses = (enabled?: boolean) => {
  if (enabled) {
    return 'bg-primary';
  }
  return 'bg-neutral-500';
};

const BASE_SWITCH_CLASS = 'relative inline-flex items-center rounded-full';

export const StyledSwitch = ({ className, size, ...props }: SwitchProps) => {
  const [enabled, setEnabled] = useState(false);

  const composedClasses = [
    BASE_SWITCH_CLASS,
    getSizeClasses(size),
    getEnabledClasses(enabled),
    className,
  ].join(' ');

  const spanProps = {
    enabled,
    size,
  };
  
  return (
    <Switch className={composedClasses} checked={enabled} onChange={setEnabled} {...props}>
      <StyledSpan {...spanProps} />
    </Switch>
  );
};
