'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ModalPopup } from '@/components/modal-popup'
import { useScrollTrigger } from '@/hooks/use-scroll-trigger'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import type { Metadata } from 'next'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
    setFormData({ name: '', email: '', service: '', message: '' })
  }

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
            Get a Free Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Tell us about your brand and the services you&apos;re interested in. We&apos;ll get back
            to you with ideas and next steps for your campaign.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ContactInfo
              icon={Mail}
              title="Email"
              value="hello@socialcraze.com"
              href="mailto:hello@socialcraze.com"
            />
            <ContactInfo
              icon={Phone}
              title="Phone"
              value="+92 000 0000000"
              href="tel:+920000000000"
            />
            <ContactInfo
              icon={MapPin}
              title="Location"
              value="Pakistan – Available for campaigns nationwide and worldwide."
            />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Talk to Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="influencer-marketing">Influencer &amp; Model Marketing</option>
                  <option value="photo-video">Photography &amp; Videography</option>
                  <option value="ads-leads">Advertising &amp; Lead Generation</option>
                  <option value="physical-marketing">Physical Marketing &amp; Promotions</option>
                  <option value="other">Multiple / Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your brand, goals, and timeline..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Get a Free Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <ModalPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Send className="w-8 h-8 text-primary" />
          </motion.div>
          <p className="text-foreground mb-4">
            Thank you for reaching out! We&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Close
          </button>
        </div>
      </ModalPopup>

      <Footer />
    </main>
  )
}

function ContactInfo({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType
  title: string
  value: string
  href?: string
}) {
  const { ref, isVisible } = useScrollTrigger()

  const content = (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="border border-border rounded-lg p-6 hover:shadow-lg transition-all"
    >
      {href ? <a href={href}>{content}</a> : content}
    </motion.div>
  )
}

