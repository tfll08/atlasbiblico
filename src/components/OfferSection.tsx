import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  BookOpen, 
  Map, 
  Scroll, 
  Gift, 
  Smartphone,
  Printer,
  Headphones
} from 'lucide-react';

interface OfferSectionProps {
  onCtaClick?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  const BASE_CHECKOUT_URL = 'https://pagamento.projetoreino.com/checkout/212527976:1';
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      try {
        const url = new URL(BASE_CHECKOUT_URL);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        setCheckoutUrl(url.toString());
      } catch {
        // Fallback to BASE_CHECKOUT_URL
      }
    }
  }, []);

  const offerFeatures = [
    {
      icon: BookOpen,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Os 4 volumes principais</strong> do Atlas Bíblico Visual
        </span>
      ),
    },
    {
      icon: Map,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Mapas, rotas, cidades, cenários e contextos bíblicos</strong> organizados visualmente
        </span>
      ),
    },
    {
      icon: Scroll,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">+300 páginas</strong> de conteúdo bíblico visual
        </span>
      ),
    },
    {
      icon: Gift,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">4 guias visuais complementares</strong> + presente surpresa
        </span>
      ),
    },
    {
      icon: Smartphone,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Acesso vitalício pela área de membros</strong>, no celular, tablet ou computador
        </span>
      ),
    },
    {
      icon: Printer,
      content: (
        <span>
          <strong className="font-bold text-[#173B4D]">Baixe e imprima os materiais</strong> se quiser.
        </span>
      ),
    },
  ];

  return (
    <section id="oferta" className="relative px-5 py-16 sm:py-24 bg-white content-visibility-auto scroll-mt-6">
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Top Badge */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C4932F] border border-[#EAE5DB] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            Acesso completo e imediato
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#173B4D] text-balance break-words">
          Tenha acesso à coleção completa do Atlas Bíblico Visual
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 mx-auto max-w-2xl text-base sm:text-lg text-[#5C6E75] leading-relaxed text-balance">
          Tudo o que você precisa para visualizar lugares, rotas e contextos dos relatos bíblicos em um único material.
        </p>

        {/* Bundle Showcase Image */}
        <div className="my-8 w-full flex justify-center">
          <img
            src="https://i.imgur.com/punOLdB.png"
            alt="Coleção Atlas Bíblico Visual Completo"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full max-w-2xl h-auto object-contain select-none filter drop-shadow-md transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Header Before What You Will Receive */}
        <div className="mt-10 mb-4 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C4932F]">
            O QUE VOCÊ VAI RECEBER:
          </span>
        </div>

        {/* Clean Integrated Grid of Features */}
        <div className="mb-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
          {offerFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DB] p-4 shadow-2xs transition-all hover:bg-white hover:shadow-xs"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-[#EAE5DB] text-[#C85A32] shadow-2xs">
                  <IconComponent className="h-4 w-4 stroke-[2.2]" />
                </span>
                <div className="text-sm sm:text-base text-[#173B4D] font-normal leading-snug pt-0.5">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>

        {/* Preparation Text for Offer */}
        <p className="mx-auto max-w-xl text-base sm:text-lg font-medium text-[#173B4D] leading-relaxed">
          Visualize os lugares da Bíblia e entenda como os acontecimentos se conectam.
        </p>

        {/* Unboxed, Clean & Seamless Pricing Block */}
        <div className="mt-8 mb-6 flex flex-col items-center justify-center">
          
          {/* De: R$ 166,00 */}
          <div className="text-sm sm:text-base font-semibold text-red-500">
            <span className="line-through decoration-red-500 font-bold text-red-500">
              De: R$ 166,00
            </span>
          </div>

          {/* POR APENAS */}
          <div className="mt-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B08830]">
            POR APENAS
          </div>
          
          {/* Price R$ 39,00 */}
          <div className="mt-2 flex items-baseline justify-center gap-1.5 whitespace-nowrap">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold accent-serif text-[#B08830] self-end mb-2 sm:mb-4">
              R$
            </span>
            <span className="relative text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-[#173B4D] glow-price">
              39
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold accent-serif text-[#B08830] self-end mb-2 sm:mb-4">
              ,00
            </span>
          </div>

          {/* à vista */}
          <p className="mt-2.5 text-sm sm:text-base font-medium text-[#173B4D]/80 tracking-wide">
            à vista
          </p>

          {/* Observação abaixo do preço */}
          <p className="mt-4 text-xs sm:text-sm font-medium text-[#5C6E75] leading-relaxed">
            Pagamento único • Acesso vitalício
          </p>
        </div>

        {/* CTA Button & Security Badges */}
        <div className="mt-8 flex flex-col items-center">
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="animate-breathe group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#265342] px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-xl transition-all duration-300 hover:bg-[#1f4537] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              <span>QUERO ACESSAR O ATLAS BÍBLICO VISUAL</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <a
              href={checkoutUrl}
              className="animate-breathe group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#265342] px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-xl transition-all duration-300 hover:bg-[#1f4537] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              <span>QUERO ACESSAR O ATLAS BÍBLICO VISUAL</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          )}
          
          {/* Security & Support Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#5C6E75]">
            <div className="flex items-center gap-1.5 font-medium">
              <Lock className="h-3.5 w-3.5 text-emerald-600" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#173B4D]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Headphones className="h-3.5 w-3.5 text-[#C4932F]" />
              <span>Suporte Exclusivo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
