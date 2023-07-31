'use client'

import { useBreakpoint } from '@/hooks/use-breakpoints'
import { WalletList } from './wallet-list'
import { WalletTable } from './wallet-table'

export function Wallet() {
  const { isSm } = useBreakpoint('sm')

  // TODO: added context for manage with fetch wallet

  return <>{isSm ? <WalletTable /> : <WalletList />}</>
}
