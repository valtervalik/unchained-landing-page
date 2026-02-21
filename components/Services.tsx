'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: 'Foundation',
    title: 'Brand & Offer Audit',
    price: 'Included',
    description:
      'We deep-dive into your current positioning, offers, audience, and conversion gaps. You get a custom acquisition blueprint before we build anything.',
    features: [
      'Positioning & messaging review',
      'Offer clarity & pricing analysis',
      'Traffic & conversion audit',
      'Custom acquisition roadmap',
    ],
  },
  {
    tag: 'Core System',
    title: 'Full Acquisition Stack',
    price: 'Custom',
    description:
      'Everything built, installed, and activated for you. The complete client acquisition infrastructure from brand to booked call.',
    features: [
      'High-converting landing funnel',
      'Automated nurture sequences',
      'Content-to-DM conversion system',
      'Outreach scripts & playbooks',
      'Weekly optimization calls',
    ],
    featured: true,
  },
  {
    tag: 'Growth',
    title: 'Scale & Optimize',
    price: 'Retainer',
    description:
      'For founders already getting clients who want to predictably scale to high-ticket months while removing themselves from day-to-day lead gen.',
    features: [
      'Paid traffic integration',
      'Advanced funnel split-testing',
      'Sales team training & oversight',
      'Monthly performance reporting',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='services' ref={sectionRef} className='py-28 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium'>
            What We Offer
          </p>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight gradient-text'>
            Services Built for
            <br />
            <span className='text-foreground'>Personal Brand Founders</span>
          </h2>
          <p className='mt-5 text-muted-foreground max-w-lg mx-auto text-base leading-relaxed'>
            We don&apos;t sell courses or templates. We build and run your
            client acquisition engine.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          {services.map((s) => (
            <div
              key={s.title}
              className={`service-card relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300
                ${
                  s.featured
                    ? 'bg-foreground text-background border border-foreground'
                    : 'bg-card glow-border hover:border-foreground/20'
                }
              `}
            >
              {s.featured && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-border'>
                  Most Popular
                </div>
              )}

              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${
                    s.featured
                      ? 'bg-background/15 text-background/80'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {s.tag}
                </span>
              </div>

              <div>
                <h3
                  className={`text-xl font-bold mb-1 ${s.featured ? 'text-background' : 'text-foreground'}`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${s.featured ? 'text-background/70' : 'text-muted-foreground'}`}
                >
                  {s.description}
                </p>
              </div>

              <ul className='flex flex-col gap-2.5 flex-1'>
                {s.features.map((f) => (
                  <li key={f} className='flex items-start gap-2.5 text-sm'>
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 ${s.featured ? 'text-background/60' : 'text-muted-foreground'}`}
                    />
                    <span
                      className={
                        s.featured
                          ? 'text-background/80'
                          : 'text-muted-foreground'
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href='#contact'
                className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm py-3 px-5 transition-all duration-200 group
                  ${
                    s.featured
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-secondary hover:bg-accent text-foreground'
                  }`}
              >
                Apply Now
                <ArrowRight
                  size={14}
                  className='group-hover:translate-x-1 transition-transform duration-200'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
