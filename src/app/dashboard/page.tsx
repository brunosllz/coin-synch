import Image from 'next/image'

import { Plus } from 'lucide-react'
import wallet from '@/assets/wallet.svg'
import walletEmpty from '@/assets/wallet-empty.svg'

import lawBalance from '@/assets/law-balance.svg'
import elephantSuggestion from '@/assets/elephant-suggestion.png'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashBoard() {
  return (
    <main className="h-full flex-[1_1_auto] overflow-y-scroll bg-background">
      <div className="mx-auto mt-14 flex max-w-[1216px] flex-col">
        <div className="flex items-center gap-8">
          {/* Card Left */}
          <div className="grid w-full max-w-[592px] grid-cols-2 items-center overflow-hidden rounded-lg shadow-lg">
            <div className="flex items-center bg-white p-6">
              <div className="flex items-center justify-center rounded-full bg-primary-100 p-3">
                <Image src={lawBalance} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl">Balance in US$</span>
                <span>(approximately)</span>
              </div>
            </div>

            <div className="flex h-full items-center justify-center bg-primary-100">
              <span className="text-2xl">$32,256.56</span>
            </div>
          </div>
          {/* Card Right */}
          <div className="grid h-[112px] grid-cols-2 items-center gap-8">
            <div className="flex h-full items-center overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="flex w-auto flex-col bg-white p-2">
                <span className="text-xs text-secondary-500">
                  Daily Variation
                </span>

                <div className="mb-2 mt-4 flex items-center">
                  <Image src={lawBalance} alt="" width={24} height={24} />
                  <span className="ml-2 text-sm">ETH</span>
                </div>

                <span className="text-tertiary-500">+5,65%</span>
              </div>

              <div>
                <span>CHART COMPONENT</span>
              </div>
            </div>

            <div className="grid h-full grid-cols-2 items-center overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="flex flex-col justify-between p-4">
                <div className="flex max-w-[107px] flex-col gap-[5px]">
                  <span className="font-bold">NFT’s NEWS</span>

                  <span className="text-xs">
                    New ElephantX NFT to be lauched!
                  </span>
                </div>

                <a href="#" className="text-xs text-primary-500">
                  Read more +
                </a>
              </div>

              <Image
                src={elephantSuggestion}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
          <header className="flex items-center justify-between border-b border-secondary-200 p-6">
            <div className="flex gap-4">
              <Image src={wallet} alt="" width={32} height={32} />
              <h3 className="text-xl font-bold">My Wallet</h3>
            </div>

            <Button size="sm" className="w-[120px] gap-2 text-sm">
              <Plus size={16} />
              Add crypto
            </Button>
          </header>

          <div className="flex w-full flex-col">
            <div className="flex flex-col items-center justify-center py-20">
              <Image src={walletEmpty} alt="" />
              <span className="mb-2 mt-6 text-lg font-bold">
                Nothing here yet...
              </span>
              <span className="text-sm">Add a crypto and start earning</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
