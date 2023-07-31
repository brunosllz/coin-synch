'use client'

import { useSession } from 'next-auth/react'
import { WalletCard } from './wallet-card'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Wallet } from './wallet-table'
import { WalletEmpty } from './wallet-empty'

export function WalletList() {
  const { data: session } = useSession()
  const userId = session?.userId
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

  return (
    <>
      {isLoadingWallet ? (
        <WalletEmpty />
      ) : hasAssets ? (
        <ul className="grid grid-cols-2 gap-4">
          {wallet!.map((asset) => {
            return <WalletCard key={asset.id} props={asset} />
          })}
        </ul>
      ) : (
        <WalletEmpty />
      )}
    </>
  )
}
