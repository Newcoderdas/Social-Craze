'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useScrollTrigger } from '@/hooks/use-scroll-trigger'
import {
  BarChart3,
  Camera,
  MapPin,
  Megaphone,
  PenSquare,
  Share2,
  Users,
} from 'lucide-react'
import Link from 'next/link'

const serviceCategories = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Daily management of your social presence across Instagram, Facebook, TikTok, and YouTube.',
    bullets: [
      'Account strategy and content pillars',
      'Content calendar and posting schedule',
      'Engagement and community management',
      'Hashtag and trend research',
    ],
  },
  {
    icon: PenSquare,
    title: 'Content Creation',
    description:
      'High-quality graphics, reels, posts, and videos tailored to your brand voice and goals.',
    bullets: [
      'Design for posts, stories, and ads',
      'Reels, UGC-style videos, and shorts',
      'Concepts and scripts for campaigns',
      'Creative direction for shoots',
    ],
  },
  {
    icon: Users,
    title: 'Influencer & Model Marketing',
    description:
      'Influencer and model campaigns that connect your brand with the right audiences worldwide and in Pakistan.',
    bullets: [
      'Influencer scouting and shortlisting',
      'Model marketing and PR campaigns',
      'Contracting, briefs, and coordination',
      'Reporting on reach, engagement, and ROI',
    ],
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description:
      'Premium product and brand shoots with 4K & 8K video, drone coverage, and professional editing.',
    bullets: [
      'Product and lifestyle photography',
      '4K & 8K video production',
      'Drone photo/video where available',
      'Editing, colour grading, and sound',
    ],
  },
  {
    icon: Megaphone,
    title: 'Advertising & Lead Generation',
    description:
      'Performance-focused ad campaigns that turn attention into leads, bookings, and sales.',
    bullets: [
      'Meta, TikTok, and Google ads setup',
      'Lead forms and landing pages',
      'Audience targeting and retargeting',
      'Ongoing optimization and A/B testing',
    ],
  },
  {
    icon: MapPin,
    title: 'Physical Marketing & Promotions',
    description:
      'On-ground campaigns, brand activations, and events executed across Pakistan.',
    bullets: [
      'In-store and outdoor activations',
      'Event promotions and launch campaigns',
      'Sampling and experiential marketing',
      'Integrated online + offline strategies',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description:
      'Transparent reporting and insights so you always know what’s working and why.',
    bullets: [
      'Campaign and channel performance reports',
      'Follower, reach, and engagement analysis',
      'Lead and sales tracking (where applicable)',
      'Actionable recommendations and next steps',
    ],
  },
]

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Full-Service Digital Marketing for Modern Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From social media management and influencer campaigns to production, ads, and physical
            activations, The Social Craze handles every part of your marketing ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          {serviceCategories.map((service, index) => (
            <ServiceCategory key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tell us about your brand and goals, and we’ll design a custom mix of services—from
            social and influencers to ads and on-ground marketing.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Talk to Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

type ServiceCategoryProps = {
  service: (typeof serviceCategories)[number]
  index: number
}

function ServiceCategory({ service, index }: ServiceCategoryProps) {
  const { ref, isVisible } = useScrollTrigger()
  const Icon = service.icon

  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-start`}
    >
      <div className="flex-1">
        <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{service.title}</h2>
        <p className="text-foreground/80 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.bullets.map(bullet => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-card/60 border border-accent/20 rounded-2xl p-6">
        <p className="text-sm text-foreground/70 mb-2">How this helps you</p>
        <p className="text-sm text-foreground/80">
          Combine this service with our other offerings to build a complete growth system—from
          awareness and engagement to leads and in‑store visits.
        </p>
      </div>
    </motion.div>
  )
}

