import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  onCtaClick?: () => void;
}

const TESTIMONIAL_IMAGES = [
  {
    id: 'depoimento-1',
    src: 'https://i.imgur.com/Va6temt.jpeg',
    alt: 'Depoimento de leitor sobre o Atlas Bíblico Visual',
  },
  {
    id: 'depoimento-2',
    src: 'https://i.imgur.com/AU9FO0p.jpeg',
    alt: 'Feedback sobre os mapas e clareza do Atlas Bíblico Visual',
  },
  {
    id: 'depoimento-3',
    src: 'https://i.imgur.com/NocHzLy.jpeg',
    alt: 'Avaliação da experiência de estudo bíblico com o Atlas',
  },
  {
    id: 'depoimento-4',
    src: 'https://i.imgur.com/lAJacRD.jpeg',
    alt: 'Comentário sobre a riqueza de detalhes e mapas bíblicos',
  },
  {
    id: 'depoimento-5',
    src: 'https://i.imgur.com/12mF9Me.jpeg',
    alt: 'Depoimento recomendando o Atlas Bíblico Visual para estudos',
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef(true);

  // Mouse drag state for desktop
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  // Create 4 sets for continuous infinite seamless looping
  const infiniteTestimonials = [
    ...TESTIMONIAL_IMAGES.map((item, idx) => ({ ...item, uniqueKey: `set0-${idx}` })),
    ...TESTIMONIAL_IMAGES.map((item, idx) => ({ ...item, uniqueKey: `set1-${idx}` })),
    ...TESTIMONIAL_IMAGES.map((item, idx) => ({ ...item, uniqueKey: `set2-${idx}` })),
    ...TESTIMONIAL_IMAGES.map((item, idx) => ({ ...item, uniqueKey: `set3-${idx}` })),
  ];

  // Helper to pause auto scroll on user action and resume after a delay
  const pauseTemporarily = useCallback((durationMs = 3500) => {
    isInteractingRef.current = true;
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, durationMs);
  }, []);

  // Compute card step width (card width + gap)
  const getCardStep = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 280;
    const firstItem = container.querySelector<HTMLElement>('[data-carousel-item]');
    if (firstItem) {
      const style = window.getComputedStyle(container);
      const gap = parseFloat(style.columnGap || style.gap || '20') || 20;
      return firstItem.offsetWidth + gap;
    }
    return 280;
  }, []);

  // Slide navigation actions for manual arrow buttons
  const scrollNext = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const step = getCardStep();
    const setWidth = step * TESTIMONIAL_IMAGES.length;

    if (container.scrollLeft >= setWidth * 2.6) {
      container.scrollLeft -= setWidth;
    }

    container.scrollBy({ left: step, behavior: 'smooth' });
  }, [getCardStep]);

  const scrollPrev = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const step = getCardStep();
    const setWidth = step * TESTIMONIAL_IMAGES.length;

    if (container.scrollLeft <= setWidth * 0.4) {
      container.scrollLeft += setWidth;
    }

    container.scrollBy({ left: -step, behavior: 'smooth' });
  }, [getCardStep]);

  // Initialize scroll position in the center set
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const initializeScroll = () => {
      const step = getCardStep();
      const setWidth = step * TESTIMONIAL_IMAGES.length;
      container.scrollLeft = setWidth;
    };

    const timer = setTimeout(initializeScroll, 100);
    return () => clearTimeout(timer);
  }, [getCardStep]);

  // Intersection Observer to run auto-slide only when visible on screen
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: '100px' }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  // Continuous smooth auto-glide (accelerated speed, frame-independent)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    // Accelerated continuous glide speed in pixels per second
    const speed = 90;

    const autoScroll = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Only scroll when visible and user is not actively interacting
      if (isVisibleRef.current && !isInteractingRef.current && container) {
        const step = getCardStep();
        const setWidth = step * TESTIMONIAL_IMAGES.length;

        // Apply smooth delta increment (capped to prevent big jumps on tab blur)
        container.scrollLeft += speed * Math.min(delta, 0.08);

        // Seamless infinite loop without any visual flicker
        if (setWidth > 0) {
          if (container.scrollLeft >= setWidth * 2.8) {
            container.scrollLeft -= setWidth;
          } else if (container.scrollLeft <= setWidth * 0.2) {
            container.scrollLeft += setWidth;
          }
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [getCardStep]);

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    isInteractingRef.current = true;
    dragStartXRef.current = e.pageX - container.offsetLeft;
    dragScrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.3;
    container.scrollLeft = dragScrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      pauseTemporarily(3000);
    }
  };

  return (
    <section
      id="depoimentos"
      className="bg-[#173A45] px-3 xs:px-4 sm:px-6 py-16 sm:py-24 text-white relative overflow-hidden content-visibility-auto scroll-mt-6"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E5C158]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-[#E5C158]/30 shadow-2xs">
            <MessageSquareQuote className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>Depoimentos Reais</span>
          </div>

          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            Veja o que estão dizendo sobre o{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              Atlas
            </span>
          </h2>

          <p className="mx-auto mt-3.5 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#D1E0E5]">
            <span className="block">Veja a experiência de quem já está usando o material</span>
            <span className="block">para estudar a Bíblia com mais profundidade e apoio visual.</span>
          </p>

          {/* Social Proof Stars Summary */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[#E5C158]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#E5C158] text-[#E5C158]" />
            ))}
            <span className="ml-2 text-xs sm:text-sm font-semibold text-white/90">
              Depoimentos reais de quem já recebeu o Atlas
            </span>
          </div>
        </div>

        {/* Carousel Container with lateral blur overlay and controls */}
        <div 
          ref={wrapperRef}
          className="relative mt-10 sm:mt-14"
          onMouseEnter={() => { isInteractingRef.current = true; }}
          onMouseLeave={() => { 
            if (!isDragging) {
              isInteractingRef.current = false; 
            }
          }}
          onTouchStart={() => { isInteractingRef.current = true; }}
          onTouchEnd={() => { pauseTemporarily(2800); }}
        >
          {/* Efeito Blur Lateral Esquerdo - Otimizado para Mobile */}
          <div 
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 xs:w-10 sm:w-28 md:w-36 bg-gradient-to-r from-[#173A45] via-[#173A45]/70 to-transparent sm:backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Efeito Blur Lateral Direito - Otimizado para Mobile */}
          <div 
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 xs:w-10 sm:w-28 md:w-36 bg-gradient-to-l from-[#173A45] via-[#173A45]/70 to-transparent sm:backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Seta Esquerda */}
          <button
            id="testimonial-prev-btn"
            type="button"
            onClick={() => {
              pauseTemporarily(4000);
              scrollPrev();
            }}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 xs:h-9 xs:w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#173A45]/90 text-white shadow-xl border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#173A45] active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          </button>

          {/* Seta Direita */}
          <button
            id="testimonial-next-btn"
            type="button"
            onClick={() => {
              pauseTemporarily(4000);
              scrollNext();
            }}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 xs:h-9 xs:w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#173A45]/90 text-white shadow-xl border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#173A45] active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          </button>

          {/* Carousel Infinite Continuous Scrollable Track */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-3 sm:py-4 px-4 sm:px-12 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteTestimonials.map((item) => (
              <div
                key={item.uniqueKey}
                data-carousel-item
                className="w-[220px] xs:w-[250px] sm:w-[280px] md:w-[300px] shrink-0 select-none group"
              >
                <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/20 shadow-xl backdrop-blur-xs transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-white/40">
                  <div className="relative aspect-[9/16] w-full bg-[#0D262F] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={1080}
                      height={1920}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-[#D1E0E5]/70 font-medium tracking-wide">
              Rolagem contínua automática • Toque ou use as setas para pausar e navegar
            </span>
          </div>
        </div>

        {/* Section CTA Button leading to offer */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-14 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#C17D5C] px-8 sm:px-12 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#A96848] shadow-md cursor-pointer"
            >
              Quero garantir meu acesso ao atlas
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
