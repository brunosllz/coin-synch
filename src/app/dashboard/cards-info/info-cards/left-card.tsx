import Image from 'next/image'

import lawBalance from '@/assets/law-balance.svg'

export function LeftCard() {
  return (
    <div className="flex h-full flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg sm:flex-row">
      <div className="flex w-full flex-col bg-white p-2 sm:h-full sm:w-auto">
        <span className="text-xs text-secondary-500">Daily Variation</span>

        <div className="mb-2 mt-2 flex w-full items-center justify-between sm:mt-4 sm:flex-col sm:items-start sm:gap-2">
          <div className="flex items-center">
            <Image
              src={lawBalance}
              alt=""
              width={24}
              height={24}
              className="h-4 w-4 sm:h-6 sm:w-6"
            />
            <span className="ml-2 text-xs sm:text-sm">ETH</span>
          </div>

          <span className="mr-1 text-sm text-tertiary-500 sm:mr-0 sm:text-md">
            +5,65%
          </span>
        </div>
      </div>

      <div>
        <span>CHART COMPONENT</span>
      </div>
    </div>
  )
}
