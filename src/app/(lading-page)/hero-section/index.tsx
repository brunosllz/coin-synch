import { Button } from '@/components/ui/button'
import { Slider } from './slider'

import { ArrowRight } from 'lucide-react'

const TAGS_CONTENT = [
  { id: '1', label: 'Cryptos' },
  { id: '2', label: 'NFTs' },
  { id: '3', label: 'Games' },
]

export function HeroSection() {
  return (
    <section>
      <div className="flex w-full flex-col">
        <div className="grid h-[499px] w-full grid-cols-2 gap-[6.125rem]">
          <div className="flex justify-end">
            <div className="flex  w-full max-w-[590px] flex-col justify-end">
              <div className="flex flex-col gap-6">
                <h1 className="font-bold text-primary-500">
                  Lorem ipsum dolor sit amet, consectetur
                </h1>

                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </h5>
              </div>

              <Button className="mb-20 mt-8 gap-[10px] uppercase">
                Sign up now
                <ArrowRight size={16} />
              </Button>

              <ul className="flex gap-8">
                {TAGS_CONTENT.map((tag) => {
                  return (
                    <li
                      key={tag.id}
                      className="rounded bg-primary-100 px-4 py-1"
                    >
                      <span className="text-xl leading-[2rem] text-primary-500">
                        {tag.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <Slider />
        </div>
      </div>

      <div className="mt-[42px] h-[335.06px] w-full bg-hero-pattern bg-cover bg-no-repeat" />
    </section>
  )
}
