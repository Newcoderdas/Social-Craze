import type { Metadata } from 'next'
import ServicesPageClient from '@/components/services-page'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | The Social Craze',
  description:
    'Explore digital marketing services from The Social Craze, including social media management, content creation, influencer & model marketing, photography, videography, ads, lead generation, physical marketing, and analytics.',
  openGraph: {
    title: 'Digital Marketing Services | The Social Craze',
    description:
      'Full-service social media, influencer, content, ads, and physical marketing solutions tailored to your brand.',
    url: 'https://www.thesocialcraze.com/services',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function Services() {
  return <ServicesPageClient />
}


