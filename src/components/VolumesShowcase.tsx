import React, { useState } from 'react';
import { VOLUMES_DATA } from '../data/content';
import { VolumeItem } from '../types';
import { ChevronLeft, ChevronRight, Eye, BookOpen } from 'lucide-react';

interface VolumesShowcaseProps {
  onCtaClick?: () => void;
}

interface VolumeCarouselProps {
  volume: VolumeItem;
}

const VolumeImageCarousel: React.FC<VolumeCarouselProps> = ({ volume }) => {
  // 0 = Capa do Volume, 1 = Mapa por dentro
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    {
      src: volume.imageSrc || '',
      fallbackSrc: volume.fallbackSrc || '',
      alt: `Capa de ${volume.title} - ${volume.badge}`,
      label: 'Capa do Volume',
      isMap: false
    },
    {
      src: volume.insideMapSrc || volume.imageSrc || '',
      fallbackSrc: volume.fallbackMapSrc || volume.fallbackSrc || '',
      alt: `Mapa por dentro de ${volume.title}`,
      label: 'Mapa por dentro',
      isMap: true
    }
  ];

  const handleNext = () => {
    setSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const currentImage = images[slideIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Interactive Image Frame */}
      <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[3/4] rounded-2xl bg-[#F9F0E3] p-2.5 sm:p-3 border border-[#EAE5DB] shadow-sm overflow-hidden group">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          width={750}
          height={1000}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          draggable={false}
          onError={(e) => {
            if (currentImage.fallbackSrc && e.currentTarget.src !== currentImage.fallbackSrc) {
              e.currentTarget.src = currentImage.fallbackSrc;
            }
          }}
          className="w-full h-full object-contain rounded-xl select-none transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Ver imagem anterior"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 backdrop-blur-md border border-[#EAE5DB] text-[#173B4D] flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          aria-label="Ver próxima imagem"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 backdrop-blur-md border border-[#EAE5DB] text-[#173B4D] flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-4 w-4 stroke-[2.5]" />
        </button>

        {/* Floating Toggle Pill inside image */}
        <button
          onClick={handleNext}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white border border-white/25 shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
        >
          {slideIndex === 0 ? (
            <>
              <Eye className="h-3.5 w-3.5 text-[#E5C158]" />
              <span>Veja o mapa por dentro</span>
              <ChevronRight className="h-3.5 w-3.5 text-white/70" />
            </>
          ) : (
            <>
              <BookOpen className="h-3.5 w-3.5 text-[#E5C158]" />
              <span>Ver capa do volume</span>
              <ChevronLeft className="h-3.5 w-3.5 text-white/70" />
            </>
          )}
        </button>
      </div>

      {/* Interactive Tabs / Dots Indicator */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => setSlideIndex(0)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            slideIndex === 0
              ? 'bg-[#173B4D] text-white font-bold shadow-xs'
              : 'bg-white text-[#173B4D]/75 border border-[#EAE5DB] hover:bg-[#FAF8F5]'
          }`}
        >
          Capa
        </button>
        <button
          onClick={() => setSlideIndex(1)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
            slideIndex === 1
              ? 'bg-[#173B4D] text-white font-bold shadow-xs'
              : 'bg-white text-[#173B4D]/75 border border-[#EAE5DB] hover:bg-[#FAF8F5]'
          }`}
        >
          <Eye className="h-3 w-3" />
          <span>Veja o mapa por dentro</span>
        </button>
      </div>
    </div>
  );
};

export const VolumesShowcase: React.FC<VolumesShowcaseProps> = ({ onCtaClick }) => {
  return (
    <section id="o-que-voce-vai-receber" className="bg-white px-5 py-16 sm:py-24 text-[#173B4D] scroll-mt-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C4932F] border border-[#EAE5DB] shadow-2xs">
            A COLEÇÃO COMPLETA
          </div>
          <h2 className="mt-3 mx-auto max-w-4xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-[#173B4D] text-balance break-words">
            Uma coleção organizada por grandes <span className="font-migra italic text-[#C4932F]">jornadas bíblicas</span>
          </h2>
          <p className="mt-3.5 mx-auto max-w-2xl text-[0.95rem] sm:text-base text-[#5C6E75] leading-relaxed text-balance">
            Em vez de procurar informações espalhadas, escolha o volume relacionado ao trecho que está lendo e consulte o mapa, a rota e o contexto daquele período.
          </p>
        </div>

        {/* 4 Volumes Showcase - Grid 2x2 para melhor visualização */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {VOLUMES_DATA.map((volume) => {
            return (
              <div
                key={volume.id}
                id={`volume-card-${volume.id}`}
                className="flex flex-col justify-between rounded-3xl bg-[#FAF8F5] border border-[#EAE5DB] p-6 sm:p-8 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#D8AC4F]/40"
              >
                {/* Book Volume Mockup + Inside Map Carousel */}
                <div className="w-full mb-6">
                  <VolumeImageCarousel volume={volume} />
                </div>

                {/* Book Text Description */}
                <div className="flex flex-col justify-center text-center sm:text-left mt-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
                    {volume.badge}
                  </span>
                  
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#173B4D]">
                    {volume.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#5C6E75]">
                    {volume.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase discreta não denominacional */}
        <div className="mt-10 sm:mt-12 mx-auto max-w-2xl text-center px-4">
          <p className="text-xs sm:text-sm text-[#5C6E75] leading-relaxed">
            Material de estudo geográfico e histórico, desenvolvido para cristãos de diferentes denominações.
          </p>
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={onCtaClick}
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#173B4D] px-8 sm:px-12 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
            >
              QUERO OS 4 VOLUMES COMPLETOS
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
