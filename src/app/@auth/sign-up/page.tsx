import {
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogParallelContent,
} from '@/components/ui/dialog'
import { SignUpForm } from './sign-up-form'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Dialog open>
      <DialogParallelContent>
        <DialogHeader>
          <DialogTitle className="mb-4 flex items-center gap-1 text-md font-normal sm:mb-6 sm:text-lg lg:text-xl">
            Sign in to{' '}
            <span className="text-md font-bold  text-secondary-500 sm:text-lg lg:text-xl">
              <span className="text-md font-bold  text-primary-500 sm:text-lg lg:text-xl">
                Coin
              </span>
              Synch
            </span>
          </DialogTitle>
        </DialogHeader>

        <SignUpForm />

        <div className="mt-4 flex w-full items-center justify-center gap-1 sm:mt-6">
          <span className="hidden text-center text-sm sm:block">
            Don’t have an account?
          </span>{' '}
          <Link href="/sign-in" className="cursor-pointer text-sm font-bold">
            {' '}
            Sign in to{' '}
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
