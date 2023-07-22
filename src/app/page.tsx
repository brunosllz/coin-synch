import { SectionContainer } from '@/components/SectionContainer'

import logo from '@/assets/logo.svg'
import hero1 from '@/assets/hero.png'
import hero2 from '@/assets/hero-2.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const LABEL_CONTENT = [
  { id: '1', label: 'Cryptos' },
  { id: '2', label: 'NFTs' },
  { id: '3', label: 'Games' },
]

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <SectionContainer>
        <div className="grid h-[499px] w-full grid-cols-[590px_1fr] gap-[6.125rem]">
          <div className="flex flex-col justify-end">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-primary-500">
                Lorem ipsum dolor sit amet, consectetur
              </h1>

              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </h5>
            </div>

            <Button className="mb-20 mt-8 gap-[10px] uppercase">
              Sign up now
              <ArrowRight size={16} />
            </Button>

            <ul className="flex gap-8">
              {LABEL_CONTENT.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="rounded bg-primary-100 px-4 py-1"
                  >
                    <span className="text-xl leading-[2rem] text-primary-500">
                      {item.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex overflow-hidden">
            <Image src={hero1} alt="" width={464} height={499} />
            <Image src={hero2} alt="" width={464} height={499} />
          </div>
        </div>
      </SectionContainer>

      <div className="mt-[42px] h-[335.06px] w-full bg-hero-pattern bg-cover bg-no-repeat" />

      <SectionContainer>
        <div>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index}>
                <strong>For your company</strong>
                <h3>Crypto Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam,{' '}
                </p>
              </div>
            )
          })}
        </div>
        <div>
          <div>
            <strong>Lorem ipsum </strong>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <button>Sign up now</button>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div>
          <div>
            <strong>Lorem ipsum </strong>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
        </div>
        <div>
          <form>
            {/* <label>
              Email
              <input placeholder="Email" />
            </label> */}
            <button>Sign up now</button>
          </form>
        </div>
      </SectionContainer>
      <SectionContainer>
        <span>Copyright © 2022 - All rights reserved</span>
        <Image src={logo} alt="" />
      </SectionContainer>
    </main>
  )
}
