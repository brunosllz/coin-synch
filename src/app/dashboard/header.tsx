import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header className="relative flex w-full shrink-0 items-center justify-between px-10 py-4 shadow-lg">
      <Image src={logo} alt="" />

      <div className="flex items-center">
        <Image
          src="https://www.github.com/brunosllz.png"
          alt=""
          width={32}
          height={32}
        />
        <span className="ml-2 mr-1 text-sm ">Bruno</span>
        <ChevronDown size={16} />
      </div>
    </header>
  )
}
