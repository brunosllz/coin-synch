import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const subscribeNewsletterBody = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const requestBody = await request.json()

  const { email } = subscribeNewsletterBody.parse(requestBody)

  await prisma.newsletter.create({
    data: {
      email,
    },
  })

  return new Response(null, { status: 201 })
}
