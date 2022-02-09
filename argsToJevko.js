export const argsToJevko = (...args) => {
  const subjevkos = []
  let subjevko = {prefix: ''}
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i]
    if (Array.isArray(arg)) {
      subjevko.jevko = argsToJevko(...arg)
      subjevkos.push(subjevko)
      subjevko = {prefix: ''}
    } else if (typeof arg === 'string') {
      subjevko.prefix += arg
    } else throw Error(`Argument #${i} has unrecognized type (${typeof arg})! Only strings and arrays are allowed. The argument's value is: ${arg}`)
  }
  return {subjevkos, suffix: subjevko.prefix}
}