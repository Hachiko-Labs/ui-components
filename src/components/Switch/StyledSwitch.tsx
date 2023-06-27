import * as Switch from '@radix-ui/react-switch';

import { SwitchProps, SwitchSize } from './type';
import { StyledThumb } from './StyledThumb';

const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      return 'w-[30px] h-[15px]';
    default:
      return 'w-[45px] h-[25px]';
  }
};

const CHECKED_SWITCH_CLASS =
  'data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-500';

const BASE_SWITCH_CLASS =
  'rounded-full relative inline-flex items-center outline-none cursor-default';

export const StyledSwitch = ({
  className,
  size,
  defaultChecked,
  onCheckedChange,
  ...props
}: SwitchProps) => {
  const composedClasses = [
    BASE_SWITCH_CLASS,
    CHECKED_SWITCH_CLASS,
    getSizeClasses(size),
    className,
  ].join(' ');

  const handleCheckedChange = (checked: boolean) => {
    onCheckedChange?.(checked);
  };

  return (
    <Switch.Root className={composedClasses} onCheckedChange={handleCheckedChange} {...props}>
      <StyledThumb size={size} />
    </Switch.Root>
  );
};
