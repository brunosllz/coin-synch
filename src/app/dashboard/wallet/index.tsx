import { coinCapApi } from '@/lib/axios'
import { env } from '@/env'
import { Coin } from '../../(lading-page)/top-cryptos-section'

import { WalletTable } from './wallet-table'

export async function Wallet() {
  const coinCapResponse = await coinCapApi.get('/assets', {
    headers: {
      Authorization: `Bearer ${env.COIN_CAP_API_KEY} `,
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
    <>
      <WalletTable coins={coins} />
    </>
  )
}
