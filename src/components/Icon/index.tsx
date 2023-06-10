import { cloneElement, createElement } from 'react';
import { icons } from './icons';
import { IconProps } from './type';

const FAMILY = {
  rounded: 'material-symbols-rounded',
  sharp: 'material-symbols-sharp',
  outlined: 'material-symbols-outlined',
};

export const Icon = ({
  family = 'rounded',
  children,
  customIcon,
  style,
  size,
  ...props
}: IconProps) => {
  const composedClasses = [FAMILY[family]];

  if (customIcon) {
    const CustomIcon = icons[customIcon];
    return <CustomIcon size={size} style={style} {...props} />;
  }

  return (
    <div className={composedClasses.join(' ')} style={{ fontSize: size, ...style }} {...props}>
      {children}
    </div>
  );
};
