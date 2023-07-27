import { api } from '@/lib/axios'
import { WalletTable } from './wallet-table'
import { Coin } from '../../(lading-page)/top-cryptos-section'

export async function Wallet() {
  const coinCapResponse = await api.get('/assets', {
    headers: {
      Authorization: 'Bearer 3de67136-c80c-4ee5-8b67-64a10aa465cf',
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
