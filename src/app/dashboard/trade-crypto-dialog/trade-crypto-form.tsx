'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem } from '@/components/ui/form'

interface TradeCryptoProps {
  cryptoId: string
  balance: number
}

export function TradeCryptoForm({ balance, cryptoId }: TradeCryptoProps) {
  const tradeCryptoSchema = z
    .object({
      transferType: z.enum(['TRANSFER_IN', 'TRANSFER_OUT']),
      amount: z.coerce.number(),
    })
    .refine(({ amount }) => balance >= amount, {
      message: 'O valor está acima do que você tem na carterira.',
      path: ['amount'],
    })

  type TradeCrypto = z.infer<typeof tradeCryptoSchema>

  const form = useForm<TradeCrypto>({
    resolver: zodResolver(tradeCryptoSchema),
  })
  const { control, register, handleSubmit } = form
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation(
    async (data: TradeCrypto) => {
      await api.post(`/api/wallet/user/${session?.userId}/transactions`, {
        amount: data.amount,
        assetId: cryptoId,
        transactionType: data.transferType,
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

  async function handleTradeCrypto({ amount, transferType }: TradeCrypto) {
    try {
      await mutateAsync({
        amount,
        transferType,
      })
    } catch {
      // TODO: implement toast component
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(handleTradeCrypto)}
      >
        <Label htmlFor="crypto">Transfer</Label>
        <FormField
          control={control}
          name="transferType"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="crypto" className="mt-2">
                  <SelectValue placeholder="Select transfer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TRANSFER_IN">Transfer in</SelectItem>
                  <SelectItem value="TRANSFER_OUT">Transfer out</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Label htmlFor="quantity" className="mt-6 text-sm">
          Quantity
        </Label>
        <Input
          id="quantity"
          placeholder="0,00"
          type="number"
          className="mt-2"
          {...register('amount')}
        />

        <Button className="mt-8">Transfer Crypto</Button>
      </form>
    </Form>
  )
}
