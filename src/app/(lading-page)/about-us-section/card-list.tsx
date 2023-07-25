'use client'

import { useBreakpoint } from '@/hooks/use-breakpoints'

import { DraggableList } from './draggable-list'
import { GridList } from './grid-list'

import bitcoin from '@/assets/bitcoin.svg'
import businessChart from '@/assets/business-chart.svg'
import ethereum from '@/assets/ethereum.svg'
import laptopMobile from '@/assets/laptop-mobile.svg'

const CARDS_CONTENT = [
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

export type CardContentType = typeof CARDS_CONTENT

export function CardList() {
  const { isSm } = useBreakpoint('sm')

  return (
    <>
      {isSm ? (
        <GridList content={CARDS_CONTENT} />
      ) : (
        <DraggableList content={CARDS_CONTENT} />
      )}
    </>
  )
}
