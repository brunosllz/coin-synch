import Image from 'next/image'

import lawBalance from '@/assets/law-balance.svg'

export function BalanceCard() {
  return (
    <div className="grid w-full grid-cols-2 items-center overflow-hidden rounded-lg shadow-lg xl:max-w-[592px]">
      <div className="flex items-center gap-4 bg-white p-6">
        <div className="flex items-center justify-center rounded-full bg-primary-100 p-3">
          <Image
            src={lawBalance}
            alt=""
            className="h-[30px] w-[30px] xl:h-10 xl:w-10"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-lg xl:text-xl">Balance in US$</span>
          <span>(approximately)</span>
        </div>
      </div>

      <div className="flex h-full items-center justify-center bg-primary-100">
        <span className="text-xl font-bold xl:text-2xl">$32,256.56</span>
      </div>
    </div>
  )
}
