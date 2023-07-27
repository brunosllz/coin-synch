import { InfoCards } from './info-cards'
import { BalanceCard } from './balance-card'

export function CardsInfo() {
  return (
    <div className="flex flex-col items-center gap-8 xl:flex-row">
      <BalanceCard />
      <InfoCards />
    </div>
  )
}
