'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const desktopImages = ['/slider/5.png', '/slider/4.png', '/slider/3.png'];
  const mobileImages = ['/slider/mobilehero.jpeg', '/slider/heroimageone.png', '/slider/MobileHero3.png'];
  const images = isMobile ? mobileImages : desktopImages;

  // Set breakpoint listener client-side
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Keep current index in range when image set switches
  useEffect(() => {
    if (current >= images.length) setCurrent(0);
  }, [images.length, current]);

  // Autoplay
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [images.length, isPaused]);

  const goTo = idx => setCurrent((idx + images.length) % images.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== current}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center select-none"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay for legibility (optional) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-6">
        <button
          type="button"
          onClick={prev}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="-ml-0.5">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="ml-0.5">
            <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/60 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </section>
  );
}
