import React from 'react';
import { COMPLEMENTARY_GUIDES } from '../data/content';
import { Sparkles } from 'lucide-react';

interface ComplementaryGuidesProps {
  onCtaClick?: () => void;
}

export const ComplementaryGuides: React.FC<ComplementaryGuidesProps> = ({ onCtaClick }) => {
  return (
    <section id="materiais-complementares" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white scroll-mt-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-white/20 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>4 BÔNUS INCLUÍDOS</span>
          </div>
          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            Receba <span className="font-migra italic text-[#E5C158]">4 bônus</span> para complementar seu estudo bíblico
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] sm:text-base text-[#D1E0E5] leading-relaxed text-balance">
            Personagens, linha do tempo, profetas e reinos organizados para consultar junto do Atlas.
          </p>
        </div>

        {/* 4 Complementary Guides Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2">
          {COMPLEMENTARY_GUIDES.map((guide, index) => (
            <div
              key={guide.id}
              id={`complementary-${guide.id}`}
              className="overflow-hidden rounded-2xl bg-white/10 border border-white/15 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.13] hover:border-white/25 relative text-white backdrop-blur-xs"
            >
              {/* Image & Bonus Badge Container */}
              <div className="relative w-full aspect-[1586/992] overflow-hidden border-b border-white/15 bg-black/20">
                <img
                  src={guide.imageSrc}
                  srcSet={guide.imageSrcSm ? `${guide.imageSrcSm} 640w, ${guide.imageSrc} 1200w` : undefined}
                  sizes="(max-width: 640px) 100vw, 544px"
                  alt={guide.title}
                  width={1586}
                  height={992}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onError={(e) => {
                    if (guide.fallbackSrc && e.currentTarget.src !== guide.fallbackSrc) {
                      e.currentTarget.src = guide.fallbackSrc;
                      e.currentTarget.removeAttribute('srcset');
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#173B4D]/90 backdrop-blur-xs px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md z-10 border border-white/20">
                  <Sparkles className="h-3 w-3 text-[#E5C158]" />
                  <span>Bônus {index + 1}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D1E0E5]">
                    {guide.description}
                  </p>
                </div>

                {/* Price Tag with Slashed Red Price and Green Incluso */}
                <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-red-300 font-semibold text-sm line-through">
                    Valor: {guide.originalPrice || (index < 2 ? 'R$ 29,90' : 'R$ 27,90')}
                  </span>
                  <span className="font-bold text-emerald-300 text-xs uppercase tracking-wider bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full">
                    Incluso
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase Presente Surpresa */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-xl bg-white/10 border border-white/20 px-6 py-4 shadow-md text-white backdrop-blur-xs">
            <Sparkles className="h-4 w-4 text-[#E5C158] shrink-0" />
            <span className="text-sm sm:text-base font-semibold">
              E mais um presente surpresa disponível na sua área de membros.
            </span>
          </div>
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={onCtaClick}
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-8 sm:px-12 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#173B4D] transition-colors hover:bg-white/90 shadow-md cursor-pointer"
            >
              Quero garantir todos os bônus inclusos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
