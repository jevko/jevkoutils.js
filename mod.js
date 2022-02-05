export const trim3 = (prefix) => {
  let i = 0, j = 0
  for (; i < prefix.length; ++i) {
    if (isWhitespace(prefix[i]) === false) break
  }
  for (j = prefix.length - 1; j > i; --j) {
    if (isWhitespace(prefix[j]) === false) break
  }
  ++j
  return [prefix.slice(0, i), prefix.slice(i, j), prefix.slice(j)]
}
export const isWhitespace = (c) => {
  return ' \n\r\t'.includes(c)
}

export const jevkoToString = (jevko) => {
  const {subjevkos, suffix} = jevko

  let ret = ''
  for (const {prefix, jevko} of subjevkos) {
    ret += `${escape(prefix)}[${jevkoToString(jevko)}]`
  }
  return ret + escape(suffix)
}

export const escape = (str) => {
  let ret = ''
  for (const c of str) {
    if (c === '[' || c === ']' || c === '`') ret += '`'
    ret += c
  }
  return ret
}

export const jv = (strings, ...keys) => {
  let ret = ''
  for (let i = 0; i < strings.length - 1; ++i) {
    const str = strings[i]
    const k = keys[i]
    ret += str + escape(k.toString())
  }

  return ret + strings[strings.length - 1]
}