import Image from 'next/image'

import { Chart } from './chart'
import { coinCapApi } from '@/lib/axios'
import { formatToPercentage } from '@/utils/format-to-percentage'

export async function LeftCard() {
  const [coinCapApiHistoryResponse, coinCapApiCryptoResponse] =
    await Promise.all([
      await coinCapApi.get(`/assets/bitcoin/history?interval=d1`),
      await coinCapApi.get(`/assets/bitcoin`),
    ])

  const cryptoHistory = coinCapApiHistoryResponse.data.data
  const crypto = coinCapApiCryptoResponse.data.data

  return (
    <div className="flex h-full flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg sm:flex-row">
      <div className="flex w-full flex-col bg-white p-2 sm:h-full sm:w-auto">
        <span className="truncate text-xs text-secondary-500">
          Daily Variation
        </span>

        <div className="mb-2 mt-2 flex w-full items-center justify-between sm:mt-4 sm:flex-col sm:items-start sm:gap-2">
          <div className="flex items-center">
            <Image
              src="https://assets.coincap.io/assets/icons/btc@2x.png"
              alt=""
              width={24}
              height={24}
              className="h-4 w-4 sm:h-6 sm:w-6"
            />
            <span className="ml-2 text-xs sm:text-sm">{crypto.symbol}</span>
          </div>

          <span className="mr-1 text-sm text-tertiary-500 sm:mr-0 sm:text-md">
            {formatToPercentage(crypto.changePercent24Hr)}
          </span>
        </div>
      </div>

      <div className="h-full w-full">
        <Chart data={cryptoHistory} />
      </div>
    </div>
  )
}
