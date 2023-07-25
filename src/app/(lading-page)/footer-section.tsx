import Image from 'next/image'

import logo from '@/assets/logo.svg'

export function FooterSection() {
  return (
    <section className="flex w-full flex-col">
      <div className="mx-auto flex w-full items-center justify-center px-3 py-6 sm:max-w-[696px] sm:justify-between lg:max-w-[1240px]">
        <span className="hidden text-sm sm:block">
          Copyright © 2022 - All rights reserved
        </span>

        <Image src={logo} alt="" width={94} height={16} />
      </div>
    </section>
  )
}
