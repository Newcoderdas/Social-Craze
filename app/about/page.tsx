import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About The Social Craze | Digital Marketing Agency',
  description:
    'Learn about The Social Craze, a social media and digital marketing agency focused on creative content, influencer & model marketing, and performance-led campaigns across Pakistan and worldwide.',
  openGraph: {
    title: 'About The Social Craze | Digital Marketing Agency',
    description:
      'Discover the story, vision, and team behind The Social Craze – your partner for social media, influencer, and full-funnel marketing.',
    url: 'https://www.thesocialcraze.com/about',
    type: 'profile',
  },
  alternates: {
    canonical: '/about',
  },
}

const team = [
  {
    name: 'Creative Director',
    role: 'Leads campaign concepts, visual identity, and content direction.',
  },
  {
    name: 'Influencer & PR Lead',
    role: 'Manages influencer relationships, model marketing, and PR campaigns.',
  },
  {
    name: 'Performance Marketing Specialist',
    role: 'Optimizes ads, funnels, and lead generation campaigns.',
  },
  {
    name: 'Production Lead',
    role: 'Oversees photography, videography, and post-production in 4K/8K.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero / Story Intro */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary via-background to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            The Story Behind <span className="text-accent">The Social Craze</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            The Social Craze was founded to help brands become impossible to ignore – online and
            offline – through strategic social media, powerful storytelling, and standout
            production.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          <p className="text-foreground/80 leading-relaxed">
            From our first campaigns with emerging brands to large-scale launches across Pakistan,
            The Social Craze has always focused on one thing: creating marketing that people
            actually want to watch, share, and act on. We blend creative storytelling with data and
            technology so that every post, reel, and ad pushes your brand forward.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Today, we run social media, influencer, and content campaigns for businesses across
            fashion, food, retail, e‑commerce, and services, with a strong presence in Pakistan and
            reach into international markets.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              To be the go‑to digital partner for brands that want to dominate social media, create
              culture-shaping content, and run campaigns that convert viewers into loyal customers.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              We deliver growth-focused, innovative marketing solutions that combine social media
              strategy, influencer & model marketing, world-class production, and performance
              advertising to help brands scale in Pakistan and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Meet the Team</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A tight-knit group of strategists, creators, and marketers bringing your campaigns to
              life from concept to execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-card border border-accent/20 rounded-2xl p-6 flex flex-col gap-2"
              >
                <p className="text-lg font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-accent/80"> {member.role.split(' ')[0]}</p>
                <p className="text-sm text-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Brands Choose The Social Craze
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-foreground/80">
                • Professional editing with cinematic colour grading and sound design.
              </p>
              <p className="text-foreground/80">• 4K &amp; 8K videography for high-end campaigns.</p>
              <p className="text-foreground/80">
                • Worldwide influencer campaigns with a strong creator network in Pakistan.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-foreground/80">
                • Full-funnel ads management and lead generation campaigns.
              </p>
              <p className="text-foreground/80">
                • Physical marketing, on-ground activations, and events across Pakistan.
              </p>
              <p className="text-foreground/80">
                • Transparent reporting and clear communication on performance and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

