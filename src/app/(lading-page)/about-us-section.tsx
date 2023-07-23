import { SectionContainer } from '@/components/SectionContainer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import bitcoin from '@/assets/bitcoin.svg'
import ethereum from '@/assets/business-chart.svg'
import businessChart from '@/assets/ethereum.svg'
import laptopMobile from '@/assets/laptop-mobile.svg'

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

export function AboutUsSection() {
  return (
    <section className="flex w-full flex-col bg-gradient-to-b from-white/0 to-[#F7F7F7]">
      <div className="mx-auto mb-[130px] mt-[120px] grid w-full max-w-[1216px] grid-cols-[696px_1fr] gap-8">
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
    </section>
  )
}
