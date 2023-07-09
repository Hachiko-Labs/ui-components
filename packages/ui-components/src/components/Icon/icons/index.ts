import { IconProps } from '../type'
import { Spinner } from './Spin'

export const icons: Record<string, (T: IconProps) => JSX.Element> = {
    spinner: Spinner,
}
