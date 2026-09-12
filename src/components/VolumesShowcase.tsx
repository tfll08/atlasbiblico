import React, { useState } from 'react';
import { VOLUMES_DATA } from '../data/content';
import { VolumeItem } from '../types';
import { Check, ChevronLeft, ChevronRight, Eye, BookOpen } from 'lucide-react';

interface VolumesShowcaseProps {
  onCtaClick?: () => void;
}

const SUMMARY_ITEMS = [
  'Mapas geográficos e históricos',
  'Rotas e jornadas bíblicas',
  'Cidades e regiões explicadas',
  'Contexto dos acontecimentos',
  'Referências bíblicas para consulta'
];

interface VolumeCarouselProps {
  volume: VolumeItem;
}

const VolumeImageCarousel: React.FC<VolumeCarouselProps> = ({ volume }) => {
  // 0 = Capa do Volume, 1 = Mapa por dentro
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    {
      src: volume.imageSrc || '',
      alt: `Capa de ${volume.title} - ${volume.badge}`,
      label: 'Capa do Volume',
      isMap: false
    },
    {
      src: volume.insideMapSrc || volume.imageSrc || '',
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
      <div className="relative w-full max-w-[400px] md:max-w-[370px] lg:max-w-[390px] aspect-[3/4] rounded-2xl bg-white/10 p-3 border border-white/15 shadow-xl overflow-hidden group">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          width={750}
          height={1000}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          draggable={false}
          className="w-full h-full object-contain rounded-xl select-none transition-all duration-300"
        />

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Ver imagem anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#173A45]/85 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition-all hover:bg-[#173A45] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          aria-label="Ver próxima imagem"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#173A45]/85 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition-all hover:bg-[#173A45] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Floating Toggle Pill inside image */}
        <button
          onClick={handleNext}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white border border-white/25 shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
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
              ? 'bg-[#E5C158] text-[#173A45] font-bold shadow-xs'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          Capa
        </button>
        <button
          onClick={() => setSlideIndex(1)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
            slideIndex === 1
              ? 'bg-[#E5C158] text-[#173A45] font-bold shadow-xs'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
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
    <section id="o-que-voce-vai-receber" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white scroll-mt-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
            A coleção
          </span>
          <h2 className="mt-3 mx-auto max-w-4xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            Tudo organizado em{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              4 volumes
            </span>{' '}
            para você consultar quando precisar
          </h2>
        </div>

        {/* 4 Volumes Showcase with Image Carousel (Cover + Inside Map) */}
        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20 lg:space-y-16">
          {VOLUMES_DATA.map((volume, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={volume.id}
                id={`volume-row-${volume.id}`}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 ${
                  isEven ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Book Volume Mockup + Inside Map Carousel */}
                <VolumeImageCarousel volume={volume} />

                {/* Book Text Description */}
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C158]">
                    {volume.badge}
                  </span>
                  
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl text-white">
                    {volume.title}
                  </h3>

                  <p className="mt-2.5 text-lg text-[#E0936F] font-migra italic font-normal">
                    {volume.phrase}
                  </p>

                  <p className="mt-3.5 text-base leading-relaxed text-white/85">
                    {volume.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Card Before CTA */}
        <div className="mt-16 sm:mt-20 mx-auto max-w-2xl rounded-2xl bg-white p-6 sm:p-8 border border-[#EAE5DB] shadow-xl text-center text-[#173B4D]">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#173B4D] mb-6">
            Nos 4 volumes, você terá à mão:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            {SUMMARY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 rounded-lg bg-[#FAF8F5] p-3 border border-[#EAE5DB] shadow-2xs">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#173B4D] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Phrase at the end of "A Coleção" */}
        <div className="mt-10 sm:mt-12 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-[#D1E0E5] font-medium leading-relaxed bg-white/10 border border-white/15 rounded-xl px-6 py-4 backdrop-blur-xs text-balance">
            Abra no celular, tablet ou computador e consulte sempre que precisar durante seus estudos, aulas ou pregações.
          </p>
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={onCtaClick}
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-8 sm:px-12 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#173B4D] transition-colors hover:bg-white/90 shadow-md cursor-pointer"
            >
              QUERO OS 4 VOLUMES COMPLETOS
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
