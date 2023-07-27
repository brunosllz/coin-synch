import { ReactNode } from 'react'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

interface SignInDialogProps {
  children: ReactNode
}

export function AddCryptoDialog({ children }: SignInDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 text-xl font-bold">
            Add Crypto
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col">
          <div className="gap flex flex-col gap-6 ">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose Crypto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="0,00" type="number" />
          </div>

          <Button className="mt-6">Add Crypto</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
