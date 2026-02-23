import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-accent/20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Section */}
        <div className="mb-20 pb-20 border-b border-accent/20">
          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to make your brand <span className="text-accent">go viral?</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Let's collaborate and create something amazing together.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105">
                Get in Touch
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">The Social Craze</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Transforming brands into social media sensations through strategic marketing and creative excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Content Creation</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Influencer Partnerships</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Connect</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                <Mail size={18} />
                <span>hello@socialcraze.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                <Phone size={18} />
                <span>+1 (555) 246-8135</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors cursor-pointer">
                <MapPin size={18} />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-foreground/60">
            © 2024 The Social Craze. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#linkedin" className="text-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            
            <a href="https://www.instagram.com/thesocialcrazeofficial?igsh=MXRtdnBlZzNtZmdmcA==" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
