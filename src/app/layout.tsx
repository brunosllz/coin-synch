import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

import './globals.css'
import { Providers } from './providers'
const Roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { template: '%s | Coin Synch', default: 'Coin Synch' },
  description: 'Platform of crypto coins',
}

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode
  auth: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={Roboto.className}>
        <Providers>
          {auth}
          {children}
        </Providers>
      </body>
    </html>
  )
}
