import Image from 'next/image'

import logo from '@/assets/logo.svg'

export function FooterSection() {
  return (
    <section className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-[1216px] items-center justify-between py-6">
        <span className="text-sm">Copyright © 2022 - All rights reserved</span>
        <Image src={logo} alt="" width={94} height={16} />
      </div>
    </section>
  )
}
