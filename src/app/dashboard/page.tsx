import { Metadata } from 'next'

import Image from 'next/image'
import { Wallet } from './wallet'
import { Button } from '@/components/ui/button'

import { Plus } from 'lucide-react'

import wallet from '@/assets/wallet.svg'
import { AddCryptoDialog } from './add-crypto-dialog'
import { CardsInfo } from './cards-info'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashBoard() {
  return (
    <main className="h-full flex-[1_1_auto] overflow-y-scroll bg-background">
      <div className="mx-auto mt-6 flex flex-col px-6 sm:mt-14 sm:max-w-[704px] sm:px-4 lg:max-w-[1240px]">
        <CardsInfo />

        <div className="mt-8 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
          <header className="flex items-center justify-between border-b border-secondary-200 p-6">
            <div className="flex gap-4">
              <Image src={wallet} alt="" width={32} height={32} />
              <h3 className="text-xl font-bold">My Wallet</h3>
            </div>

            <AddCryptoDialog>
              <Button size="sm" className="w-[120px] gap-2 text-sm">
                <Plus size={16} />
                Add crypto
              </Button>
            </AddCryptoDialog>
          </header>

          <Wallet />
        </div>
      </div>
    </main>
  )
}
