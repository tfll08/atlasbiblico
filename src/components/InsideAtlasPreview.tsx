import React, { useRef, useEffect } from 'react';
import { INSIDE_SLIDES_DATA } from '../data/content';
import { ChevronLeft, ChevronRight, ArrowRight, Check } from 'lucide-react';

interface InsideAtlasPreviewProps {
  onCtaClick?: () => void;
}

const BENEFIT_PHRASES = [
  'Localize onde os acontecimentos bíblicos aconteceram',
  'Acompanhe jornadas e rotas importantes das Escrituras',
  'Consulte referências bíblicas na própria página',
  'Use o Atlas em estudos, aulas e pregações'
];

export const InsideAtlasPreview: React.FC<InsideAtlasPreviewProps> = ({ onCtaClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isHovered = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    const section = sectionRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.85; // smooth and readable gliding pace

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { rootMargin: '120px' }
    );

    if (section) {
      observer.observe(section);
    }

    const scrollStep = () => {
      if (isVisible.current && !isHovered.current && container) {
        container.scrollLeft += speed;

        // When scrolled past one full set of items, loop back seamlessly
        const halfScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft -= halfScroll;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  const manualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Duplicate slides array for seamless infinite looping
  const displaySlides = [...INSIDE_SLIDES_DATA, ...INSIDE_SLIDES_DATA];

  return (
    <section ref={sectionRef} id="veja-por-dentro" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
            EXPLORE O CONTEÚDO
          </span>
          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            Veja o que você vai encontrar no{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              Atlas
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#D1E0E5] sm:text-lg">
            Veja onde os relatos aconteceram e como os lugares se conectam.
          </p>
        </div>

        {/* Automatic Slider Track */}
        <div
          className="relative mt-12 sm:mt-16"
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
          onTouchStart={() => { isHovered.current = true; }}
          onTouchEnd={() => { isHovered.current = false; }}
        >
          {/* Manual Nav Controls for Desktop */}
          <button
            onClick={() => manualScroll('left')}
            aria-label="Slide anterior"
            className="hidden md:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white text-[#173A45] shadow-xl border border-white/20 hover:bg-[#F7F2E7] transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => manualScroll('right')}
            aria-label="Próximo slide"
            className="hidden md:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white text-[#173A45] shadow-xl border border-white/20 hover:bg-[#F7F2E7] transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scrolling Slides */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displaySlides.map((slide, idx) => (
              <div
                key={`${slide.id}-${idx}`}
                className="w-[260px] sm:w-[310px] md:w-[340px] shrink-0 overflow-hidden rounded-2xl shadow-xl border border-white/15 bg-[#0E252D] transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={slide.url}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  draggable={false}
                  className="w-full aspect-[1414/2000] object-cover rounded-2xl select-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Footer Guidance */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.15em] text-[#D1E0E5] font-medium">
          <span>Deslize para explorar as páginas</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#E5C158] inline-block animate-pulse" />
        </div>

        {/* Feature Benefit Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {BENEFIT_PHRASES.map((phrase, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl bg-white/10 p-4 border border-white/15 backdrop-blur-xs text-left shadow-sm transition-all hover:bg-white/[0.14]"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/25 text-emerald-400 border border-emerald-400/40">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <span className="text-sm font-medium text-white/95 leading-snug">
                {phrase}
              </span>
            </div>
          ))}
        </div>

        {/* Section CTA Button */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#C17D5C] px-8 sm:px-12 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#A96848] shadow-lg cursor-pointer"
            >
              quero acessar o atlas completo
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
