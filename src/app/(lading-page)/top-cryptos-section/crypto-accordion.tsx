'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

import Image from 'next/image'
import { Coin } from '.'
import { formatPriceToDollar } from '@/utils/format-price-to-dollar'
import { formatToPercentage } from '@/utils/format-to-percentage'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import { Plus, Minus } from 'lucide-react'

interface CryptoAccordionProps {
  coins: Coin[]
}

export function CryptoAccordion({ coins }: CryptoAccordionProps) {
  const [amountCoinsShow, setAmountCoinsShow] = useState(4)
  const [isOpen, setIsOpen] = useState('')
  const filteredCoins = coins.slice(0, amountCoinsShow)

  function handleChangeAmountCoinsShow() {
    if (amountCoinsShow === 4) {
      return setAmountCoinsShow(10)
    }

    setAmountCoinsShow(4)
  }

  return (
    <div className="flex w-full flex-col gap-2 px-6">
      <div className="flex items-center justify-between">
        <span className="text-xs text-secondary-500">Crypto</span>
        <span className="text-xs text-secondary-500 transition-all">
          {isOpen ? ' Actions' : 'Trade'}
        </span>
      </div>

      <Accordion
        type="single"
        collapsible
        onValueChange={setIsOpen}
        className="w-full"
      >
        {filteredCoins.map((coin) => {
          const isNegative = coin.changePercent24Hr.includes('-')

          return (
            <AccordionItem key={coin.id} value={coin.id}>
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Image src={coin.imageUrl} alt="" width={24} height={24} />
                  <span className="text-xs text-text-base">
                    {coin.name}{' '}
                    <span className="text-xs text-secondary-500">
                      {coin.symbol}
                    </span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500">Price</span>
                    <span className="text-sm">
                      {' '}
                      {formatPriceToDollar(coin.priceUsd)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500">Change</span>
                    <span
                      className={cn('text-sm text-tertiary-700', {
                        'text-quaternary-700': isNegative,
                      })}
                    >
                      {' '}
                      {formatToPercentage(coin.changePercent24Hr)}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      <Button
        variant={'link'}
        onClick={handleChangeAmountCoinsShow}
        className="w-28 self-center text-primary-500"
      >
        {amountCoinsShow === 4 ? (
          <span className="inline-flex items-center gap-2">
            View more <Plus size={16} strokeWidth={3} />
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            View less <Minus size={16} strokeWidth={3} />
          </span>
        )}
      </Button>
    </div>
  )
}
