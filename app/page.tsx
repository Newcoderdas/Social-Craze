import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'
import { ArrowRight, Camera, LineChart, Megaphone, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Social Craze – Your Complete Digital Marketing Solution',
  description:
    'The Social Craze offers social media management, influencer & model marketing, photography, videography, ads, and lead generation to help brands grow worldwide and across Pakistan.',
  openGraph: {
    title: 'The Social Craze – Your Complete Digital Marketing Solution',
    description:
      'Full-service social media, influencer & model marketing, photography, videography, ads, and leads for ambitious brands.',
    url: 'https://www.thesocialcraze.com',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

const quickServices = [
  {
    icon: Users,
    title: 'Social Media Management',
    description: 'Strategy, posting, engagement, and community management for all major platforms.',
  },
  {
    icon: Megaphone,
    title: 'Influencer & Model Marketing',
    description: 'Worldwide influencer collaborations and model marketing campaigns in Pakistan.',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'High-end product, lifestyle, and campaign shoots in 4K & 8K with pro editing.',
  },
  {
    icon: LineChart,
    title: 'Ads & Lead Generation',
    description: 'Performance-focused ads and lead funnels that drive real enquiries and sales.',
  },
]

const highlights = [
  'Experienced creative and performance-driven team',
  'Worldwide campaigns with dedicated focus on Pakistan',
  'Professional 4K/8K production, editing, and post',
  'Growth-focused strategies across social, ads, and influencers',
]

const testimonials = [
  {
    name: 'Fashion Brand – Pakistan',
    quote:
      'The Social Craze helped us scale from a small Instagram store to a recognized fashion label with nationwide reach.',
    role: 'Founder',
  },
  {
    name: 'E‑commerce Brand – Global',
    quote:
      'Our ROAS and engagement skyrocketed after their influencer campaigns and creative content revamp.',
    role: 'Marketing Lead',
  },
  {
    name: 'Restaurant Chain – Lahore',
    quote:
      'Their photography, reels, and localized influencer marketing consistently keep us top-of-mind.',
    role: 'Brand Manager',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-xs font-semibold tracking-wide mb-4">
              Digital Marketing • Social Media • Influencers
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              The Social Craze –{' '}
              <span className="text-accent">Your Complete Digital Marketing Solution</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Social Media, Influencer &amp; Model Marketing, Photography, Videography, Ads, and more –
              everything you need to grow your brand online and on-ground across Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 border-2 border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="relative h-80 md:h-96">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-accent/10 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
              alt="Creative digital marketing team planning campaigns"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Services Built For Modern Brands
              </h2>
              <p className="text-foreground/70 max-w-2xl">
                From daily posting to full-scale campaigns, we manage everything behind the scenes so
                you can focus on running your business.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map(service => (
              <div
                key={service.title}
                className="bg-card/60 border border-accent/20 rounded-2xl p-6 hover:border-accent/60 hover:shadow-lg transition-all"
              >
                <service.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary via-background to-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-foreground/70 mb-6 max-w-xl">
              The Social Craze combines creative production, influencer relationships, and performance
              marketing to deliver campaigns that look great and drive real results.
            </p>
            <ul className="space-y-3">
              {highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/70 border border-accent/20 p-5 rounded-2xl">
              <p className="text-sm text-foreground/70 mb-1">Brands Served</p>
              <p className="text-3xl font-bold text-accent">100+</p>
            </div>
            <div className="bg-card/70 border border-accent/20 p-5 rounded-2xl">
              <p className="text-sm text-foreground/70 mb-1">Campaigns Launched</p>
              <p className="text-3xl font-bold text-accent">500+</p>
            </div>
            <div className="bg-card/70 border border-accent/20 p-5 rounded-2xl">
              <p className="text-sm text-foreground/70 mb-1">Avg. Engagement Lift</p>
              <p className="text-3xl font-bold text-accent">3x</p>
            </div>
            <div className="bg-card/70 border border-accent/20 p-5 rounded-2xl">
              <p className="text-sm text-foreground/70 mb-1">Countries Reached</p>
              <p className="text-3xl font-bold text-accent">10+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Preview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Work & Campaigns
              </h2>
              <p className="text-foreground/70 max-w-2xl">
                A quick look at recent photography, videography, and influencer campaigns produced for
                brands across fashion, food, and ecommerce.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-semibold"
            >
              View full portfolio
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PortfolioCard
              title="Fashion Lookbook – Karachi"
              category="Photography / Reels"
              result="3x increase in Instagram saves and shares"
              image="https://images.unsplash.com/photo-1514996937319-344454492b37?w=900&q=80"
            />
            <PortfolioCard
              title="Cafe Launch – Lahore"
              category="Influencer Campaign"
              result="+40% footfall in launch week"
              image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80"
            />
            <PortfolioCard
              title="Global Skincare Brand"
              category="Paid Ads & UGC"
              result="2.8x ROAS across Meta campaigns"
              image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              What Our Clients Say
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Real feedback from brands that trusted The Social Craze with their social presence and
              marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.name}
                className="bg-card border border-accent/20 rounded-2xl p-6 flex flex-col justify-between"
              >
                <p className="text-sm text-foreground/80 mb-4">“{testimonial.quote}”</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to turn your brand into a social craze?
          </h2>
          <p className="text-foreground/70 mb-8">
            Tell us about your goals and we’ll craft a custom mix of social media, influencers,
            content, and ads to get you there.
          </p>
          <Link href="/contact">
            <button className="px-10 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
              Get a Free Quote
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

type PortfolioCardProps = {
  title: string
  category: string
  result: string
  image: string
}

function PortfolioCard({ title, category, result, image }: PortfolioCardProps) {
  return (
    <div className="group bg-card/70 border border-accent/20 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-accent mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/70">{result}</p>
      </div>
    </div>
  )
}
