import { HeroSection } from './hero-section'
import { AboutUsSection } from './about-us-section'
import { NewsletterSection } from './newsletter-section'
import { FooterSection } from './footer-section'

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <AboutUsSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  )
}
