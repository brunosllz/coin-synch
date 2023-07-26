import { Footer } from './footer'
import { Header } from './header'
import { Sidebar } from './sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex h-screen flex-row overflow-hidden">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
