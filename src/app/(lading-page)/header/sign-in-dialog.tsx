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

import { Mail } from '@/assets/mail'
import { Lock } from '@/assets/lock'
import { Eye } from 'lucide-react'

interface SignInDialogProps {
  children: ReactNode
}

export function SignInDialog({ children }: SignInDialogProps) {
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
              <Mail />
              <Input
                placeholder="Email"
                className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
              <Lock />
              <Input
                placeholder="Password"
                className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Eye size={18} className="text-secondary-300" />
            </div>
          </div>
          <a href="#" className="mt-[9px] self-end text-xs text-secondary-500 ">
            Forgot password?
          </a>

          <Button className="mt-6">Sign in</Button>
        </form>

        <span className="text-center text-sm">
          Don’t have an account?
          <a className="text-sm font-bold">
            {' '}
            Sign up to{' '}
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
