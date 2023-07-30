import Image from 'next/image'

import elephantSuggestion from '@/assets/elephant-suggestion.png'

export function RightCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
      <div className="flex flex-col justify-between p-2 sm:p-4">
        <div className="flex max-w-[107px] flex-col gap-[7px] sm:gap-[5px]">
          <span className="text-xs font-bold sm:text-sm">NFT’s NEWS</span>

          <span className="text-xs">New ElephantX NFT to be lauched!</span>
        </div>

        <a href="#" className="hidden text-xs text-primary-500 sm:block">
          Read more +
        </a>
      </div>

      <div className="flex h-[128px] items-center justify-center overflow-hidden sm:h-[112px]">
        <Image
          src={elephantSuggestion}
          alt=""
          className="h-full w-full object-cover"
          quality={100}
        />
      </div>
    </div>
  )
}
