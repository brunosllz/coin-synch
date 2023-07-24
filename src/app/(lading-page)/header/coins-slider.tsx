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
    <div className="absolute -bottom-[41px] left-1/2 flex w-full -translate-x-1/2 justify-center bg-white py-[5px] shadow-md lg:static lg:translate-x-0 lg:shadow-none">
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
                <span className="truncate text-xs text-secondary-800 lg:text-sm">
                  {coin.symbol}
                </span>
                <span className="truncate text-xs lg:text-sm">
                  {coin.priceR$}
                </span>
                <span
                  className={cn(
                    'truncate text-xs text-tertiary-700 lg:text-sm',
                    {
                      'text-quaternary-700': isNegative,
                    },
                  )}
                >
                  {formatChangeCurrencyWithoutPercent(coin.changePercent24Hr)}
                </span>
              </li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
