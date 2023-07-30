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

async function POST(request: Request, { params }: SaveTransaction) {
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

async function GET(_: Request, { params }: SaveTransaction) {
  const userId = params.id

  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
    },
  })

  return NextResponse.json({ transactions })
}

export { POST, GET }
