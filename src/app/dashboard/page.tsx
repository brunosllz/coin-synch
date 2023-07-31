import { Metadata } from 'next'

import Image from 'next/image'
import { Wallet } from './wallet'
import { Button } from '@/components/ui/button'

import { Plus } from 'lucide-react'

import wallet from '@/assets/wallet.svg'
import { AddCryptoDialog } from './add-crypto-dialog'
import { CardsInfo } from './cards-info'
import { Footer } from './footer'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashBoard() {
  return (
    <main className="flex h-full flex-[1_1_auto] flex-col justify-between overflow-y-scroll bg-white xl:bg-background">
      <div className="mx-auto mt-6 flex flex-col px-6 sm:mt-14 sm:max-w-[704px] sm:px-4 lg:mb-20 lg:max-w-[1240px]">
        <CardsInfo />

        <div className="mt-6 flex flex-col rounded-lg bg-white sm:mt-8 sm:overflow-hidden sm:shadow-lg">
          <header className="flex items-center justify-between pb-4 sm:border-b sm:border-secondary-200 sm:px-6 sm:py-6">
            <div className="flex gap-4">
              <Image src={wallet} alt="" width={32} height={32} />
              <h3 className="tsm:text-xl text-lg font-bold">My Wallet</h3>
            </div>

            <AddCryptoDialog>
              <Button
                size="sm"
                className="h-auto w-auto gap-2 p-[6px] text-sm sm:h-8 sm:w-[120px] sm:py-2 sm:text-sm"
              >
                <Plus size={16} className="h-3 w-3" strokeWidth={2.5} />
                <span className="hidden text-sm sm:block">Add crypto</span>
              </Button>
            </AddCryptoDialog>
          </header>

          <Wallet />
        </div>
      </div>

      <Footer className="mt-20 flex xl:hidden" />
    </main>
  )
}
