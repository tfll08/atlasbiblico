import React, { useRef, useEffect } from 'react';

interface AutoCarouselProps {
  images: { url: string; fallbackUrl?: string; alt?: string }[];
  speed?: number; // lower is slower
}

export const AutoCarousel: React.FC<AutoCarouselProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerWrapperRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    const wrapper = containerWrapperRef.current;
    if (!container) return;

    let animationFrameId: number;
    const step = 0.65; // slow, smooth gliding speed

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { rootMargin: '100px' }
    );

    if (wrapper) {
      observer.observe(wrapper);
    }

    const autoScroll = () => {
      if (isVisible.current && !isHovered.current && container) {
        container.scrollLeft += step;
        // If scrolled past the first set of items, loop back seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  // Double the images array for infinite seamless looping
  const displayImages = [...images, ...images];

  return (
    <div
      ref={containerWrapperRef}
      className="relative w-full overflow-hidden mt-8 sm:mt-10 py-2"
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      onTouchStart={() => { isHovered.current = true; }}
      onTouchEnd={() => { isHovered.current = false; }}
    >
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayImages.map((item, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[240px] sm:w-[300px] md:w-[360px] aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={item.url}
              alt={item.alt || `Preview visual ${idx + 1}`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              onError={(e) => {
                if (item.fallbackUrl && e.currentTarget.src !== item.fallbackUrl) {
                  e.currentTarget.src = item.fallbackUrl;
                }
              }}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
