import {trim3, isWhitespace, jv, jevkoToPrettyString} from './mod.js'
import {parseJevko} from 'parsejevko.js'

console.assert(isWhitespace(' '))
console.assert(isWhitespace('\n'))
console.assert(isWhitespace('\t'))

const [pre, mid, post] = trim3('   mid mid mid    ')

console.assert(pre === '   ')
console.assert(mid === 'mid mid mid')
console.assert(post === '    ')

const brackets = "]][[``"
console.assert(jv`hello [${brackets}]` === "hello [`]`]`[`[````]", jv`hello [${brackets}]`)

console.assert(jevkoToPrettyString(parseJevko(`a[b]c[d]e[[f][g][h]]`)).includes('\n  [f]'))