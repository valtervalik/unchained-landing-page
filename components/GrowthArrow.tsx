'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GrowthArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pathRef.current || !arrowRef.current) return;

      const path = pathRef.current;
      const arrow = arrowRef.current;
      const length = path.getTotalLength();

      // Animate the reveal of the chart via a clip path rect
      gsap.to('.chart-reveal-rect', {
        width: '100%',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Arrow movement
      const obj = { distance: 0 };
      gsap.to(obj, {
        distance: length,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            const point = path.getPointAtLength(length * self.progress);
            const nextPoint = path.getPointAtLength(
              Math.min(length, length * self.progress + 1),
            );

            const angle =
              Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
              (180 / Math.PI);

            gsap.set(arrow, {
              x: point.x,
              y: point.y,
              rotation: angle,
              transformOrigin: 'center center',
            });
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20'
    >
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1000 1000'
        preserveAspectRatio='none'
        className='absolute top-0 left-0 w-full h-full'
      >
        <g clipPath='url(#chart-clip)'>
          {/* Area fill under the line */}
          <path
            ref={areaRef}
            d='M 50 950 L 150 850 L 100 750 L 300 600 L 250 550 L 500 400 L 450 350 L 750 200 L 700 150 L 980 50 L 980 1000 L 50 1000 Z'
            fill='url(#area-gradient)'
            className='opacity-30'
          />

          <path
            ref={pathRef}
            d='M 50 950 L 150 850 L 100 750 L 300 600 L 250 550 L 500 400 L 450 350 L 750 200 L 700 150 L 980 50'
            fill='none'
            stroke='url(#line-gradient)'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            filter='url(#glow)'
          />
        </g>

        <defs>
          <clipPath id='chart-clip'>
            <rect className='chart-reveal-rect' width='0%' height='100%' />
          </clipPath>

          <filter id='glow' x='-20%' y='-20%' width='140%' height='140%'>
            <feGaussianBlur stdDeviation='4' result='blur' />
            <feComposite in='SourceGraphic' in2='blur' operator='over' />
          </filter>

          <linearGradient
            id='line-gradient'
            x1='0%'
            y1='100%'
            x2='100%'
            y2='0%'
          >
            <stop offset='0%' stopColor='#22c55e' stopOpacity='0' />
            <stop offset='50%' stopColor='#22c55e' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#4ade80' stopOpacity='1' />
          </linearGradient>

          <linearGradient id='area-gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#22c55e' stopOpacity='0.2' />
            <stop offset='100%' stopColor='#22c55e' stopOpacity='0' />
          </linearGradient>
        </defs>

        <g clipPath='url(#chart-clip)'>
          {/* Pivot points (vertices) */}
          <g className='opacity-40'>
            {[
              [50, 950],
              [150, 850],
              [100, 750],
              [300, 600],
              [250, 550],
              [500, 400],
              [450, 350],
              [750, 200],
              [700, 150],
              [980, 50],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r='3' fill='#4ade80' />
            ))}
          </g>
        </g>

        <g ref={arrowRef}>
          {/* Market Cursor / Arrow */}
          <circle r='6' fill='#4ade80' filter='drop-shadow(0 0 8px #22c55e)' />
          <path
            d='M -8 -8 L 8 0 L -8 8 Z'
            fill='white'
            transform='translate(12, 0)'
          />
          {/* Vertical price line indicator */}
          <line
            y1='-1000'
            y2='1000'
            stroke='#22c55e'
            strokeWidth='1'
            strokeDasharray='4 4'
            opacity='0.3'
          />
          {/* Horizontal price line indicator */}
          <line
            x1='-1000'
            x2='1000'
            stroke='#22c55e'
            strokeWidth='1'
            strokeDasharray='4 4'
            opacity='0.3'
          />
        </g>
      </svg>
    </div>
  );
}
