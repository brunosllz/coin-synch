import { SectionContainer } from '@/components/SectionContainer'

import logo from '@/assets/logo.svg'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HeroSection } from './hero-section'
import { AboutUsSection } from './about-us-section'

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <AboutUsSection />

      <SectionContainer>
        <div className="grid grid-cols-2 gap-[239px] bg-newsletter-pattern px-[104px] py-[120px]">
          <div className="text-white">
            <h4>Lorem ipsum </h4>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <form className="flex flex-col ">
            <label className="flex flex-col gap-2 text-xs">
              Email
              <Input placeholder="Email" />
            </label>
            <Button className="mt-[13px]" type="submit">
              Sign up now
            </Button>
          </form>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="flex items-center justify-between py-6">
          <span className="text-sm leading-[1rem]">
            Copyright © 2022 - All rights reserved
          </span>
          <Image src={logo} alt="" width={94} height={16} />
        </div>
      </SectionContainer>
    </main>
  )
}
