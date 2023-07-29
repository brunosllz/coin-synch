import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'

import NextAuth, { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const credentialsProvider = CredentialsProvider({
  credentials: {
    email: {},
    password: {},
  },
  async authorize(credentials) {
    if (credentials) {
      const user = await prisma.user.findUnique({
        where: {
          email: credentials.email,
        },
      })

      if (!user) {
        throw new Error('Invalid credentials')
      }

      const isValidPassword = await compare(credentials.password, user.password)

      if (isValidPassword) {
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: 'https://github.com/brunosllz.png',
        }
      }

      throw new Error('Invalid credentials')
    } else {
      throw new Error('Unauthorized.')
    }
  },
})

const handler = NextAuth({
  providers: [credentialsProvider],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return Promise.resolve(token)
    },
    async session({ session, token }) {
      session.user = token.user as User

      return Promise.resolve(session)
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
    error: '/auth/error',
  },
})

export { handler as GET, handler as POST }
