import { coinCapApi } from '@/lib/axios'
import { Coin } from '../top-cryptos-section'
import { formatCoinsToRealCurrency } from '@/utils/format-coins-to-real-currency'
import { env } from '@/env'

import { CoinsSlider } from './coins-slider'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'
import { MenuIcon } from '@/assets/menu-icon'

export async function Header() {
  const coinCapResponse = await coinCapApi.get('/assets', {
    headers: {
      Authorization: `Bearer ${env.COIN_CAP_API_KEY}`,
    },
  })

  const coinCapResponseData = coinCapResponse.data.data as Coin[]
  const coins = await formatCoinsToRealCurrency(coinCapResponseData)

  return (
    <header className="fixed z-10 w-full border-b border-secondary-200 bg-white py-4 lg:border-none">
      <div className="relative w-full">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:max-w-[696px] sm:px-3 lg:max-w-[1240px]">
          <div className="flex w-full justify-between sm:justify-normal">
            <Image src={logo} alt="" />
            <nav className="ml-10 hidden items-center gap-6 sm:visible sm:flex">
              <Link href="#about-us" className="text-sm">
                About us
              </Link>
              <Link href="#top-cryptos" className="text-sm">
                Top Cryptos
              </Link>
            </nav>

            <MenuIcon />
          </div>

          <div className="items-center gap-20 sm:flex">
            <CoinsSlider coins={coins} />

            <ul className="hidden gap-1 sm:visible sm:flex sm:w-auto">
              <Link
                href="/sign-in"
                className="inline-flex h-8 w-[100px] items-center justify-center rounded-full py-2 text-sm underline-offset-4 ring-offset-white transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="'bg-primary-500 inline-flex h-8 w-[100px] items-center justify-center rounded-full bg-primary-500  py-2 text-sm text-white ring-offset-white transition-colors  hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Sign Up
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
