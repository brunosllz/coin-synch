import Link from 'next/link'
import { BannerSlider } from './banner-slider'

import { ArrowRight } from 'lucide-react'

const TAGS_CONTENT = [
  { id: '1', label: 'Cryptos' },
  { id: '2', label: 'NFTs' },
  { id: '3', label: 'Games' },
]

export function HeroSection() {
  return (
    <section className="mt-[137px] w-full overflow-hidden sm:mt-[146px] lg:mt-[100px]">
      <div className="relative mx-auto flex w-full px-6 sm:h-[336px] sm:max-w-[696px] sm:p-0 sm:pl-3 lg:h-[499px] lg:max-w-[1240px]">
        <div className="flex flex-col items-center justify-center sm:max-w-[320px] sm:items-start lg:max-w-[590px]">
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

          <Link
            href="/sign-up"
            className="'mb-6 mt-6 inline-flex h-12 w-[180px] items-center justify-center gap-[10px] rounded-full  bg-primary-500 py-2  text-sm uppercase text-white ring-offset-white transition-colors hover:bg-primary-600 focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  sm:mb-10 sm:w-[232px] sm:py-3 sm:text-md lg:mb-20 lg:mt-8 lg:w-[278px]"
          >
            Sign up now
            <ArrowRight size={16} />
          </Link>

          <ul className="mt-6 flex gap-8 sm:mt-0">
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
