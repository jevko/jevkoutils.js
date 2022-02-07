export const escape = (str) => {
  let ret = ''
  for (const c of str) {
    if (c === '[' || c === ']' || c === '`') ret += '`'
    ret += c
  }
  return ret
}