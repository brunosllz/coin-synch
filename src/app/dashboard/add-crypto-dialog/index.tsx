import { ReactNode } from 'react'
import { Coin } from '@/app/(lading-page)/top-cryptos-section'
import { coinCapApi } from '@/lib/axios'
import { env } from '@/env'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { AddCryptoForm } from './add-crypto-form'

interface SignInDialogProps {
  children: ReactNode
}

export async function AddCryptoDialog({ children }: SignInDialogProps) {
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 text-xl font-bold">
            Add Crypto
          </DialogTitle>
        </DialogHeader>

        <AddCryptoForm coins={coins} />
      </DialogContent>
    </Dialog>
  )
}
