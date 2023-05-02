export type SwitchSize = 'small' | 'medium';

export interface SwitchProps {
  className?: string;
  size?: SwitchSize;
}

export interface SpanProps {
  enabled?: boolean;
  size?: SwitchSize;
}
