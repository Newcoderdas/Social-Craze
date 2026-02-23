import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { StatsSection } from '@/components/stats-section'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | Grow Your Brand Online',
  description: 'Elevate your brand with expert digital marketing services. SEO, social media, content, and paid advertising solutions for business growth.',
  openGraph: {
    title: 'Digital Marketing Agency | Grow Your Brand Online',
    description: 'Elevate your brand with expert digital marketing services.',
    url: 'https://www.thesocialcraze.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <StatsSection />
      <Footer />
    </main>
  )
}
