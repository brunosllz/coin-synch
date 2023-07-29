import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const sessionBody = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function POST(request: Request) {
  const requestBody = await request.json()

  const { email, password } = sessionBody.parse(requestBody)

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return false
  }

  const isValidPassword = await compare(user.password, password)

  if (isValidPassword) {
    return NextResponse.json({ user })
  }

  return false
}
