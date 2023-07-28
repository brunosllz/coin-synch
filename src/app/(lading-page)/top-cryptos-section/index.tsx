import { coinCapApi } from '@/lib/axios'
import { env } from '@/env'

import { CryptoPlace } from './crypto-place'

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
  const coinCapResponse = await coinCapApi.get('/assets', {
    headers: {
      Authorization: `Bearer ${env.COIN_CAP_API_KEY}`,
    },
    params: {
      limit: 10,
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
      <div className="mx-auto flex w-full flex-col items-center py-14 sm:max-w-[696px] sm:px-3 sm:py-[120px] lg:max-w-[1240px]">
        <h3 className="mb-4 text-lg font-bold sm:mb-12 sm:text-xl lg:text-2xl">
          Top Cryptos
        </h3>
        <CryptoPlace coins={coins} />
      </div>
    </section>
  )
}
