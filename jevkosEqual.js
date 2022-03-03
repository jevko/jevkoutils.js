export const jevkosEqual = (a, b) => {
  const {subjevkos: subA, suffix: sufA} = a
  const {subjevkos: subB, suffix: sufB} = b
  if (sufA !== sufB) return false
  if (subA.length !== subB.length) return false
  for (let i = 0; i < subA.length; ++i) {
    const {prefix: preA, jevko: jevA} = subA[i]
    const {prefix: preB, jevko: jevB} = subB[i]

    if (preA !== preB) return false
    if (jevkosEqual(jevA, jevB) === false) return false
  }
  return true
}