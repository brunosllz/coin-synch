'use client'

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Mail } from '@/assets/mail'
import { InputPassword } from '@/components/input-password'
import { zodResolver } from '@hookform/resolvers/zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignIn = z.infer<typeof signInSchema>

export function SignInForm() {
  const { handleSubmit, register } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  })

  function handleSignIn({ email, password }: SignIn) {
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleSignIn)}>
      <div className="gap flex flex-col gap-6">
        <div className="flex items-center rounded-md border border-secondary-300 pl-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
          <Mail />
          <Input
            placeholder="Email"
            className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register('email')}
          />
        </div>

        <InputPassword {...register('password')} />
      </div>
      <a href="#" className="mt-[9px] self-end text-xs text-secondary-500 ">
        Forgot password?
      </a>

      <Button className="mt-4 lg:mt-6">Sign in</Button>
    </form>
  )
}
