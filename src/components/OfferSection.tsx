import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Headphones, 
  BookOpen, 
  Map, 
  Scroll, 
  Gift, 
  GraduationCap, 
  Smartphone 
} from 'lucide-react';

interface OfferSectionProps {
  onCtaClick?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = () => {
  const checkoutUrl = 'https://pagamento.projetoreino.com/checkout/212527976:1';

  const offerFeatures = [
    {
      icon: BookOpen,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">+300 páginas</strong> de conteúdo bíblico visual
        </span>
      ),
    },
    {
      icon: Map,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Mapas, rotas, cidades e cenários</strong> das Escrituras
        </span>
      ),
    },
    {
      icon: Scroll,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Contextos, personagens, profetas e acontecimentos</strong> organizados visualmente
        </span>
      ),
    },
    {
      icon: Gift,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">4 bônus</strong> complementares + presente surpresa
        </span>
      ),
    },
    {
      icon: GraduationCap,
      content: (
        <span>
          Material de apoio para <strong className="font-bold text-[#173B4D]">estudo, ensino e pregação</strong>
        </span>
      ),
    },
    {
      icon: Smartphone,
      content: (
        <span>
          Acesso digital <strong className="font-bold text-[#173B4D]">imediato</strong>
        </span>
      ),
    },
  ];

  return (
    <section id="oferta" className="relative px-5 py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE5DB]">
      <div className="mx-auto max-w-3xl">
        
        {/* Main Card Frame with Refined Premium Elevation */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-[#173B4D]/15 p-6 sm:p-12 text-center shadow-sm">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold shadow-2xs border border-[#EAE5DB]">
              <Sparkles className="h-3.5 w-3.5" />
              Acesso completo e imediato
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#173B4D]/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B4D] border border-[#173B4D]/10">
              <Headphones className="h-3.5 w-3.5 text-gold" />
              Suporte Exclusivo
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-5 mx-auto max-w-xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#173B4D] text-balance break-words">
            Tenha acesso ao Atlas Bíblico Visual completo
          </h2>

          {/* Bundle Showcase Image */}
          <div className="my-6 w-full flex justify-center">
            <img
              src="https://i.imgur.com/punOLdB.png"
              alt="Coleção Atlas Bíblico Visual Completo"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              className="w-full max-w-2xl h-auto object-contain select-none filter drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Phrase before summary card */}
          <div className="mt-6 mb-3 text-center">
            <span className="text-sm sm:text-base font-bold uppercase tracking-[0.15em] text-[#173B4D]">
              Receba hoje:
            </span>
          </div>

          {/* Summary Card with Distinct Bolds */}
          <div className="mb-8 mx-auto max-w-2xl rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] p-5 sm:p-7 shadow-2xs text-left">
            <ul className="space-y-3.5 sm:space-y-4">
              {offerFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground font-normal leading-snug">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-[#EAE5DB] text-terracotta shadow-2xs">
                      <IconComponent className="h-4 w-4 stroke-[2.2]" />
                    </span>
                    <div className="pt-0.5">{item.content}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Preparation Text for Offer */}
          <p className="mx-auto max-w-xl text-base sm:text-lg font-medium text-[#173B4D] leading-relaxed">
            Hoje, você pode ter acesso à coleção completa por uma condição especial.
          </p>

          {/* Central Premium Price Card */}
          <div className="my-5 sm:my-6 mx-auto max-w-md rounded-2xl bg-[#FAF8F5] border border-[#173B4D]/20 p-6 sm:p-8 shadow-xs text-center">
            
            {/* De R$ 149,00 */}
            <div className="text-xs sm:text-sm font-normal text-[#6B6357]">
              De{' '}
              <span className="line-through decoration-[#6B6357]/50 decoration-1 font-semibold text-[#6B6357]">
                R$ 149,00
              </span>
            </div>

            {/* POR APENAS */}
            <div className="mt-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B08830]">
              POR APENAS
            </div>
            
            {/* Price R$ 47,00 */}
            <div className="mt-2 flex items-baseline justify-center gap-1.5 whitespace-nowrap">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold accent-serif text-[#B08830] self-end mb-2 sm:mb-3">
                R$
              </span>
              <span className="relative text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-[#173B4D] glow-price">
                47
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold accent-serif text-[#B08830] self-end mb-2 sm:mb-3">
                ,00
              </span>
            </div>

            {/* à vista */}
            <p className="mt-3.5 text-xs sm:text-sm font-medium text-[#173B4D]/75 tracking-wide">
              à vista
            </p>

            {/* Supporting Text */}
            <p className="mt-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mais de 300 páginas de conteúdo bíblico visual, com 4 volumes, 4 bônus e acesso digital imediato.
            </p>
          </div>

          {/* CTA Button (High conversion green with gentle breathing animation) */}
          <div className="mt-6 sm:mt-8">
            <a
              href={checkoutUrl}
              target="_self"
              id="offer-cta-btn"
              className="animate-breathe inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1e824c] hover:bg-[#166534] active:bg-[#14532d] py-5 px-6 sm:px-8 text-base sm:text-xl font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>QUERO MEU ATLAS BÍBLICO VISUAL</span>
              <ArrowRight className="h-6 w-6 stroke-[2.5]" />
            </a>
          </div>

          {/* Microcopy Below CTA with Support Guarantee */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-medium">
              <Lock className="h-3.5 w-3.5 text-gold" />
              Pagamento 100% Seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              Garantia de 7 Dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Headphones className="h-3.5 w-3.5 text-gold" />
              Suporte via E-mail
            </span>
            <span>•</span>
            <span className="font-medium text-[#173B4D]">Acesso Imediato</span>
          </div>

        </div>

      </div>
    </section>
  );
};

