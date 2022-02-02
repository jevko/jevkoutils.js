import {trim3, isWhitespace} from './mod.js'

console.assert(isWhitespace(' '))
console.assert(isWhitespace('\n'))
console.assert(isWhitespace('\t'))

const [pre, mid, post] = trim3('   mid mid mid    ')

console.assert(pre === '   ')
console.assert(mid === 'mid mid mid')
console.assert(post === '    ')