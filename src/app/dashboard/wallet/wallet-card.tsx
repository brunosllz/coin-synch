import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function WalletCard() {
  return (
    <li className="w-full overflow-hidden rounded-md shadow-lg">
      <div className="flex w-full items-center justify-center gap-2 bg-primary-100 py-4">
        <Image
          src="https://www.github.com/brunosllz.png"
          alt=""
          width={16}
          height={16}
        />

        <span className="text-xs">
          Bitcoin <span className="text-xs text-secondary-500">BTC</span>
        </span>
      </div>

      <div className="mx-4 flex flex-col border-b border-secondary-200 py-4">
        <span className="text-xs text-secondary-500">Holdings</span>
        <span className="text-sm">US$ 25.499,52</span>
        <span className="text-xs text-primary-500">434 BTC</span>
      </div>
      <div className="flex flex-col p-4">
        <span className="text-xs text-secondary-500">Change</span>
        <span className="mt-1 text-sm text-tertiary-500"> +5,65%</span>
        <Button size="sm" className="mt-4 h-auto py-1 text-sm">
          Trade
        </Button>
      </div>
    </li>
  )
}
