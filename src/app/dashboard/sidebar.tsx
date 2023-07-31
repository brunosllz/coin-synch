import Image from 'next/image'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

import ethereum from '@/assets/ethereum.svg'
import bitcoin from '@/assets/bitcoin.svg'
import businessChart from '@/assets/business-chart.svg'
import wallet from '@/assets/wallet.svg'

const NAV_LINKS = [
  {
    id: '1',
    icon: wallet,
    tooltipLabel: 'Lorem Ipsum',
  },
  {
    id: '2',
    icon: ethereum,
    tooltipLabel: 'Lorem Ipsum',
  },
  {
    id: '3',
    icon: bitcoin,
    tooltipLabel: 'Lorem Ipsum',
  },
  {
    id: '4',
    icon: businessChart,
    tooltipLabel: 'Lorem Ipsum',
  },
]

export function Sidebar() {
  return (
    <aside className="relative hidden h-full flex-col border-y border-secondary-300 bg-white pb-16 pl-6 pr-[30px] pt-12 xl:flex">
      <nav>
        <ul className="flex flex-col gap-8">
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.id}>
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a>
                        <Image src={link.icon} alt="" width={32} height={32} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{link.tooltipLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
