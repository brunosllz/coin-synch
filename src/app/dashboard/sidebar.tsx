import Image from 'next/image'

import ethereum from '@/assets/ethereum.svg'
import bitcoin from '@/assets/bitcoin.svg'
import businessChart from '@/assets/business-chart.svg'
import wallet from '@/assets/wallet.svg'

export function Sidebar() {
  return (
    <aside className="relative flex h-full flex-col border-y border-secondary-300 bg-white pb-16 pl-6 pr-[30px] pt-12">
      <nav>
        <ul className="flex flex-col gap-8">
          <li>
            <a>
              <Image src={wallet} alt="" width={32} height={32} />
            </a>
          </li>
          <li>
            <a>
              <Image src={ethereum} alt="" width={32} height={32} />
            </a>
          </li>
          <li>
            <a>
              <Image src={bitcoin} alt="" width={32} height={32} />
            </a>
          </li>
          <li>
            <a>
              <Image src={businessChart} alt="" width={32} height={32} />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
