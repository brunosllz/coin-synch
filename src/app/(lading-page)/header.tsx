import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="fixed z-10 w-full bg-white py-4">
      <div className="mx-auto flex w-full max-w-[1216px] items-center justify-between">
        <div className="flex">
          <Image src={logo} alt="" />
          <nav className="ml-10 flex items-center gap-6">
            <Link href="#about-us">About us</Link>
            <Link href="/">Top Cryptos</Link>
          </nav>
        </div>

        <div className="flex">
          <div>
            <span>BIT</span>
            <span>R$ 23,62</span>
            <span>+7,082</span>
          </div>

          <div>
            <Button>Sign In</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
