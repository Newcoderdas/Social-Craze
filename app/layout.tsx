import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Social Craze',
  url: 'https://www.thesocialcraze.com',
  logo: 'https://www.thesocialcraze.com/icon.svg',
  sameAs: [
    'https://www.instagram.com/thesocialcrazeofficial?igsh=MXRtdnBlZzNtZmdmcA==',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thesocialcraze.com'),
  title: 'The Social Craze – Social Media & Digital Marketing Agency',
  description:
    'The Social Craze is a full-service social media and digital marketing agency offering social media management, influencer & model marketing, photography, videography, ads, and leads for brands worldwide and in Pakistan.',
  keywords:
    'The Social Craze, social media marketing, digital marketing agency, influencer marketing, model marketing, content creation, photography, videography, 4K video, 8K video, paid ads, lead generation, Pakistan marketing',
  authors: [{ name: 'The Social Craze' }],
  creator: 'The Social Craze',
  publisher: 'The Social Craze',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thesocialcraze.com',
    siteName: 'The Social Craze',
    title: 'The Social Craze – Social Media & Digital Marketing Agency',
    description:
      'Transform your brand with The Social Craze. Expert social media, influencer & model marketing, content creation, photography, videography, and ads management.',
    images: [
      {
        url: '/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The Social Craze digital marketing agency preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Social Craze – Social Media & Digital Marketing Agency',
    description:
      'Grow your brand with The Social Craze. Social media management, influencer campaigns, photography, videography, and high-performing ad campaigns.',
    images: ['/social-preview.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
