import { coinCapApi } from '@/lib/axios'
import { Coin } from '../top-cryptos-section'
import { formatCoinsToRealCurrency } from '@/utils/format-coins-to-real-currency'
import { env } from '@/env'

import { Button } from '@/components/ui/button'
import { CoinsSlider } from './coins-slider'
import Image from 'next/image'
import Link from 'next/link'
import { SignUpDialog } from './sign-up-dialog'
import { SignInDialog } from './sign-in-dialog'

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

            <ul className="hidden gap-1 sm:visible sm:flex">
              <SignInDialog>
                <Button size="sm" className="w-20" variant="link">
                  Sign In
                </Button>
              </SignInDialog>

              <SignUpDialog>
                <Button className="w-[100px]" size="sm">
                  {' '}
                  Sign up
                </Button>
              </SignUpDialog>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
