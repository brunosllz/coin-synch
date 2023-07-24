'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { formatChangeCurrencyWithoutPercent } from '@/utils/format-change-currency-without-percent'
import { useEffect, useRef, useState } from 'react'

interface CoinsSliderProps {
  coins: Array<{
    id: string
    symbol: string
    priceR$: string
    changePercent24Hr: string
  }>
}

export function CoinsSlider({ coins }: CoinsSliderProps) {
  const listRef = useRef<HTMLUListElement | null>(null)
  const [listWidth, setListWidth] = useState(0)

  useEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className="w-[360px] overflow-hidden">
      <motion.ul
        ref={listRef}
        className="flex w-full gap-6 transition-all"
        animate={{ x: -listWidth }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
      >
        {coins.map((coin) => {
          const isNegative = coin.changePercent24Hr.includes('-')

          return (
            <li key={coin.id} className="flex w-auto gap-2">
              <span className="truncate text-sm">{coin.symbol}</span>
              <span className="truncate text-sm ">{coin.priceR$}</span>
              <span
                className={cn('truncate text-sm text-tertiary-700', {
                  'text-quaternary-700': isNegative,
                })}
              >
                {formatChangeCurrencyWithoutPercent(coin.changePercent24Hr)}
              </span>
            </li>
          )
        })}
      </motion.ul>
    </div>
  )
}
