'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '3.2×', label: 'Avg. Revenue Increase' },
  { value: '6 Wks', label: 'To First New Client' },
  { value: '50+', label: 'Brands Scaled' },
  { value: '92%', label: 'Client Retention Rate' },
];

const testimonials = [
  {
    name: 'Marcus Rivera',
    role: 'Executive Coach',
    text: 'Before Unchained I was manually DMing 50 people a week with barely 2 calls booked. Now my calendar fills itself — 8-10 qualified calls every single week.',
    initials: 'MR',
  },
  {
    name: 'Alisha Patel',
    role: 'LinkedIn Strategist',
    text: "I went from $6k months to $18k months in under 90 days. The system they built is insane — it's like having a full sales team but without the overhead.",
    initials: 'AP',
  },
  {
    name: 'Jordan Mack',
    role: 'Startup Advisor',
    text: 'I was skeptical — I tried three other agencies before. Unchained is different. They think in systems, not tactics. I finally have predictability.',
    initials: 'JM',
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
        },
      );

      gsap.fromTo(
        '.testimonial-card',
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='results'
      ref={sectionRef}
      className='py-28 px-6 bg-secondary/30'
    >
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium'>
            Proof
          </p>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight gradient-text'>
            Real Results,
            <br />
            <span className='text-foreground'>Not Just Promises</span>
          </h2>
        </div>

        {/* Stats */}
        <div className='stats-row grid grid-cols-2 md:grid-cols-4 gap-6 mb-20'>
          {stats.map((s) => (
            <div
              key={s.label}
              className='stat-item glow-border rounded-2xl p-7 bg-card text-center'
            >
              <div className='text-4xl font-extrabold text-foreground mb-1'>
                {s.value}
              </div>
              <div className='text-xs text-muted-foreground tracking-wide'>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className='testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className='testimonial-card glow-border rounded-2xl p-7 bg-card flex flex-col gap-5 hover:border-foreground/20 transition-all duration-300 group'
            >
              <Quote
                size={20}
                className='text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors'
              />
              <p className='text-sm text-muted-foreground leading-relaxed flex-1'>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-full bg-secondary glow-border flex items-center justify-center text-xs font-bold text-foreground'>
                  {t.initials}
                </div>
                <div>
                  <div className='text-sm font-semibold text-foreground'>
                    {t.name}
                  </div>
                  <div className='text-xs text-muted-foreground'>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
