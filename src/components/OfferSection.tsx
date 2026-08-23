import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Lock, Headphones } from 'lucide-react';

interface OfferSectionProps {
  onCtaClick?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = () => {
  const checkoutUrl = 'https://checkout.wiven.com.br/checkout/cmsz6ir2e00p201n3aurjcges?offer=5LL8K7X';

  return (
    <section id="oferta" className="relative px-5 py-20 sm:py-28 bg-[#173A45]">
      <div className="mx-auto max-w-3xl">
        
        {/* Main Card Frame with Enhanced Spotlight Highlight */}
        <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-[#C17D5C]/35 p-8 shadow-2xl sm:p-12 text-center ring-8 ring-[#173B4D]/5">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Acesso completo e imediato
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#173B4D]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#173B4D]">
              <Headphones className="h-3.5 w-3.5 text-gold" />
              Suporte Exclusivo
            </span>
          </div>

          <h2 className="mt-5 mx-auto max-w-xl font-heading text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance break-words">
            Tenha acesso ao Atlas Bíblico Visual completo
          </h2>

          <p className="mt-2 text-base font-medium text-muted-foreground">
            4 volumes + 4 guias complementares + presente surpresa
          </p>

          {/* Bundle Showcase Image - Transparent and borderless */}
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
              className="w-full max-w-2xl h-auto object-contain select-none filter drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Price */}
          <div className="my-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold accent-serif text-foreground">R$</span>
              <span className="text-6xl font-extrabold tracking-tight sm:text-7xl text-foreground">
                47
              </span>
              <span className="text-base text-muted-foreground">,00</span>
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold flex items-center justify-center gap-1.5">
              <span>Pagamento único</span>
              <span className="text-muted-foreground/70 font-normal lowercase tracking-normal text-[11px]">(à vista)</span>
            </p>
          </div>

          {/* CTA Button (High conversion Green) */}
          <a
            href={checkoutUrl}
            target="_self"
            id="offer-cta-btn"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e824c] hover:bg-[#166534] active:bg-[#14532d] py-5 px-6 text-base sm:text-lg font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer ring-4 ring-[#1e824c]/20"
          >
            <span>QUERO ACESSAR O ATLAS BÍBLICO VISUAL</span>
            <ArrowRight className="h-5 w-5 stroke-[2.5]" />
          </a>

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
            <span>Acesso Imediato</span>
          </div>

        </div>

      </div>
    </section>
  );
};

