import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const creteUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
})

export async function POST(request: Request) {
  const requestBody = await request.json()

  const { email, password, name } = creteUserSchema.parse(requestBody)

  await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  })

  return new Response(null, { status: 201 })
}
