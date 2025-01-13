import {
  createColors as originalCreateColors,
  isSupported as originalIsSupported,
} from './index'

export { Colors, Formatter, getDefaultColors } from './index'

export function isSupportted() {
  return originalIsSupported()
}

export function createColors() {
  return originalCreateColors()
}

export default originalCreateColors()
