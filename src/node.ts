import { isatty } from 'node:tty'
import {
  createColors as originalCreateColors,
  isSupported as originalIsSupported,
} from './index'

export { Colors, Formatter, getDefaultColors } from './index'

const isTTY = process.env.FORCE_TTY !== undefined || isatty(1)

export function isSupported() {
  return originalIsSupported(isTTY)
}

export function createColors() {
  return originalCreateColors(isTTY)
}

export default originalCreateColors(isTTY)
