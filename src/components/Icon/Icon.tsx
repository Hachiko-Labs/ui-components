import { IconProps } from './types';

const VARIANT = {
  round: 'material-symbols-rounded',
  outlined: 'material-symbols-outlined',
};

export const Icon = ({ children, className = '', family = 'round', spin, size, style }: IconProps) => {
  const classes = [VARIANT[family], className];

  if (spin) classes.push('anticon-spin');

  return (
    <span style={{ fontSize: size, ...style }} className={classes.join(' ')}>
      {children}
    </span>
  );
};
