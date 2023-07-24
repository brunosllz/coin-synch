import { api } from '@/lib/axios'
import { Coin } from '../top-cryptos-section'
import { formatCoinsToRealCurrency } from '@/utils/format-coins-to-real-currency'

import { Button } from '@/components/ui/button'
import { CoinsSlider } from './coins-slider'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'
import menuIcon from '@/assets/menu-icon.svg'

export async function Header() {
  const coinCapResponse = await api.get('/assets', {
    headers: {
      Authorization: 'Bearer 3de67136-c80c-4ee5-8b67-64a10aa465cf',
    },
  })

  const coinCapResponseData = coinCapResponse.data.data as Coin[]
  const coins = await formatCoinsToRealCurrency(coinCapResponseData)

  return (
    <header className="fixed z-10 w-full border-b border-secondary-200 bg-white py-4 lg:border-none">
      <div className="relative w-full">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:max-w-[696px] sm:px-6 lg:max-w-[1240px]">
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

            <Image
              src={menuIcon}
              alt=""
              width={24}
              height={24}
              className="sm:hidden"
            />
          </div>

          <div className="items-center gap-20 sm:flex">
            <div className="absolute -bottom-[41px] left-1/2 flex w-full -translate-x-1/2 justify-center bg-white py-[5px] shadow-md lg:static lg:translate-x-0 lg:shadow-none">
              <CoinsSlider coins={coins} />
            </div>

            <ul className="hidden gap-1 sm:visible sm:flex">
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
      </div>
    </header>
  )
}
