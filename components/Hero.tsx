'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      )
        .fromTo(
          h1Ref.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.3',
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.4',
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.3',
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.1',
        );

      // Floating orbs
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(orb2Ref.current, {
        y: 20,
        x: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16'
    >
      {/* Background grid */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,240,242,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,242,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbs */}
      <div
        ref={orb1Ref}
        className='absolute top-1/4 right-1/4 w-125 h-125 rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(160,160,176,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        ref={orb2Ref}
        className='absolute bottom-1/4 left-1/4 w-100 h-100 rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(100,100,120,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8'>
        {/* Badge */}
        <div
          ref={badgeRef}
          className='inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide uppercase'
        >
          <span className='w-1.5 h-1.5 rounded-full bg-foreground/50 animate-pulse' />
          Client Acquisition Systems
        </div>

        {/* Headline */}
        <h1
          ref={h1Ref}
          className='text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight'
        >
          <span className='gradient-text'>Turn Your Personal Brand</span>
          <br />
          <span className='text-foreground'>Into a Client Magnet.</span>
        </h1>

        {/* Sub */}
        <p
          ref={descRef}
          className='max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed'
        >
          We build done-for-you acquisition systems that attract, qualify, and
          convert ideal clients — so you can focus on your craft, not the
          hustle.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className='flex flex-col sm:flex-row items-center gap-4'
        >
          <a
            href='#contact'
            className='group inline-flex items-center gap-2 bg-foreground text-background font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-foreground/90 transition-all duration-200 shadow-lg'
          >
            Book a Free Strategy Call
            <ArrowRight
              size={16}
              className='group-hover:translate-x-1 transition-transform duration-200'
            />
          </a>
          <a
            href='#how-it-works'
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-3.5'
          >
            See how it works
          </a>
        </div>

        {/* Social proof nudge */}
        <div className='flex items-center gap-3 text-xs text-muted-foreground'>
          <div className='flex -space-x-2'>
            {['G', 'M', 'A', 'R', 'T'].map((l, i) => (
              <div
                key={i}
                className='w-7 h-7 rounded-full border border-border bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground'
              >
                {l}
              </div>
            ))}
          </div>
          <span>Joined by 50+ personal brand founders</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollRef}
        className='absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40'
      >
        <span className='text-[10px] uppercase tracking-widest'>Scroll</span>
        <ChevronDown size={16} className='animate-bounce' />
      </div>
    </section>
  );
}
