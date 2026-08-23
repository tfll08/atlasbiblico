import React from 'react';
import { COMPLEMENTARY_GUIDES } from '../data/content';
import { Sparkles } from 'lucide-react';

interface ComplementaryGuidesProps {
  onCtaClick?: () => void;
}

export const ComplementaryGuides: React.FC<ComplementaryGuidesProps> = ({ onCtaClick }) => {
  return (
    <section id="materiais-complementares" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-white/20 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>4 Bônus Exclusivos</span>
          </div>
          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            E você ainda recebe{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              4 guias visuais
            </span>{' '}
            complementares
          </h2>
        </div>

        {/* 4 Complementary Guides Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2">
          {COMPLEMENTARY_GUIDES.map((guide, index) => (
            <div
              key={guide.id}
              id={`complementary-${guide.id}`}
              className="overflow-hidden rounded-2xl bg-white border border-[#EAE5DB] shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative text-[#173B4D]"
            >
              {/* Image & Bonus Badge Container */}
              <div className="relative bg-[#FAF8F5] flex items-center justify-center overflow-hidden border-b border-[#EAE5DB]">
                <img
                  src={guide.imageSrc}
                  alt={guide.title}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  draggable={false}
                  className="w-full h-[220px] sm:h-[260px] object-contain p-3 sm:p-4 transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#173B4D]/90 backdrop-blur-xs px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md z-10">
                  <Sparkles className="h-3 w-3 text-[#E5C158]" />
                  <span>Bônus {index + 1}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-[#173B4D]">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6E75]">
                    {guide.description}
                  </p>
                </div>

                {/* Price Tag with Slashed Red Price and Green Gratis */}
                <div className="mt-5 pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
                  <span className="text-red-500 font-semibold text-sm line-through">
                    Valor: R$ 29
                  </span>
                  <span className="font-bold text-emerald-600 text-xs uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Grátis
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRESENTE SURPRESA SECTION */}
        <div
          id="presente-surpresa"
          className="mt-12 overflow-hidden rounded-2xl bg-white border border-[#EAE5DB] shadow-lg text-[#173B4D]"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Gift Mockup Image - Full Bleed Object Cover */}
            <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 bg-[#FAF8F5]">
              <img
                src="https://i.imgur.com/vQOLSq6.png"
                alt="Presente Surpresa - Atlas Bíblico Visual"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                draggable={false}
                className="w-full h-auto max-h-[360px] object-contain rounded-xl select-none filter drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Gift Text */}
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C6A052] border border-[#EAE5DB] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Presente surpresa
              </span>
              
              <h3 className="mt-4 font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#173B4D] text-balance break-words">
                E ainda tem um{' '}
                <span className="inline sm:inline-block font-normal normal-case text-terracotta accent-serif">
                  presente
                </span>{' '}
                esperando por você
              </h3>
              
              <p className="mt-3 text-base leading-relaxed text-[#5C6E75]">
                Um material extra criado para colocar seus conhecimentos à prova de uma forma leve e prática.
              </p>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#C17D5C] px-8 sm:px-12 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#A96848] shadow-lg cursor-pointer"
            >
              Quero garantir todos os bônus inclusos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

