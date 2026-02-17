'use client'

import { motion } from 'framer-motion'
import { useScrollTrigger } from '@/hooks/use-scroll-trigger'

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Strategic content and engagement across Instagram, TikTok, Facebook, LinkedIn and emerging platforms.',
  },
  {
    title: 'Content Creation',
    description: 'Viral-worthy content that resonates with your audience and drives meaningful engagement.',
  },
  {
    title: 'Influencer Partnerships',
    description: 'Connect with the right creators to amplify your brand message authentically.',
  },
  {
    title: 'Paid Advertising',
    description: 'Data-driven ad campaigns that convert followers into loyal customers.',
  },
  {
    title: 'Brand Strategy',
    description: 'Build a distinctive brand identity that stands out in the crowded digital space.',
  },
  {
    title: 'Analytics & Insights',
    description: 'Comprehensive metrics and reporting that prove your social media ROI.',
  },
]

export function ServicesSection() {
  const ref = useScrollTrigger()

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Areas of <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital marketing services designed to transform your brand and drive explosive growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-card/50 to-card/30 backdrop-blur rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-all">
                  <span className="text-accent font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
