import { ReactNode } from 'react'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { TradeCryptoForm } from './trade-crypto-form'

interface TradeCryptoDialogProps {
  children: ReactNode
  asset: {
    assetId: string
    symbol: string
    balance: number
    imageUrl: string
  }
}

export function TradeCryptoDialog({ children, asset }: TradeCryptoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b border-secondary-200 pb-6">
          <DialogTitle className="flex items-center gap-1 text-xl font-bold">
            Tansfer Crypto
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center space-x-6">
          <span className="text-sm text-secondary-400">
            You are transfering
          </span>

          <div className="flex gap-2">
            <Image src={asset.imageUrl} alt="" width={24} height={24} />
            {asset.assetId}{' '}
            <span className="text-secondary-500">{asset.symbol}</span>
          </div>
        </div>

        <TradeCryptoForm cryptoId={asset.assetId} balance={asset.balance} />
      </DialogContent>
    </Dialog>
  )
}
