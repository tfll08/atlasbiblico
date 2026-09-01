import React from 'react';
import { Smartphone, CreditCard, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="bg-white px-5 pt-10 sm:pt-16 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Big Editorial Headline */}
        <h1 className="mx-auto max-w-4xl font-heading text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] sm:leading-[1.15] tracking-tight text-foreground text-balance break-words">
          Entenda os{' '}
          <span className="font-normal normal-case text-terracotta font-migra italic">
            lugares e as rotas por trás dos relatos bíblicos
          </span>{' '}
          com mapas visuais
        </h1>

        {/* Subheadline Directly Below Headline */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
          Veja onde os relatos aconteceram e conecte{' '}
          <span className="font-semibold text-terracotta">
            personagens, cidades e jornadas com mais clareza
          </span>
          .
        </p>

        {/* Hero Transparent Image without background or frame */}
        <div className="relative mx-auto mt-6 sm:mt-8 w-full max-w-4xl flex justify-center">
          <img
            src="https://i.imgur.com/VxEUXBj.png"
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
        </div>

        {/* Primary CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={onCtaClick}
            id="hero-cta-btn"
            className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#173B4D] px-8 sm:px-12 py-4 text-center text-sm sm:text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
          >
            Veja o que VOCÊ vai receber
          </button>
        </div>

        {/* Features List */}
        <ul className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <li className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 shrink-0 text-gold" />
            <span>Produto 100% digital</span>
          </li>
          <li className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 shrink-0 text-gold" />
            <span>Pagamento único</span>
          </li>
          <li className="flex items-center gap-2">
            <Zap className="h-4 w-4 shrink-0 text-gold" />
            <span>Acesso imediato</span>
          </li>
        </ul>

      </div>
    </section>
  );
};

