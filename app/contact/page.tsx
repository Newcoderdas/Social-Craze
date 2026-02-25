import type { Metadata } from 'next'
import ContactPageClient from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact The Social Craze | Get a Free Quote',
  description:
    'Contact The Social Craze for social media management, influencer & model marketing, photography, videography, ads, lead generation, and physical marketing campaigns across Pakistan and worldwide.',
  openGraph: {
    title: 'Contact The Social Craze | Get a Free Quote',
    description:
      'Talk to The Social Craze about social media, influencer, content, and performance marketing campaigns for your brand.',
    url: 'https://www.thesocialcraze.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  return <ContactPageClient />
}


