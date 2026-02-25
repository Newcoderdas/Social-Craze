import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | The Social Craze',
  description:
    'Browse The Social Craze portfolio of photography, videography, social media campaigns, influencer marketing, and physical marketing activations across Pakistan and worldwide.',
  openGraph: {
    title: 'Portfolio & Case Studies | The Social Craze',
    description:
      'See real photography, videography, social media, and physical marketing work delivered by The Social Craze.',
    url: 'https://www.thesocialcraze.com/portfolio',
    type: 'website',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

const filters = ['All', 'Photography', 'Videography', 'Social Media', 'Physical Marketing'] as const
type FilterType = (typeof filters)[number]

type PortfolioItem = {
  title: string
  category: FilterType
  typeLabel: string
  result: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Streetwear Launch – Karachi',
    category: 'Photography',
    typeLabel: 'Photography / Social Content',
    result: 'Captured a full lookbook and social assets that drove a 2.5x increase in product saves.',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?w=900&q=80',
  },
  {
    title: 'Fine Dining Experience – Lahore',
    category: 'Videography',
    typeLabel: '4K Video / Reels',
    result: 'Reels and promo videos contributed to a 40% lift in reservations during the campaign.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80',
  },
  {
    title: 'Beauty Brand Awareness – Global',
    category: 'Social Media',
    typeLabel: 'Influencer Campaign / Ads',
    result: 'Combined influencer content and paid ads reached 1.2M+ impressions with 3x engagement.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
  },
  {
    title: 'Mall Activation – Islamabad',
    category: 'Physical Marketing',
    typeLabel: 'On-ground Event / Activation',
    result: 'Live activation generated hundreds of leads and strong local brand visibility.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80',
  },
]

const caseStudies = [
  {
    client: 'Fashion Label – Pakistan',
    challenge: 'Low awareness and inconsistent social presence.',
    solution:
      'Full social media management, monthly photoshoots, and influencer collaborations targeting fashion-forward audiences.',
    before: 'Under 5,000 followers with minimal engagement.',
    after: '30,000+ followers, 5–7% engagement rate, and frequent sell-outs on new drops.',
  },
  {
    client: 'Cafe Chain – Lahore',
    challenge: 'New branch launches with limited local awareness.',
    solution:
      'Launch campaign combining reels, influencer visits, and opening weekend promos with on-ground coverage.',
    before: 'Slow initial awareness and low opening-weekend reservations.',
    after: '40%+ increase in footfall and high user-generated content throughout launch month.',
  },
  {
    client: 'Online Skincare Brand – Global',
    challenge: 'Needed performance-focused campaigns with strong visuals.',
    solution:
      'UGC-style content, creator partnerships, and Meta ads optimized towards purchases and lead forms.',
    before: 'Unreliable ad performance and low return on ad spend.',
    after: '2.5–3x ROAS across key campaigns with improved repeat purchase rate.',
  },
]

export default function PortfolioPage() {
  // Simple client-side filter with no state framework; for now show all,
  // but keep filter UI for future enhancement.
  const activeFilter: FilterType = 'All'
  const visibleItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Portfolio &amp; Case Studies
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            A snapshot of photography, videography, social media campaigns, influencer marketing, and
            physical marketing projects delivered by The Social Craze.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map(filter => (
              <button
                key={filter}
                type="button"
                className={`px-4 py-2 rounded-full text-sm border ${
                  activeFilter === filter
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-card text-foreground/80 border-accent/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {visibleItems.map(item => (
              <article
                key={item.title}
                className="group bg-card/70 border border-accent/20 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-accent mb-1">
                    {item.typeLabel}
                  </p>
                  <h2 className="text-lg font-semibold text-foreground mb-2">{item.title}</h2>
                  <p className="text-sm text-foreground/70">{item.result}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Client Highlights</h2>
            <p className="text-foreground/70 max-w-2xl">
              A few examples of how we&apos;ve turned marketing challenges into measurable growth
              across followers, engagement, leads, and sales.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map(study => (
                <article
                  key={study.client}
                  className="bg-card border border-accent/20 rounded-2xl p-5 flex flex-col gap-2"
                >
                  <p className="text-sm font-semibold text-foreground">{study.client}</p>
                  <p className="text-xs text-foreground/60">Challenge</p>
                  <p className="text-sm text-foreground/80">{study.challenge}</p>
                  <p className="text-xs text-foreground/60 mt-1">Solution</p>
                  <p className="text-sm text-foreground/80">{study.solution}</p>
                  <p className="text-xs text-foreground/60 mt-1">Before → After</p>
                  <p className="text-sm text-foreground/80">
                    <span className="block">Before: {study.before}</span>
                    <span className="block">After: {study.after}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Want results like these?
            </h2>
            <p className="text-foreground/70 mb-6">
              Share your goals with us and we&apos;ll show you how The Social Craze can help.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

