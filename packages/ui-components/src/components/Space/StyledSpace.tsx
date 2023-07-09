import { SpaceProps } from './type'

const getDirectionClasses = (direction?: string) => {
  switch (direction) {
    case 'horizontal':
      return 'flex-row'
    default:
      // default to vertical
      return 'flex-col'
  }
}

const getSizeClasses = (direction?: string, size?: number) => {
  switch (direction) {
    case 'horizontal':
      return `space-x-${size}`
    default:
      // default to vertical
      return `space-y-${size}`
  }
}

const BASE_SPACE_CLASS = 'flex items-center'

const StyledSpace = ({
  className,
  size = 8,
  direction = 'horizontal',
  ...props
}: SpaceProps) => {
  const composedClasses = [
    BASE_SPACE_CLASS,
    className,
    getSizeClasses(direction, size),
    getDirectionClasses(direction),
  ].join(' ')

  return <div className={composedClasses} {...props} />
}

export default StyledSpace
