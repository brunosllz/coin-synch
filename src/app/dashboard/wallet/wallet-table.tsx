import { Coin } from '../../(lading-page)/top-cryptos-section'
import { cn } from '@/lib/utils'
import { formatPriceToDollar } from '@/utils/format-price-to-dollar'
import { formatToPercentage } from '@/utils/format-to-percentage'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import { Trade } from '@/assets/trade'
import { TradeCryptoDialog } from '../trade-crypto-dialog'

interface WalletTableProps {
  coins: Coin[]
}

export function WalletTable({ coins }: WalletTableProps) {
  const filteredCoins = coins.slice(0, 5)

  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Crypto</TableHead>
          <TableHead>Holdings</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Trade</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredCoins.map((coin) => {
          const isNegative = coin.changePercent24Hr.includes('-')

          return (
            <TableRow key={coin.id}>
              <TableCell
                className="text-sm text-secondary-500"
                style={{ width: '11.42%' }}
              >
                {coin.rank.padStart(2, '0')}
              </TableCell>

              <TableCell
                className="flex items-center gap-4"
                style={{ width: '29.47%' }}
              >
                <Image
                  src={coin.imageUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                {coin.name}
                <span>{coin.symbol}</span>
              </TableCell>

              <TableCell style={{ width: '26.73%' }}>
                <div className="flex flex-col gap-1 text-sm">
                  {formatPriceToDollar(coin.priceUsd)}
                  <span className="text-sm text-primary-500">434 SOL</span>
                </div>
              </TableCell>

              <TableCell
                className={cn('text-tertiary-700', {
                  'text-quaternary-700': isNegative,
                })}
                style={{ width: '22.43%' }}
              >
                {formatToPercentage(coin.changePercent24Hr)}
              </TableCell>

              <TableCell style={{ width: '6.62%' }}>
                <TradeCryptoDialog>
                  <Button size="icon" variant="ghost" className="group">
                    <Trade className="group-hover:stroke-secondary-700" />
                  </Button>
                </TradeCryptoDialog>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
