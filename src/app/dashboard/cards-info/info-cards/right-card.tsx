import Image from 'next/image'

import elephantSuggestion from '@/assets/elephant-suggestion.png'

export function RightCard() {
  return (
    <div className="grid h-full grid-cols-2  overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col justify-between p-4">
        <div className="flex max-w-[107px] flex-col gap-[5px]">
          <span className="text-sm font-bold">NFT’s NEWS</span>

          <span className="text-xs">New ElephantX NFT to be lauched!</span>
        </div>

        <a href="#" className="text-xs text-primary-500">
          Read more +
        </a>
      </div>

      <div className="flex h-[112px] items-center justify-center overflow-hidden">
        <Image
          src={elephantSuggestion}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
