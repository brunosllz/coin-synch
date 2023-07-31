import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Wallet } from './wallet-table'
import { formatPriceToDollar } from '@/utils/format-price-to-dollar'
import { TradeCryptoDialog } from '../trade-crypto-dialog'

interface WalletCardProps {
  props: Wallet
}

export function WalletCard({ props }: WalletCardProps) {
  return (
    <li className="w-full overflow-hidden rounded-md shadow-lg">
      <div className="flex w-full items-center justify-center gap-2 bg-primary-100 py-4">
        <Image
          src="https://www.github.com/brunosllz.png"
          alt=""
          width={16}
          height={16}
        />

        <span className="text-xs capitalize">
          {props.assetId}{' '}
          <span className="text-xs text-secondary-500">{props.symbol}</span>
        </span>
      </div>

      <div className="mx-4 flex flex-col gap-1 border-b border-secondary-200 py-4">
        <span className="text-xs text-secondary-500">Holdings</span>
        <span className="text-sm">
          {formatPriceToDollar(props.balance.toString())}
        </span>
        <span className="text-xs text-primary-500">434 {props.symbol}</span>
      </div>

      <div className="flex flex-col p-4">
        <span className="text-xs text-secondary-500">Change</span>
        <span className="mt-1 text-sm text-tertiary-500">
          {props.changePercent}
        </span>

        <TradeCryptoDialog asset={props}>
          <Button size="sm" className="mt-4 h-auto py-1 text-sm">
            Trade
          </Button>
        </TradeCryptoDialog>
      </div>
    </li>
  )
}
