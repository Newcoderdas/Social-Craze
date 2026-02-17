import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'The Social Craze | Social Media & Digital Marketing',
  description: 'Transform your brand with The Social Craze. Expert social media marketing, content creation, and digital strategy for explosive growth.',
  keywords: 'social media marketing, digital marketing, content marketing, brand growth, social media strategy',
  authors: [{ name: 'The Social Craze' }],
  creator: 'The Social Craze',
  publisher: 'The Social Craze',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'The Social Craze',
    title: 'The Social Craze | Social Media & Digital Marketing',
    description: 'Transform your brand with The Social Craze. Expert social media and digital marketing services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Social Craze | Social Media & Digital Marketing',
    description: 'Transform your brand with The Social Craze. Expert social media and digital marketing services.',
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
        <Analytics />
      </body>
    </html>
  )
}
