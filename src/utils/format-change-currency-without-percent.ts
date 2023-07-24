export function formatChangeCurrencyWithoutPercent(numberString: string) {
  const formattedPercentage = parseFloat(numberString)
    .toFixed(3)
    .replace('.', ',')
    .padStart(5, '+')

  return formattedPercentage
}
