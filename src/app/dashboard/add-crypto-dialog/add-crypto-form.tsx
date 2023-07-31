'use client'

import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { z } from 'zod'
import { useSession } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Coin } from '@/app/(lading-page)/top-cryptos-section'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

interface AddCryptoFormProps {
  coins: Coin[]
}

const addCryptoSchema = z.object({
  asset: z.string(),
  amount: z.coerce.number(),
})

type AddCrypto = z.infer<typeof addCryptoSchema>

export function AddCryptoForm({ coins }: AddCryptoFormProps) {
  const form = useForm<AddCrypto>({
    resolver: zodResolver(addCryptoSchema),
    defaultValues: {
      amount: undefined,
      asset: undefined,
    },
  })
  const { handleSubmit, control, register, reset } = form
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { mutateAsync: addCrypto, isLoading } = useMutation(
    async (data: AddCrypto) => {
      await api.post(`/api/wallet/user/${session?.userId}/transactions`, {
        amount: data.amount,
        assetId: data.asset,
        transactionType: 'TRANSFER_IN',
      })
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['wallet'])
        reset()
      },
      onError(error) {
        // TODO: add an observer - datadog/sentry
        console.error(error)
      },
    },
  )

  async function handleAddCrypto({ amount, asset }: AddCrypto) {
    try {
      await addCrypto({ amount, asset })
    } catch {
      // TODO: Implement toast component
    }
  }

  return (
    <Form {...form}>
      <form
        className="mt-6 flex w-full flex-col"
        onSubmit={handleSubmit(handleAddCrypto)}
      >
        <FormField
          control={control}
          name="asset"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      <span className="ml-4 text-sm lg:text-md">Choose</span>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {coins.map((coin) => {
                    return (
                      <SelectItem key={coin.id} value={coin.id}>
                        <div className="flex w-full items-center justify-between px-3">
                          <div className="flex items-center">
                            <Image
                              src={coin.imageUrl}
                              alt=""
                              className="mr-2"
                              width={16}
                              height={16}
                              quality={80}
                            />
                            <span className="text-sm">
                              {coin.name}
                              <span className="text-sm text-secondary-500">
                                {' '}
                                {coin.symbol}
                              </span>
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Input
          placeholder="0,00"
          type="number"
          step={0.01}
          className="mt-4 lg:mt-6"
          {...register('amount')}
        />

        <Button
          disabled={isLoading}
          isLoading={isLoading}
          className="mt-4 lg:mt-6"
        >
          Add Crypto
        </Button>
      </form>
    </Form>
  )
}
