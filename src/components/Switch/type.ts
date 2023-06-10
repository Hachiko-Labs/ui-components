export type SwitchSize = 'small' | 'medium';

export interface SwitchProps {
  /** The class name of the switch. */
  className?: string;
  /** Whether or not the switch is checked. */
  onCheckedChange?: (checked: boolean) => void;
  /** The default checked value when using as an uncontrolled component. */
  defaultChecked?: boolean;
  /** The size of the switch component */
  size?: SwitchSize;
  /** The value of the switch. */
  value?: string;
}

export interface SpanProps {
  checked?: boolean;
  size?: SwitchSize;
}
