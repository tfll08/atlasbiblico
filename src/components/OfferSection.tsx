import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
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

  return (
    <section id="oferta" className="relative px-5 py-16 sm:py-24 bg-[#173A45] text-white scroll-mt-6">
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Top Badge */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-white/20 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            Acesse o Atlas completo
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance break-words">
          Seu Atlas Bíblico Visual <span className="font-migra italic text-[#E5C158]">completo</span>
        </h2>

        {/* Bundle Showcase Image */}
        <div className="my-8 w-full flex justify-center">
          <img
            src="/images/offer-bundle.webp"
            alt="Coleção Atlas Bíblico Visual Completo"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            onError={(e) => {
              if (e.currentTarget.src !== 'https://i.imgur.com/punOLdB.png') {
                e.currentTarget.src = 'https://i.imgur.com/punOLdB.png';
              }
            }}
            className="w-full max-w-2xl h-auto object-contain select-none filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Card de Checklist: O QUE VOCÊ VAI RECEBER */}
        <div className="my-10 mx-auto max-w-xl rounded-2xl bg-white/10 border border-white/20 p-5 sm:p-6 md:p-7 shadow-xl backdrop-blur-xs text-left">
          {/* Cabeçalho do Bloco */}
          <div className="mb-4 sm:mb-5">
            <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E5C158]">
              O QUE VOCÊ VAI RECEBER:
            </h3>
          </div>

          {/* Lista de Itens com Checkmark Customizado */}
          <div className="space-y-3">
            {[
              '+300 páginas para consulta',
              '4 volumes completos do Atlas Bíblico Visual',
              '4 guias visuais + material extra de revisão',
              'Arquivos disponíveis para baixar e imprimir',
              'Acesso pelo celular, tablet ou computador',
              'Área de membros com experiência de app',
              'Acesso liberado após a confirmação do pagamento',
              'Acesso vitalício',
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-[#BDEFE4] text-[#082F5B] flex items-center justify-center font-extrabold text-xs shrink-0 select-none">
                  ✓
                </div>
                <span className="text-white font-medium text-xs sm:text-sm md:text-base leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Nota de Rodapé Informativa de Entrega */}
          <div className="border-t border-white/15 pt-3 mt-4">
            <p className="text-[11px] sm:text-xs text-[#D1E0E5] font-normal text-center sm:text-left">
              Após a confirmação do pagamento, você recebe por e-mail o acesso à área de membros.
            </p>
          </div>
        </div>

        {/* Unboxed, Clean & Seamless Pricing Block */}
        <div className="mt-8 mb-6 flex flex-col items-center justify-center">
          
          {/* De: R$97 riscado em vermelho */}
          <div className="text-sm sm:text-base font-semibold text-red-300 line-through">
            De: R$97
          </div>

          {/* ACESSO COMPLETO POR APENAS */}
          <div className="mt-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E5C158]">
            ACESSO COMPLETO POR APENAS
          </div>
          
          {/* Price R$ 39,00 */}
          <div className="mt-2 flex items-baseline justify-center gap-1.5 whitespace-nowrap">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold accent-serif text-[#E5C158] self-end mb-2 sm:mb-4">
              R$
            </span>
            <span className="relative text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white glow-price">
              39
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold accent-serif text-[#E5C158] self-end mb-2 sm:mb-4">
              ,00
            </span>
          </div>

          {/* à vista */}
          <p className="mt-2.5 text-sm sm:text-base font-medium text-[#D1E0E5] tracking-wide">
            à vista
          </p>

          {/* Observação abaixo do preço */}
          <p className="mt-4 text-xs sm:text-sm font-medium text-[#D1E0E5]/90 leading-relaxed flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Pagamento único</span>
            <span>·</span>
            <span>Sem mensalidade</span>
            <span>·</span>
            <span>Acesso vitalício</span>
          </p>
        </div>

        {/* CTA Button & Security Badges */}
        <div className="mt-8 flex flex-col items-center">
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="animate-breathe group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#16A34A] px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:bg-[#15803D] hover:scale-[1.02] active:scale-[0.99] cursor-pointer border border-emerald-300/30"
            >
              <span>QUERO ACESSAR O ATLAS COMPLETO</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <a
              href={checkoutUrl}
              className="animate-breathe group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#16A34A] px-8 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:bg-[#15803D] hover:scale-[1.02] active:scale-[0.99] cursor-pointer border border-emerald-300/30"
            >
              <span>QUERO ACESSAR O ATLAS COMPLETO</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          )}
          
          {/* Security & Support Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#D1E0E5]">
            <div className="flex items-center gap-1.5 font-medium">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Headphones className="h-3.5 w-3.5 text-[#E5C158]" />
              <span>Suporte por e-mail e whatsapp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
