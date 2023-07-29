import { ReactNode } from 'react'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { SignUpForm } from './sign-up-form'

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

        <SignUpForm />

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
