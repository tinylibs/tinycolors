import c from '../../dist/node.js'

console.log(c.green('Green'))
console.log(c.red('Red'))
console.log({ FORCE_TTY: process.env.FORCE_TTY })
