import {trim3, isWhitespace, jv} from './mod.js'

console.assert(isWhitespace(' '))
console.assert(isWhitespace('\n'))
console.assert(isWhitespace('\t'))

const [pre, mid, post] = trim3('   mid mid mid    ')

console.assert(pre === '   ')
console.assert(mid === 'mid mid mid')
console.assert(post === '    ')

const brackets = "]][[``"
console.assert(jv`hello [${brackets}]` === "hello [`]`]`[`[````]", jv`hello [${brackets}]`)