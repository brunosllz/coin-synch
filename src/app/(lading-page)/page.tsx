import { HeroSection } from './hero-section'
import { AboutUsSection } from './about-us-section'
import { NewsletterSection } from './newsletter-section'
import { FooterSection } from './footer-section'
import { Header } from './header'
import { TopCryptosSection } from './top-cryptos-section'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col">
        <HeroSection />
        <AboutUsSection />
        <TopCryptosSection />
        <NewsletterSection />
        <FooterSection />
      </main>
    </>
  )
}
