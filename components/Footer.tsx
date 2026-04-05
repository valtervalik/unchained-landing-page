import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Services', href: '#services' },
      { label: 'Results', href: '#results' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='border-t border-border bg-card/40'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Brand */}
          <div className='flex flex-col gap-4 md:col-span-2'>
            <a href='#' className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-md bg-foreground flex items-center justify-center'>
                <Image src='/favicon.svg' alt='Logo' width={24} height={24} />
              </div>
              <span className='font-bold text-sm tracking-tight text-foreground'>
                UNCHAINED BUSINESS
              </span>
            </a>
            <p className='text-sm text-muted-foreground max-w-xs leading-relaxed'>
              Client Acquisition Systems for Personal Brands. We build the
              infrastructure so clients come to you.
            </p>
            <div className='flex items-center gap-3 mt-1'>
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.displayName}
                  href={href}
                  className='w-8 h-8 rounded-lg bg-secondary glow-border flex items-center justify-center hover:bg-accent transition-colors duration-200'
                >
                  <Icon size={14} className='text-muted-foreground' />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading} className='flex flex-col gap-4'>
              <span className='text-xs font-semibold uppercase tracking-widest text-foreground/60'>
                {col.heading}
              </span>
              <ul className='flex flex-col gap-2.5'>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-200'
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/50'>
          <span>
            © {new Date().getFullYear()} Unchained Business. All rights
            reserved.
          </span>
          <span>Built for founders who are done chasing.</span>
        </div>
      </div>
    </footer>
  );
}
