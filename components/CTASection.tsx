'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-inner',
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='contact' ref={sectionRef} className='py-28 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='cta-inner relative rounded-3xl overflow-hidden glow-border bg-card p-12 md:p-20 text-center'>
          {/* Gradient blob */}
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(180,180,200,0.06) 0%, transparent 80%)',
            }}
          />

          <div className='relative z-10 flex flex-col items-center gap-8'>
            <div className='inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide uppercase'>
              <Calendar size={12} />
              Free 30-Minute Strategy Call
            </div>

            <h2 className='text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight'>
              <span className='gradient-text'>Ready to Stop Guessing</span>
              <br />
              <span className='text-foreground'>and Start Closing?</span>
            </h2>

            <p className='text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed'>
              Book a free strategy call. We&apos;ll audit your current
              situation, map out your custom acquisition system, and show you
              exactly what it would take to hit your revenue goals.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <a
                href='https://cal.com'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2 bg-foreground text-background font-bold px-8 py-4 rounded-xl text-sm hover:bg-foreground/90 transition-all duration-200 shadow-xl'
              >
                Book Your Free Call
                <ArrowRight
                  size={16}
                  className='group-hover:translate-x-1 transition-transform duration-200'
                />
              </a>
              <p className='text-xs text-muted-foreground'>
                No sales pressure. No obligation. Just clarity.
              </p>
            </div>

            {/* Trust badges */}
            <div className='flex items-center flex-wrap justify-center gap-6 pt-4 text-xs text-muted-foreground/50'>
              {[
                'Done-For-You',
                'No Long-Term Contracts',
                'Results or We Work For Free',
              ].map((b) => (
                <span key={b} className='flex items-center gap-1.5'>
                  <span className='w-1 h-1 rounded-full bg-muted-foreground/30' />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
