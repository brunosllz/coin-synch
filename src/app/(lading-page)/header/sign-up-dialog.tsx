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

import mail from '@/assets/mail.svg'
import lock from '@/assets/lock.svg'
import user from '@/assets/user.svg'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface SignUpDialogProps {
  children: ReactNode
}

export function SignUpDialog({ children }: SignUpDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 text-xl font-normal">
            Sign in to{' '}
            <span className="text-xl font-bold text-secondary-500">
              <span className="text-xl font-bold text-primary-500">Coin</span>
              Synch
            </span>
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col">
          <div className="gap flex flex-col gap-6 ">
            <div className="flex items-center rounded-md border border-secondary-300 pl-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
              <Image src={user} alt="" />
              <Input
                placeholder="Name"
                className="pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex items-center rounded-md border border-secondary-300 pl-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
              <Image src={mail} alt="" />
              <Input
                placeholder="Email"
                className="pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
              <Image src={lock} alt="" />
              <Input
                placeholder="Password"
                className="pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Eye size={18} className="text-secondary-300" />
            </div>

            <div className="flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
              <Image src={lock} alt="" />
              <Input
                placeholder="Confirm Password"
                className="pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Eye size={18} className="text-secondary-300" />
            </div>
          </div>

          <div className="my-6 flex items-start gap-4">
            <Checkbox id="terms" />

            <Label htmlFor="terms" className="text-sm ">
              I have read and accept the{' '}
              <a href="#" className="text-sm font-bold">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-sm font-bold">
                Terms of User Sign up.
              </a>
            </Label>
          </div>

          <Button>Sign in</Button>
        </form>

        <span className="text-center text-sm">
          Already have and account?
          <a className="text-sm font-bold">
            {' '}
            Sign in to{' '}
            <span className="text-sm font-bold text-secondary-500">
              <span className="text-sm font-bold text-primary-500">Coin</span>
              Synch
            </span>
          </a>
        </span>
      </DialogContent>
    </Dialog>
  )
}
