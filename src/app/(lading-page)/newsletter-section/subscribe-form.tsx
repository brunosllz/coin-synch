'use client'

import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const subscribeNewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Insira o seu email.' })
    .email({ message: 'Insira um email válido.' }),
})

type SubscribeNewsletter = z.infer<typeof subscribeNewsletterSchema>

export function SubscribeForm() {
  const form = useForm<SubscribeNewsletter>({
    resolver: zodResolver(subscribeNewsletterSchema),
  })
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form

  async function handleSubscribeNewsletter({ email }: SubscribeNewsletter) {
    await api.post('/newsletter', {
      email,
    })
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col sm:justify-center"
        onSubmit={handleSubmit(handleSubscribeNewsletter)}
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  disabled={isSubmitting}
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="mt-[21px] text-sm shadow-md sm:text-md"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  )
}
