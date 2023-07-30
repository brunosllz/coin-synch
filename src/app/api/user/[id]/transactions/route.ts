import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const savaTransactionBodySchema = z.object({
  assetId: z.string(),
  amount: z.number(),
  transactionType: z.enum(['TRANSFER_IN', 'TRANSFER_OUT']),
})

interface SaveTransaction {
  params: {
    id: string
  }
}

export async function POST(request: Request, { params }: SaveTransaction) {
  const userId = params.id
  const requestBody = await request.json()

  const { amount, assetId, transactionType } =
    savaTransactionBodySchema.parse(requestBody)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return NextResponse.json(
      { message: 'Resource not found.' },
      { status: 400 },
    )
  }

  let assetWallet

  const findAssetWallet = await prisma.wallet.findUnique({
    where: {
      assetId,
    },
  })

  if (!findAssetWallet) {
    const newAssetWallet = await prisma.wallet.create({
      data: {
        assetId,
        userId,
      },
    })

    assetWallet = newAssetWallet
  } else {
    assetWallet = findAssetWallet
  }

  let newBalanceAmount

  if (transactionType === 'TRANSFER_IN') {
    newBalanceAmount = assetWallet.balance + amount
  } else {
    const calculateTransaction = assetWallet.balance - amount

    if (calculateTransaction < 0) {
      return NextResponse.json(
        { message: 'insufficient funds.' },
        { status: 400 },
      )
    }

    newBalanceAmount = calculateTransaction
  }

  await prisma.wallet.update({
    where: {
      assetId: assetWallet.assetId,
    },
    data: {
      balance: newBalanceAmount,
    },
  })

  await prisma.transaction.create({
    data: {
      amount,
      assetId,
      transactionType,
      userId,
    },
  })

  return new Response(null, { status: 201 })
}
