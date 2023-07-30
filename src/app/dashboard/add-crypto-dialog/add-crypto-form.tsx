'use client'

import { useForm } from 'react-hook-form'
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
import { ChevronRight } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { z } from 'zod'
import { useSession } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'

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
  })
  const { handleSubmit, control, register } = form
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { mutateAsync: addCrypto } = useMutation(
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
      <form className="flex flex-col" onSubmit={handleSubmit(handleAddCrypto)}>
        <FormField
          control={control}
          name="asset"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Crypto" />
                </SelectTrigger>
                <SelectContent>
                  {coins.map((coin) => {
                    return (
                      <SelectItem
                        key={coin.id}
                        value={coin.id}
                        className="flex"
                      >
                        <div className="flex">
                          <Image
                            src={coin.imageUrl}
                            alt=""
                            width={16}
                            height={16}
                          />
                          {coin.name}
                          {coin.symbol}
                          <ChevronRight />
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
          className="mt-6"
          {...register('amount')}
        />

        <Button className="mt-6">Add Crypto</Button>
      </form>
    </Form>
  )
}
