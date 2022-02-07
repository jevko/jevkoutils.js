import { escape } from "./escape.js"

export const jevkoToPrettyString = (jevko) => {
  const {subjevkos, suffix} = jevko

  let ret = ''
  for (const {prefix, jevko} of subjevkos) {
    ret += `${escapePrefix(prefix)}[${recur(jevko, '  ', '')}]\n`
  }
  return ret + escape(suffix)
}

const escapePrefix = (prefix) => prefix === ''? '': escape(prefix) + ' '

const recur = (jevko, indent, prevIndent) => {
  const {subjevkos, suffix} = jevko

  let ret = ''
  if (subjevkos.length > 0) {
    ret += '\n'
    for (const {prefix, jevko} of subjevkos) {
      ret += `${indent}${
        escapePrefix(prefix)
      }[${recur(jevko, indent + '  ', indent)}]\n`
    }
    ret += prevIndent
  }
  return ret + escape(suffix)
}