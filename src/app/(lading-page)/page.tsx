import { SectionContainer } from '@/components/SectionContainer'

import logo from '@/assets/logo.svg'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HeroSection } from './hero-section'
import { AboutUsSection } from './about-us-section'
import { NewsletterSection } from './newsletter-section'

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <AboutUsSection />
      <NewsletterSection />

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
