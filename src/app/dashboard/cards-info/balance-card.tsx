import Image from 'next/image'

import lawBalance from '@/assets/law-balance.svg'

export function BalanceCard() {
  return (
    <div className="flex h-12 w-full items-center overflow-hidden rounded-lg shadow-lg sm:grid sm:h-auto sm:flex-none sm:grid-cols-2 xl:max-w-[592px]">
      <div className="flex w-full items-center gap-2 bg-white px-4 py-2 sm:w-auto sm:gap-4 sm:p-6">
        <div className="flex items-center justify-center rounded-full bg-primary-100 p-[6px] sm:p-3">
          <Image
            src={lawBalance}
            alt=""
            className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] xl:h-10 xl:w-10"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg xl:text-xl">Balance</span>
            <span className="text-xs text-secondary-500">in US$</span>
          </div>
          <span className="hidden sm:block">(approximately)</span>
        </div>
      </div>

      <div className="flex h-full flex-[1_1_auto] items-center justify-center bg-primary-100 px-[22px]">
        <span className="text-md font-bold sm:text-xl xl:text-2xl">
          $32,256.56
        </span>
      </div>
    </div>
  )
}
