import {
  DialogHeader,
  Dialog,
  DialogParallelContent,
  DialogTitle,
} from '@/components/ui/dialog'

import { SignInForm } from './sign-in-form'

export default function SignIn() {
  return (
    <Dialog open>
      <DialogParallelContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 text-xl font-normal">
            Sign in to{' '}
            <span className="text-xl font-bold text-secondary-500">
              <span className="text-xl font-bold text-primary-500">Coin</span>
              Synch
            </span>
          </DialogTitle>
        </DialogHeader>

        <SignInForm />

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
      </DialogParallelContent>
    </Dialog>
  )
}
