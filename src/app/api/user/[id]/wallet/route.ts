import { env } from '@/env'
import { coinCapApi } from '@/lib/axios'
import { prisma } from '@/lib/prisma'
import { formatToPercentage } from '@/utils/format-to-percentage'
import { NextResponse } from 'next/server'

interface GetWallet {
  params: {
    id: string
  }
}

interface Asset {
  id: string
  rank: string
  symbol: string
  name: string
  changePercent24Hr: string
}

export async function GET(_: Request, { params }: GetWallet) {
  const userId = params.id

  const wallet = await prisma.wallet.findMany({
    where: {
      userId,
    },
  })

  const assetsId = wallet.map((wallet) => wallet.assetId).join(',')

  const coinCapResponse = await coinCapApi.get('/assets', {
    headers: {
      Authorization: `Bearer ${env.COIN_CAP_API_KEY} `,
    },
    params: {
      ids: assetsId,
    },
  })

  const assets: Asset[] = coinCapResponse.data.data

  const currentWallet = wallet.map((assetWallet) => {
    const asset = assets.find((asset) => asset.id === assetWallet.assetId)

    return {
      id: assetWallet.id,
      balance: assetWallet.balance,
      assetId: assetWallet.assetId,
      symbol: asset!.symbol,
      rank: asset!.rank,
      imageUrl: `https://assets.coincap.io/assets/icons/${asset!.symbol.toLowerCase()}@2x.png`,
      changePercent: formatToPercentage(asset!.changePercent24Hr),
    }
  })

  return NextResponse.json(currentWallet)
}
