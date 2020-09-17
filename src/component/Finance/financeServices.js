export function calculateCompoundReturns(
  startAmount,
  regIncrement,
  interests,
  years,
  monthly = true
) {
  let investment = startAmount,
    compound = startAmount
  let period = monthly ? years * 12 : years
  interests = monthly ? interests / 12 : interests
  let modulo = monthly ? 12 : 1
  for (let i = 1; i < period; i++) {
    investment += startAmount + Math.floor(i / modulo) * regIncrement
    compound +=
      (compound * interests) / 100 +
      startAmount +
      Math.floor(i / modulo) * regIncrement
  }
  return [investment, compound]
}
