'use client'

import { WalletCard } from './wallet-card'

export function WalletList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        <WalletCard />
        <WalletCard />
        <WalletCard />
      </ul>
    </div>
  )
}
