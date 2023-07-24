import { api } from '@/lib/axios'

import { CryptoTable } from './crypto-table'

export interface Coin {
  id: string
  name: string
  rank: string
  symbol: string
  priceUsd: string
  changePercent24Hr: string
  imageUrl: string
}

export async function TopCryptosSection() {
  const coinCapResponse = await api.get('/assets', {
    headers: {
      Authorization: 'Bearer 3de67136-c80c-4ee5-8b67-64a10aa465cf',
    },
  })

  const coinCapResponseData = coinCapResponse.data.data as Coin[]

  const coins = coinCapResponseData.map((coin) => {
    return {
      ...coin,
      imageUrl: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
    }
  })

  return (
    <section id="top-cryptos" className="w-full">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center py-[120px]">
        <h3 className="mb-12 text-2xl font-bold">Top Cryptos</h3>

        <CryptoTable coins={coins} />
      </div>
    </section>
  )
}
