'use client'

import { Coin } from '.'
import { useBreakpoint } from '@/hooks/use-breakpoints'

import { CryptoTable } from './crypto-table'
import { CryptoAccordion } from './crypto-accordion'

interface CryptoPlaceProps {
  coins: Coin[]
}

export function CryptoPlace({ coins }: CryptoPlaceProps) {
  const { isSm } = useBreakpoint('sm')

  return (
    <>
      {isSm ? <CryptoTable coins={coins} /> : <CryptoAccordion coins={coins} />}
    </>
  )
}
