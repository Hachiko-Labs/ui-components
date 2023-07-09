import { Thumb } from '@radix-ui/react-switch'
import { SwitchSize, SpanProps } from './type'

// Tailwind can't construct class names dynamically
const getSizeClasses = (size?: SwitchSize) => {
  switch (size) {
    case 'small':
      return 'w-[12px] h-[12px] translate-x-0.5 data-[state=checked]:translate-x-3.5'
    default:
      return 'w-[18px] h-[18px] translate-x-1 data-[state=checked]:translate-x-6'
  }
}

const BASE_SPAN_CLASS =
  'pointer-events-none inline-block transform rounded-full bg-neutral-100 shadow-lg ring-0 transition duration-200 ease-in-out'

export const StyledThumb = ({ size }: SpanProps) => {
  const composedClasses = [BASE_SPAN_CLASS, getSizeClasses(size)].join(' ')

  return <Thumb className={composedClasses} />
}
