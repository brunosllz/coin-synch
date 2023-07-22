import { SectionContainer } from '@/components/SectionContainer'

import logo from '@/assets/logo.svg'
import hero1 from '@/assets/hero.png'
import hero2 from '@/assets/hero-2.png'
import bitcoin from '@/assets/bitcoin.svg'
import ethereum from '@/assets/business-chart.svg'
import businessChart from '@/assets/ethereum.svg'
import laptopMobile from '@/assets/laptop-mobile.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'

const LABEL_CONTENT = [
  { id: '1', label: 'Cryptos' },
  { id: '2', label: 'NFTs' },
  { id: '3', label: 'Games' },
]

const CARD_CONTENT = [
  {
    top: [
      {
        id: '1',
        label: 'For your company',
        title: 'Crypto Solutions',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
        imageUrl: bitcoin,
      },
      {
        id: '2',
        label: 'For your company',
        title: 'Crypto Solutions',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
        imageUrl: ethereum,
      },
    ],
    bottom: [
      {
        id: '3',
        label: 'For your company',
        title: 'Crypto Solutions',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
        imageUrl: businessChart,
      },
      {
        id: '4',
        label: 'For your company',
        title: 'Crypto Solutions',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ',
        imageUrl: laptopMobile,
      },
    ],
  },
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
        <div className="mb-[130px] mt-[120px] grid grid-cols-[696px_1fr] gap-8 bg-gradient-to-b from-white/0 to-[#F7F7F7]">
          {CARD_CONTENT.map((item, index) => {
            return (
              <ul key={index} className="flex flex-col gap-8">
                <div className="grid grid-cols-[280px_1fr] gap-8">
                  {item.top.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-xl"
                      >
                        <Image src={item.imageUrl} alt="" />

                        <div>
                          <strong>{item.label}</strong>
                          <h3>{item.title}</h3>
                          <p>{item.content} </p>
                        </div>
                      </li>
                    )
                  })}
                </div>

                <div className="grid grid-cols-[1fr_280px] gap-8">
                  {item.top.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-xl"
                      >
                        <Image src={item.imageUrl} alt="" />

                        <div>
                          <strong>{item.label}</strong>
                          <h3>{item.title}</h3>
                          <p>{item.content} </p>
                        </div>
                      </li>
                    )
                  })}
                </div>
              </ul>
            )
          })}

          <div className="flex max-w-[406px] flex-col justify-center gap-10">
            <div>
              <h5 className="font-bold text-primary-500">Lorem ipsum </h5>
              <h2 className="mb-4 mt-1 font-bold">Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>

            <Button>Sign up now</Button>
          </div>
        </div>
      </SectionContainer>

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
        <span>Copyright © 2022 - All rights reserved</span>
        <Image src={logo} alt="" />
      </SectionContainer>
    </main>
  )
}
