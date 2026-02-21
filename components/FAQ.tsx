'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Do I need a large following to work with you?',
    a: "No. We've built acquisition systems for founders with 500 followers and for those with 100k+. Follower count matters less than having a clear offer, a defined audience, and the ability to deliver results.",
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most clients book their first qualified call within 3-6 weeks of system activation. Full revenue momentum typically occurs within 60-90 days depending on your existing brand equity and offer.',
  },
  {
    q: 'What makes this different from a marketing agency?',
    a: "Traditional agencies run ads or manage content. We build infrastructure — the complete backend system that turns your authority into inbound revenue. We're not in the business of impressions; we're in the business of clients.",
  },
  {
    q: 'Is this a done-for-you service or a course?',
    a: '100% done-for-you. We build, install, and run the system. You simply show up to sales calls and close. No homework, no learning curves.',
  },
  {
    q: 'What kind of personal brands do you work with?',
    a: 'Coaches, consultants, advisors, content creators, and service providers who sell high-ticket offers ($2k+). We work best with people who are already generating some revenue and want to scale it predictably.',
  },
  {
    q: "What's the investment?",
    a: "Our engagements are custom-scoped based on your situation. During our strategy call, we'll outline a specific plan and investment. We don't publish generic pricing because we don't build generic systems.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' },
      );
    } else {
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      });
    }
  }, [open]);

  return (
    <div
      className='border-b border-border last:border-0 py-5 cursor-pointer group'
      onClick={() => setOpen(!open)}
    >
      <div className='flex items-center justify-between gap-4'>
        <span className='text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors'>
          {q}
        </span>
        <div className='flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center'>
          {open ? (
            <Minus size={12} className='text-muted-foreground' />
          ) : (
            <Plus size={12} className='text-muted-foreground' />
          )}
        </div>
      </div>
      <div
        ref={bodyRef}
        className='overflow-hidden'
        style={{ height: 0, opacity: 0 }}
      >
        <p className='pt-3 text-sm text-muted-foreground leading-relaxed'>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-inner',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='faq' ref={sectionRef} className='py-28 px-6 bg-secondary/20'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-14'>
          <p className='text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium'>
            Questions
          </p>
          <h2 className='text-4xl md:text-5xl font-bold gradient-text'>
            Common Questions
          </h2>
        </div>

        <div className='faq-inner glow-border rounded-2xl bg-card px-6 md:px-10 py-2'>
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
