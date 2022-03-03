import {trim3, isWhitespace, jv, jevkoToPrettyString, argsToJevko, jevkoToPrettyJevko, jevkoToString, jevkosEqual} from './mod.js'
import {parseJevko, assert} from './devDeps.js'

const {test} = Deno

test('isWhitespace', () => {
  assert(isWhitespace(' '))
  assert(isWhitespace('\n'))
  assert(isWhitespace('\t'))
})

test('trim3', () => {
  const [pre, mid, post] = trim3('   mid mid mid    ')
  
  assert(pre === '   ')
  assert(mid === 'mid mid mid')
  assert(post === '    ')
})

test('jv', () => {
  const brackets = "]][[``"
  assert(jv`hello [${brackets}]` === "hello [`]`]`[`[````]", jv`hello [${brackets}]`)
})

test('jevkoToPrettyString', () => {
  const prettyString = jevkoToPrettyString(parseJevko(`a[b]c[d]e[[f][[g][x][c]][h]]`))

  assert(prettyString.includes('\n  [f]'))
  assert(prettyString.includes('\n    [g]'))
  assert(prettyString.includes('\n  ]'))

  assert(jevkoToPrettyString(argsToJevko(
    "first", " name", ["John"],
    "last", " name", ["Smith"],
    "things", [["1"], ["2"], "", ["3"]]
  )).includes('first name [John]'))
})

test('jevkoToString, jevkoToPrettyJevko', () => {
  assert(jevkoToString(jevkoToPrettyJevko(parseJevko(`a[b]c[[d][[e]x[f]]]`))).includes('    x [f]\n  ]\n'))
})

test('jevkosEqual', () => {
  assert(jevkosEqual(parseJevko(`a [b] c [d]`), parseJevko(`a [b] c [d]`)))
  assert(jevkosEqual(parseJevko(`a[b] c [d]`), parseJevko(`a [b] c [d]`)) === false)
})