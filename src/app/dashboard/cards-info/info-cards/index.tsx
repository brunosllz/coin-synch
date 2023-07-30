import { LeftCard } from './left-card'
import { RightCard } from './right-card'

export function InfoCards() {
  return (
    <div className="grid h-[142px] w-full grid-cols-2 items-center gap-4 sm:h-[112px] xl:w-auto">
      <LeftCard />
      <RightCard />
    </div>
  )
}
