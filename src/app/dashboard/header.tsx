'use client'

import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { ChevronDown } from 'lucide-react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { Logout } from '@/assets/logout'
import { MenuIcon } from '@/assets/menu-icon'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import { useSidebarResponsive } from '@/hooks/use-responsive-sidebar'

export function Header() {
  const { handleOpenClose } = useSidebarResponsive()
  const { data: session } = useSession()

  const sessionUserName = session?.user?.name

  const userName = sessionUserName?.split(' ')[0]

  return (
    <header className="relative flex w-full shrink-0 items-center justify-between px-6 py-4 shadow-md sm:px-10">
      <Button
        variant="ghost"
        size="icon"
        className="xl:hidden"
        onClick={handleOpenClose}
      >
        <MenuIcon />
      </Button>

      <Image src={logo} alt="" />

      <Popover>
        <PopoverTrigger>
          <div className="flex items-center">
            <Image
              src="https://www.github.com/brunosllz.png"
              alt=""
              width={32}
              height={32}
            />
            <span className="ml-2 hidden text-sm capitalize sm:block">
              {userName}
            </span>
            <ChevronDown size={16} className="ml-1" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Button
            variant="link"
            size="sm"
            className="flex items-center gap-4 p-0"
            onClick={() => signOut()}
          >
            <Logout />
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </header>
  )
}
