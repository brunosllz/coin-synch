export function formatToPercentage(numberString: string) {
  const formattedPercentage = parseFloat(numberString)
    .toFixed(2)
    .replace('.', ',')
    .padStart(5, '+')
    .padEnd(6, '%')

  return formattedPercentage
}
