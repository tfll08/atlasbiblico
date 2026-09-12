import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  onCtaClick?: () => void;
}

const TESTIMONIAL_IMAGES = [
  {
    id: 'depoimento-1',
    src: 'https://i.imgur.com/TTYt6OZ.png',
    alt: 'Depoimento de leitor sobre o Atlas Bíblico Visual'
  },
  {
    id: 'depoimento-2',
    src: 'https://i.imgur.com/3LntJAu.png',
    alt: 'Feedback sobre os mapas e clareza do Atlas Bíblico Visual'
  },
  {
    id: 'depoimento-3',
    src: 'https://i.imgur.com/DswAsSF.png',
    alt: 'Avaliação da experiência de estudo bíblico visual'
  },
  {
    id: 'depoimento-4',
    src: 'https://i.imgur.com/xUPC9Kf.png',
    alt: 'Comentário sobre a facilidade de compreensão dos mapas'
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const isHovered = useRef(false);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide based on scroll offset
    const cardWidth = el.querySelector<HTMLElement>('[data-carousel-item]')?.offsetWidth || clientWidth;
    const index = Math.round(scrollLeft / (cardWidth + 20));
    setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIAL_IMAGES.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-item]');
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // width + gap
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-item]');
    const step = (card?.offsetWidth || 300) + 20;
    el.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const scrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-item]');
    const step = (card?.offsetWidth || 300) + 20;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  // Autoplay functionality (pauses on user hover)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setActiveIndex((prev) => {
          const nextIndex = (prev + 1) % TESTIMONIAL_IMAGES.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="depoimentos"
      className="bg-[#173A45] px-4 sm:px-6 py-16 sm:py-24 text-white relative overflow-hidden content-visibility-auto scroll-mt-6"
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
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

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#D1E0E5] text-balance">
            Veja a experiência de quem já está usando o material para estudar a Bíblia com mais profundidade e apoio visual.
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

        {/* Carousel Container with Arrows */}
        <div className="relative mt-10 sm:mt-14">
          
          {/* Arrow Left */}
          <button
            id="testimonial-prev-btn"
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Depoimento anterior"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#173A45]/90 text-white shadow-xl border border-white/30 backdrop-blur-xs transition-all duration-200 hover:scale-110 hover:bg-[#173A45] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer`}
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* Arrow Right */}
          <button
            id="testimonial-next-btn"
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Próximo depoimento"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#173A45]/90 text-white shadow-xl border border-white/30 backdrop-blur-xs transition-all duration-200 hover:scale-110 hover:bg-[#173A45] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer`}
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* Carousel Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 sm:px-4 -mx-2 sm:-mx-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {TESTIMONIAL_IMAGES.map((item) => (
              <div
                key={item.id}
                data-carousel-item
                className="w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-center select-none"
              >
                <div className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-md backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="relative bg-white flex items-center justify-center p-2 sm:p-3 rounded-2xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain rounded-xl select-none pointer-events-none transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIAL_IMAGES.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => scrollToIndex(dotIndex)}
                aria-label={`Ir para depoimento ${dotIndex + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIndex
                    ? 'w-8 bg-[#E5C158]'
                    : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section CTA Button leading to offer */}
        {onCtaClick && (
          <div className="mt-12 sm:mt-16 flex justify-center">
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
