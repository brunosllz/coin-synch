import { HeroSection } from './hero-section'
import { AboutUsSection } from './about-us-section'
import { NewsletterSection } from './newsletter-section'
import { FooterSection } from './footer-section'
import { Header } from './header'

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  )
}
