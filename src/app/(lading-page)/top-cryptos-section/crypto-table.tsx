'use client'

import { cn } from '@/lib/utils'
import { formatToPercentage } from '@/utils/format-to-percentage'
import { formatPriceToDollar } from '@/utils/format-price-to-dollar'
import { Coin } from '.'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import Image from 'next/image'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks/use-breakpoints'

interface CryptoTableProps {
  coins: Coin[]
}

export function CryptoTable({ coins }: CryptoTableProps) {
  const [amountCoinsShow, setAmountCoinsShow] = useState(4)
  const { isLg } = useBreakpoint('lg')

  const filteredCoins = coins.slice(0, amountCoinsShow)

  function handleChangeAmountCoinsShow() {
    if (amountCoinsShow === 4) {
      return setAmountCoinsShow(10)
    }

    setAmountCoinsShow(4)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Crypto</TableHead>
            <TableHead>Price</TableHead>
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
                  style={{ width: isLg ? '11.42%' : '2%' }}
                >
                  {coin.rank.padStart(2, '0')}
                </TableCell>

                <TableCell
                  className="flex items-center gap-4"
                  style={{ width: isLg ? '29.47%' : '50%' }}
                >
                  <Image
                    src={coin.imageUrl}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  {coin.name}
                </TableCell>

                <TableCell style={{ width: isLg ? '26.73%' : '20%' }}>
                  {formatPriceToDollar(coin.priceUsd)}
                </TableCell>

                <TableCell
                  className={cn('text-tertiary-700', {
                    'text-quaternary-700': isNegative,
                  })}
                  style={{ width: isLg ? '22.43%' : '20%' }}
                >
                  {formatToPercentage(coin.changePercent24Hr)}
                </TableCell>

                <TableCell style={{ width: isLg ? '6.62%' : '2%' }}>
                  <div className="w-20">
                    <Button size="sm" variant="secondary">
                      Buy
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Button
        variant={'link'}
        onClick={handleChangeAmountCoinsShow}
        className="mt-5 w-28 text-primary-500"
      >
        {amountCoinsShow === 4 ? (
          <span className="inline-flex items-center gap-2">
            View more <Plus size={16} strokeWidth={3} />
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            View less <Minus size={16} strokeWidth={3} />
          </span>
        )}
      </Button>
    </>
  )
}
