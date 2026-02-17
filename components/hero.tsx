'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center pt-32 pb-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold">
                Digital Marketing Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Transform Your Brand{' '}
              <span className="text-accent">
                Into a Social Craze
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 mb-8 leading-relaxed"
            >
              Expert social media marketing, engaging content creation, and strategic digital campaigns that turn your audience into raving fans.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <Link href="/contact">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-3 border-2 border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px]"
          >
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Digital marketing team collaborating"
                className="rounded-2xl shadow-2xl object-cover w-full h-full relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
