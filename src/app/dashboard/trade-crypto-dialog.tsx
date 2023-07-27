import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { ReactNode } from 'react'
import { Label } from '@/components/ui/label'

interface TradeCryptoDialogProps {
  children: ReactNode
}

export function TradeCryptoDialog({ children }: TradeCryptoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b border-secondary-200 pb-6">
          <DialogTitle className="flex items-center gap-1 text-xl font-bold">
            Tansfer Crypto
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center space-x-6">
          <span className="text-sm text-secondary-400">
            You are transfering
          </span>

          <div>
            {/* <Image src="" alt="" /> */}
            Bitcoin <span>BTC</span>
          </div>
        </div>

        <form className="flex flex-col">
          <Label htmlFor="crypto">Transfer</Label>
          <Select>
            <SelectTrigger id="crypto" className="mt-2">
              <SelectValue placeholder="Select transfer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">Transfer in</SelectItem>
              <SelectItem value="out">Transfer out</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="email" className="mt-6 text-sm">
            Quantity
          </Label>
          <Input id="email" placeholder="0,00" type="number" className="mt-2" />

          <Button className="mt-8">Transfer Crypto</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
