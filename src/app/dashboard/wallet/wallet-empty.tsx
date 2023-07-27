import Image from 'next/image'

import walletEmpty from '@/assets/wallet-empty.svg'

export function WalletEmpty() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center justify-center py-20">
        <Image src={walletEmpty} alt="" />
        <span className="mb-2 mt-6 text-lg font-bold">Nothing here yet...</span>
        <span className="text-sm">Add a crypto and start earning</span>
      </div>
    </div>
  )
}
