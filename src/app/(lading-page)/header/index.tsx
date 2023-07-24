import { api } from '@/lib/axios'
import { Coin } from '../top-cryptos-section'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { CoinsSlider } from './coins-slider'

import logo from '@/assets/logo.svg'
import { formatCoinsToRealCurrency } from '@/utils/format-coins-to-real-currency'

export async function Header() {
  const coinCapResponse = await api.get('/assets', {
    headers: {
      Authorization: 'Bearer 3de67136-c80c-4ee5-8b67-64a10aa465cf',
    },
  })

  const coinCapResponseData = coinCapResponse.data.data as Coin[]
  const coins = await formatCoinsToRealCurrency(coinCapResponseData)

  return (
    <header className="fixed z-10 w-full bg-white py-4">
      <div className="mx-auto flex w-full max-w-[1216px] items-center justify-between">
        <div className="flex">
          <Image src={logo} alt="" />
          <nav className="ml-10 flex items-center gap-6">
            <Link href="#about-us" className="text-sm">
              About us
            </Link>
            <Link href="#top-cryptos" className="text-sm">
              Top Cryptos
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-20">
          <CoinsSlider coins={coins} />

          <ul className="flex gap-1">
            <div className="w-20">
              <Button size="sm" variant="link">
                Sign In
              </Button>
            </div>
            <div className="w-[100px]">
              <Button size="sm"> Sign up</Button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}
