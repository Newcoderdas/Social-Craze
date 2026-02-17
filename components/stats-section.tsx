'use client'

import { motion } from 'framer-motion'
import { useScrollTrigger } from '@/hooks/use-scroll-trigger'

const stats = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Campaigns Launched', value: '1000+' },
  { label: 'Content Pieces', value: '5000+' },
  { label: 'Engagement Rate', value: '300%' },
]

export function StatsSection() {
  const ref = useScrollTrigger()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-background border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="mb-4 overflow-hidden">
                <motion.h3
                  className="text-5xl md:text-6xl font-bold text-accent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
              </div>
              <p className="text-lg text-foreground/80 font-medium group-hover:text-accent transition-colors">
                {stat.label}
              </p>
              <div className="h-1 w-12 bg-accent/30 group-hover:bg-accent rounded-full mx-auto mt-4 transition-colors"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
