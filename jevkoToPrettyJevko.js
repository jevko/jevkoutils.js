import { argsToJevko } from "./argsToJevko.js"

export const jevkoToPrettyJevko = (jevko) => {
  return argsToJevko(...recur0(jevko))  
}

const recur0 = (jevko) => {
  const {subjevkos, suffix} = jevko

  let ret = []
  for (const {prefix, jevko} of subjevkos) {
    ret.push(escapePrefix(prefix), recur(jevko, '  ', ''), '\n')
    // ret += `${escapePrefix(prefix)}[${recur(jevko, '  ', '')}]\n`
  }
  ret.push(suffix)
  return ret
}

const escapePrefix = (prefix) => prefix === ''? '': prefix + ' '

const recur = (jevko, indent, prevIndent) => {
  const {subjevkos, suffix} = jevko

  let ret = []
  if (subjevkos.length > 0) {
    ret.push('\n')
    for (const {prefix, jevko} of subjevkos) {
      ret.push(indent, escapePrefix(prefix), recur(jevko, indent + '  ', indent), '\n')
      // ret += `${indent}${
      //   escapePrefix(prefix)
      // }[${recur(jevko, indent + '  ', indent)}]\n`
    }
    ret.push(prevIndent)
  }
  ret.push(suffix)
  return ret
}