import { InfoCards } from './info-cards'
import { BalanceCard } from './balance-card'

export function CardsInfo() {
  return (
    <div className="flex flex-col items-center gap-4 border-b border-secondary-300 pb-6 sm:gap-8 sm:border-none sm:pb-0 xl:flex-row">
      <BalanceCard />
      <InfoCards />
    </div>
  )
}
