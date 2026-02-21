'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    icon: TrendingDown,
    title: 'Inconsistent Revenue',
    body: 'Your income swings wildly every month. You close a deal — then silence. The feast-or-famine cycle is exhausting and unpredictable.',
  },
  {
    icon: Clock,
    title: 'All Day Creating, No Clients',
    body: "You're posting, engaging, and showing up online — but the DMs aren't converting. Effort without a system is just noise.",
  },
  {
    icon: Users,
    title: 'Chasing the Wrong Leads',
    body: "You attract followers but not buyers. The people who reach out can't afford you or aren't the right fit, wasting your precious time.",
  },
  {
    icon: AlertTriangle,
    title: 'No Scalable Process',
    body: "Every new client feels like starting from scratch. You're the whole sales team — and it's burning you out.",
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pain-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        },
      );

      gsap.fromTo(
        '.pain-heading',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='py-28 px-6 relative'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='pain-heading text-center mb-16'>
          <p className='text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium'>
            Sound Familiar?
          </p>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight gradient-text'>
            You&apos;re Working Hard.
            <br />
            <span className='text-foreground'>
              The Clients Aren&apos;t Coming.
            </span>
          </h2>
          <p className='mt-5 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed'>
            Most personal brand founders have big audiences and empty pipelines.
            The problem isn&apos;t your content — it&apos;s the missing system.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className='pain-card glow-border rounded-2xl p-7 bg-card transition-all duration-300 hover:border-foreground/15 group'
              >
                <div className='w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300'>
                  <Icon
                    size={18}
                    className='text-muted-foreground group-hover:text-foreground transition-colors'
                  />
                </div>
                <h3 className='font-semibold text-foreground text-base mb-2'>
                  {p.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
