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

export function CardList() {
  return (
    <>
      {CARD_CONTENT.map((item, index) => {
        return (
          <ul key={index} className="flex flex-col gap-8">
            <div className="grid grid-cols-[280px_1fr] gap-8">
              {item.top.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex max-w-[280px] flex-col gap-4 rounded-md bg-white p-6 shadow-xl"
                  >
                    <Image src={item.imageUrl} alt="" />

                    <div>
                      <span className="font-bold text-primary-500">
                        {item.label}
                      </span>
                      <h4 className="mb-2 mt-1 text-xl font-bold">
                        {item.title}
                      </h4>
                      <p className="text-paragraph">{item.content}</p>
                    </div>
                  </li>
                )
              })}
            </div>

            <div className="grid grid-cols-[1fr_280px] place-items-end gap-8">
              {item.bottom.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex max-w-[280px] flex-col gap-4 rounded-md bg-white p-6 shadow-xl"
                  >
                    <Image src={item.imageUrl} alt="" />

                    <div>
                      <span className="font-bold text-primary-500">
                        {item.label}
                      </span>
                      <h4 className="mb-2 mt-1 text-xl font-bold">
                        {item.title}
                      </h4>
                      <p className="text-paragraph">{item.content}</p>
                    </div>
                  </li>
                )
              })}
            </div>
          </ul>
        )
      })}
    </>
  )
}
