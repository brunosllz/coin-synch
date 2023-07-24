import { Coin } from '@/app/(lading-page)/top-cryptos-section'
import axios from 'axios'

interface Quotation {
  USDBRL: {
    bid: string
  }
}

export async function formatCoinsToRealCurrency(coins: Coin[]) {
  const { data: awesomeApiResponse } = await axios.get<Quotation>(
    'https://economia.awesomeapi.com.br/last/USD-BRL',
  )

  const currentQuoteOfReal = Number(
    parseFloat(awesomeApiResponse.USDBRL.bid).toFixed(2),
  )

  return coins.map((coin) => {
    const priceInDollar = parseFloat(coin.priceUsd)
    const convertDollarToReal = priceInDollar * currentQuoteOfReal

    const formattedCurrency = convertDollarToReal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return {
      id: coin.id,
      symbol: coin.symbol,
      priceR$: formattedCurrency,
      changePercent24Hr: coin.changePercent24Hr,
    }
  })
}
