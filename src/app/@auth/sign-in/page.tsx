import {
  DialogHeader,
  Dialog,
  DialogParallelContent,
  DialogTitle,
} from '@/components/ui/dialog'

import { SignInForm } from './sign-in-form'
import Link from 'next/link'

export default function SignIn() {
  return (
    <Dialog open>
      <DialogParallelContent>
        <DialogHeader>
          <DialogTitle className="mb-6 flex items-center gap-1 text-md font-normal sm:text-lg lg:text-xl">
            Sign in to{' '}
            <span className="text-md font-bold text-secondary-500 sm:text-lg lg:text-xl">
              <span className="text-md font-bold text-primary-500 sm:text-lg lg:text-xl">
                Coin
              </span>
              Synch
            </span>
          </DialogTitle>
        </DialogHeader>

        <SignInForm />

        <div className="mt-4 flex w-full items-center justify-center gap-1 lg:mt-6">
          <span className="hidden text-center text-sm sm:block">
            Don’t have an account?
          </span>{' '}
          <Link href="/sign-up" className="cursor-pointer text-sm font-bold">
            {' '}
            Sign up to{' '}
            <span className="text-xs font-bold text-secondary-500 sm:text-sm">
              <span className="text-xs font-bold text-primary-500 sm:text-sm">
                Coin
              </span>
              Synch
            </span>
          </Link>
        </div>
      </DialogParallelContent>
    </Dialog>
  )
}
