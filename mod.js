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