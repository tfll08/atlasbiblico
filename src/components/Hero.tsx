import React from 'react';
import { Smartphone, CreditCard, Infinity } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="bg-white px-3.5 xs:px-4 sm:px-6 pt-8 sm:pt-14 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Product Brand with Logo above Headline */}
        <div className="mb-5 sm:mb-7 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FAF8F5] px-4 sm:px-5 py-1.5 sm:py-2 border border-[#EAE5DB] shadow-2xs">
            <img 
              src="/favicon.svg" 
              alt="Logo Atlas Bíblico Visual" 
              width={24}
              height={24}
              className="h-4 w-4 sm:h-5 sm:w-5 rounded-md object-contain shrink-0" 
            />
            <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#173B4D]">
              Atlas Bíblico Visual
            </span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="mx-auto w-full max-w-4xl sm:max-w-5xl font-heading text-[clamp(1.35rem,5.3vw,1.75rem)] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.22] sm:leading-[1.18] tracking-tight text-foreground">
          <span className="block sm:inline">Veja onde os acontecimentos da</span>{' '}
          <span className="block sm:inline">
            <span className="font-normal normal-case text-terracotta font-migra italic">
              Bíblia
            </span>{' '}
            realmente aconteceram
          </span>
        </h1>

        {/* Subheadline Directly Below Headline */}
        <p className="mx-auto mt-3.5 sm:mt-5 max-w-2xl text-[0.92rem] xs:text-[1rem] sm:text-lg leading-[1.4] sm:leading-relaxed text-balance">
          <span className="font-semibold text-terracotta sm:block">
            Mapas, cidades, rotas e contextos bíblicos organizados
          </span>{' '}
          <span className="text-muted-foreground sm:block">
            para você consultar enquanto estuda, ensina ou prepara uma mensagem.
          </span>
        </p>

        {/* Hero Transparent Image without background or frame */}
        <div className="relative mx-auto mt-6 sm:mt-8 w-full max-w-4xl flex flex-col items-center justify-center">
          <img
            src="https://i.imgur.com/GqMNX5T.png"
            alt="Volumes do Atlas Bíblico Visual"
            width={1200}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full max-w-3xl h-auto object-contain select-none filter drop-shadow-md"
          />
          <p className="mt-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#5C6E75] text-center">
            Mapas e rotas bíblicas · Cidades e contextos
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={onCtaClick}
            id="hero-cta-btn"
            className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#173B4D] px-8 sm:px-12 py-4 sm:py-5 text-center text-sm sm:text-base font-bold tracking-wide uppercase text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
          >
            QUERO ACESSAR O ATLAS VISUAL
          </button>
        </div>

        {/* Features List */}
        <ul className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <li className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 shrink-0 text-gold" />
            <span>Área de membros estilo app</span>
          </li>
          <li className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 shrink-0 text-gold" />
            <span>Pagamento único</span>
          </li>
          <li className="flex items-center gap-2">
            <Infinity className="h-4 w-4 shrink-0 text-gold" />
            <span>Acesso vitalício</span>
          </li>
        </ul>

      </div>
    </section>
  );
};

