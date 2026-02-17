'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useScrollTrigger } from '@/hooks/use-scroll-trigger'
import { BarChart3, Share2, Zap, Sparkles, TrendingUp, Users } from 'lucide-react'

const serviceDetails = [
  {
    icon: BarChart3,
    title: 'SEO Optimization',
    description: 'Rank higher on search engines with data-driven SEO strategies that increase organic visibility and drive qualified traffic.',
    features: [
      'Keyword research & strategy',
      'On-page optimization',
      'Link building',
      'Technical SEO audit',
      'Monthly reporting',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive brand awareness across all social platforms with targeted content.',
    features: [
      'Content calendar management',
      'Community engagement',
      'Influencer partnerships',
      'Analytics & reporting',
      'Paid social campaigns',
    ],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
  {
    icon: Zap,
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives conversions through storytelling.',
    features: [
      'Blog writing & SEO',
      'Video production',
      'Infographics & design',
      'Email campaigns',
      'Case studies',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'Paid Advertising',
    description: 'Maximize ROI with targeted ad campaigns on Google, Meta, and other platforms with expert management.',
    features: [
      'Google Ads management',
      'Facebook & Instagram ads',
      'Retargeting campaigns',
      'A/B testing',
      'Budget optimization',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afd651908d5c?w=800&q=80',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive digital marketing solutions tailored to elevate your brand and achieve measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  )
}

function ServiceCard({ service, index }: { service: typeof serviceDetails[0]; index: number }) {
  const { ref, isVisible } = useScrollTrigger()
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
    >
      <div className="flex-1">
        <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
        <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-2xl shadow-lg w-full h-96 object-cover"
        />
      </div>
    </motion.div>
  )
}

function CTASection() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-primary">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Marketing?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Let's work together to achieve your business goals with proven digital marketing strategies.
        </p>
        <a href="/contact">
          <button className="px-10 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </a>
      </motion.div>
    </section>
  )
}
