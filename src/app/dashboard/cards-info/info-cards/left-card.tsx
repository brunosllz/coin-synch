import Image from 'next/image'

import lawBalance from '@/assets/law-balance.svg'

export function LeftCard() {
  return (
    <div className="flex h-full items-center overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex w-auto flex-col bg-white p-2">
        <span className="text-xs text-secondary-500">Daily Variation</span>

        <div className="mb-2 mt-4 flex items-center">
          <Image src={lawBalance} alt="" width={24} height={24} />
          <span className="ml-2 text-sm">ETH</span>
        </div>

        <span className="text-tertiary-500">+5,65%</span>
      </div>

      <div>
        <span>CHART COMPONENT</span>
      </div>
    </div>
  )
}
