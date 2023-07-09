export type Direction = 'horizontal' | 'vertical'

export interface SpaceProps {
  size?: number
  direction?: Direction
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
