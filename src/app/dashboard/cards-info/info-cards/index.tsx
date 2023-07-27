import { LeftCard } from './left-card'
import { RightCard } from './right-card'

export function InfoCards() {
  return (
    <div className="grid h-[112px] w-full grid-cols-2 items-center gap-8 xl:w-auto">
      <LeftCard />
      <RightCard />
    </div>
  )
}
