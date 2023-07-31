'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { formatPriceToDollar } from '@/utils/format-price-to-dollar'

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
import { TradeCryptoDialog } from '../trade-crypto-dialog'

import { Trade } from '@/assets/trade'
import { WalletEmpty } from './wallet-empty'
import { useBreakpoint } from '@/hooks/use-breakpoints'

interface Wallet {
  id: string
  balance: number
  assetId: string
  symbol: string
  rank: string
  imageUrl: string
  changePercent: string
}

export function WalletTable() {
  const { data: session } = useSession()
  const userId = session?.userId
  const { isLg } = useBreakpoint('lg')

  const { data: wallet, isLoading: isLoadingWallet } = useQuery<Wallet[]>({
    queryKey: ['wallet'],
    queryFn: async () => {
      const { data } = await api.get(`/api/wallet/user/${session?.userId}`)

      return data
    },
    enabled: !!userId,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  })

  const hasAssets = wallet?.length! > 0

  // TODO: adjust conditional render - empty table cant show before
  return (
    <>
      {isLoadingWallet ? (
        <WalletEmpty />
      ) : hasAssets ? (
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
            {wallet!.map((asset) => {
              const isNegative = asset.changePercent.includes('-')

              return (
                <TableRow key={asset.id}>
                  <TableCell
                    className="text-sm text-secondary-500"
                    style={{ width: isLg ? '11.42%' : '2%' }}
                  >
                    {asset.rank.padStart(2, '0')}
                  </TableCell>

                  <TableCell
                    className="flex items-center"
                    style={{ width: isLg ? '29.47%' : '60%' }}
                  >
                    <Image
                      src={asset.imageUrl}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <span className="ml-4 flex gap-0.5">
                      {asset.assetId}{' '}
                      <span className="text-secondary-500">{asset.symbol}</span>
                    </span>
                  </TableCell>

                  <TableCell style={{ width: isLg ? '26.73%' : '15%' }}>
                    <div className="flex flex-col gap-1 text-sm">
                      {formatPriceToDollar(asset.balance.toString())}
                      <span className="text-sm text-primary-500">434 SOL</span>
                    </div>
                  </TableCell>

                  <TableCell
                    className={cn('text-tertiary-700', {
                      'text-quaternary-700': isNegative,
                    })}
                    style={{ width: isLg ? '22.43%' : '15%' }}
                  >
                    {asset.changePercent}
                  </TableCell>

                  <TableCell style={{ width: isLg ? '6.62%' : '2%' }}>
                    <TradeCryptoDialog asset={asset}>
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
      ) : (
        <WalletEmpty />
      )}
    </>
  )
}
