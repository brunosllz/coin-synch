export function formatPriceToDollar(numberString: string) {
  // Convert the input string to a float number
  const numberValue = parseFloat(numberString)

  // Format the number as a currency string
  const formattedCurrency = numberValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedCurrency.replace('R$', 'US$')
}
