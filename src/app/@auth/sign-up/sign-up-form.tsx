'use client'

import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { Eye } from 'lucide-react'
import { User } from '@/assets/user'
import { Lock } from '@/assets/lock'
import { Mail } from '@/assets/mail'

const signUpSchema = z
  .object({
    name: z
      .string({ required_error: 'Insira o seu nome.' })
      .min(1, { message: 'Insira o seu nome.' }),
    email: z
      .string({ required_error: 'Insira o seu email.' })
      .min(1, { message: 'Insira o seu email.' })
      .email({ message: 'Insira um email válido.' }),
    password: z
      .string({ required_error: 'Insira a sua senha.' })
      .min(1, { message: 'Insira a sua senha.' }),
    confirmPassword: z
      .string({ required_error: 'Corfirme a sua senha.' })
      .min(1, { message: 'Corfirme a sua senha.' }),
    termsAndPolicy: z.boolean({ required_error: 'Aceite os termos.' }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Senha incorreta.',
    path: ['confirmPassword'],
  })
  .refine(({ termsAndPolicy }) => termsAndPolicy === true, {
    message: 'Aceite os termos.',
    path: ['termsAndPolicy'],
  })

type SignUp = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const form = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      confirmPassword: '',
      name: '',
      password: '',
      termsAndPolicy: false,
    },
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form

  async function handleSignUp({ email, password, name }: SignUp) {
    await api.post('/api/auth/sign-up', {
      email,
      password,
      name,
    })

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <Form {...form}>
      <form className="flex flex-col" onSubmit={handleSubmit(handleSignUp)}>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center rounded-md border border-secondary-300 pl-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
                  <User />
                  <Input
                    placeholder="Name"
                    disabled={isSubmitting}
                    className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="mt-6 flex items-center rounded-md border border-secondary-300 pl-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
                  <Mail />
                  <Input
                    placeholder="Email"
                    disabled={isSubmitting}
                    className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="mt-6 flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
                  <Lock />
                  <Input
                    placeholder="Password"
                    disabled={isSubmitting}
                    type="password"
                    className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                  <Eye size={18} className="text-secondary-300" />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="mt-6 flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
                  <Lock />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    disabled={isSubmitting}
                    className="border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                  <Eye size={18} className="text-secondary-300" />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="termsAndPolicy"
          render={({ field }) => (
            <FormItem>
              <div className="mt-6 flex items-start gap-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={isSubmitting}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-xs sm:text-sm">
                  I have read and accept the{' '}
                  <a href="#" className="text-xs font-bold sm:text-sm">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-xs font-bold sm:text-sm">
                    Terms of User Sign up.
                  </a>
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-4 sm:mt-6"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </Form>
  )
}
