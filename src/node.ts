import { isatty } from 'node:tty'
import { createColors } from './index'

export * from './index'

export default createColors(process.env.FORCE_TTY !== undefined || isatty(1))
