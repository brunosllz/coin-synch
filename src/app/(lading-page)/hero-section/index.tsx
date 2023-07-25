import { Button } from '@/components/ui/button'
import { BannerSlider } from './banner-slider'

import { ArrowRight } from 'lucide-react'

const TAGS_CONTENT = [
  { id: '1', label: 'Cryptos' },
  { id: '2', label: 'NFTs' },
  { id: '3', label: 'Games' },
]

export function HeroSection() {
  return (
    <section className="mt-[137px] w-full overflow-hidden  sm:mt-[146px] lg:mt-[100px]">
      <div className="relative flex w-full px-6 sm:h-[336px] sm:max-w-[696px] sm:p-0 sm:pl-6 lg:h-[499px] lg:max-w-[1240px]">
        <div className="flex flex-col items-center justify-center sm:max-w-[320px] sm:justify-end lg:max-w-[590px]">
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
            <h1 className="text-center text-lg font-bold text-primary-500 sm:text-left sm:text-2xl lg:text-4xl">
              Lorem ipsum dolor sit amet, consectetur
            </h1>

            <h2 className="text-center text-paragraph sm:text-left sm:text-md lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </h2>
          </div>

          <div className="mb-6 mt-6 w-[180px] sm:mb-10 sm:w-[232px] lg:mb-20 lg:mt-8 lg:w-[278px]">
            <Button className="gap-[10px] py-2 text-sm uppercase sm:py-3 sm:text-md">
              Sign up now
              <ArrowRight size={16} />
            </Button>
          </div>

          <ul className="flex gap-8">
            {TAGS_CONTENT.map((tag) => {
              return (
                <li key={tag.id} className="rounded bg-primary-100 px-4 py-1">
                  <span className="text-xs leading-[2rem] text-primary-500 sm:text-md lg:text-lg">
                    {tag.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <BannerSlider />
      </div>

      <div className="h-[180px] w-full bg-hero-pattern bg-cover bg-no-repeat sm:h-[247px] lg:mt-[42px] lg:h-[335.06px]" />
    </section>
  )
}
