import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MonitorSmartphone, 
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
    <section id="oferta" className="relative px-4 xs:px-5 sm:px-6 py-16 sm:py-24 bg-white text-[#173B4D] scroll-mt-6 border-y border-[#EAE5DB] overflow-hidden">
      {/* Elemento absoluto do quadriculado sutil de fundo (decorativo) */}
      <div 
        className="absolute inset-0 pointer-events-none text-[#173B4D] opacity-[0.04] z-0" 
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* 1. CABEÇALHO DA SESSÃO */}
        <h2 className="mt-2 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#173B4D] text-balance break-words">
          Receba a <span className="font-migra italic text-[#C4932F]">oferta</span> do Atlas Bíblico Visual <span className="font-migra italic text-[#C4932F]">completo</span>
        </h2>

        {/* Subtítulo de apoio */}
        <p className="mt-3 mx-auto max-w-xl text-[0.95rem] sm:text-base text-[#5C6E75] leading-relaxed text-balance">
          4 volumes + 4 guias + material extra + acesso vitalício
        </p>

        {/* 2. CARD PRINCIPAL DE OFERTA */}
        <div className="relative mt-12 sm:mt-14 mx-auto max-w-2xl rounded-3xl bg-white border-2 border-[#EAE5DB] p-5 xs:p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-[#D8AC4F]/50">
          
          {/* Badge flutuante no topo do card (centralizado) */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#173B4D] px-4 sm:px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FDE68A] shadow-md border border-[#D8AC4F]/40 whitespace-nowrap">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C158]" />
              <span>Acesso Completo + 4 Bônus</span>
            </span>
          </div>

          {/* Frase de apoio interna */}
          <div className="pt-2 sm:pt-1 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#C4932F]">
              Seus mapas e os 4 bônus em um único acesso
            </p>
          </div>

          {/* MOCKUP DO PRODUTO com hover sutil e lazy loading */}
          <div className="my-6 sm:my-8 w-full flex justify-center">
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
              className="w-full max-w-lg h-auto object-contain select-none filter drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* BLOCO "VOCÊ RECEBE" (Container interno em estilo card secundário) */}
          <div className="my-6 sm:my-8 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] p-5 sm:p-6 shadow-xs text-left">
            {/* Título em caixa alta */}
            <div className="mb-4 sm:mb-5">
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C4932F]">
                O QUE VOCÊ VAI RECEBER:
              </h3>
            </div>

            {/* Lista com ícones de confirmação (checkmarks estilizados) */}
            <div className="space-y-3">
              {[
                '+300 páginas visuais de mapas e conteúdos bíblicos para consulta',
                '4 volumes completos do Atlas Bíblico Visual',
                '4 guias visuais + material extra de revisão',
                'Arquivos disponíveis para baixar e imprimir',
                'Acesso pelo celular, tablet ou computador',
                'Área de membros com experiência de app',
                'Acesso liberado após a confirmação do pagamento',
                'Acesso vitalício + Atualizações',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173B4D] text-[#E5C158] flex items-center justify-center font-extrabold text-xs shrink-0 select-none shadow-2xs">
                    ✓
                  </div>
                  <span className="text-[#173B4D] font-medium text-xs sm:text-sm leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Linha divisória sutil com o aviso de entrega */}
            <div className="border-t border-[#EAE5DB] pt-3.5 mt-4">
              <p className="text-[11px] sm:text-xs text-[#5C6E75] font-normal text-center sm:text-left">
                Após a confirmação do pagamento, você recebe por e-mail o acesso à área de membros.
              </p>
            </div>
          </div>

          {/* BLOCO DE PREÇO EM DESTAQUE */}
          <div className="mt-6 sm:mt-8 mb-6 flex flex-col items-center justify-center text-center">
            
            {/* Ancoragem de preço com valor riscado */}
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <span className="text-[#5C6E75] font-medium">De</span>
              <span className="font-semibold text-rose-500 line-through">R$ 97</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#C4932F]">
                por apenas
              </span>
            </div>

            {/* Preço final em tipografia bem grande e pesada: "R$ 39" */}
            <div className="mt-2 flex items-baseline justify-center gap-2 whitespace-nowrap">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold accent-serif text-[#C4932F] self-end mb-2 sm:mb-4">
                R$
              </span>
              <span className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-[#173B4D]">
                39
              </span>
            </div>

            {/* Informações de compra logo abaixo */}
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#5C6E75] tracking-wide">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          {/* BOTÃO DE AÇÃO (CTA PRINCIPAL) */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            {onCtaClick ? (
              <button
                onClick={onCtaClick}
                className="animate-breathe group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#16A34A] px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-green-900/25 transition-all duration-300 hover:bg-[#15803D] hover:scale-[1.02] active:scale-[0.99] cursor-pointer border border-emerald-400/40"
              >
                <span>QUERO ACESSAR O ATLAS COMPLETO</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <a
                href={checkoutUrl}
                className="animate-breathe group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#16A34A] px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-green-900/25 transition-all duration-300 hover:bg-[#15803D] hover:scale-[1.02] active:scale-[0.99] cursor-pointer border border-emerald-400/40"
              >
                <span>QUERO ACESSAR O ATLAS COMPLETO</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            )}

            {/* SELOS DE CONFIANÇA E SEGURANÇA */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#5C6E75]">
              <div className="flex items-center gap-1.5 font-medium">
                <Lock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <MonitorSmartphone className="h-3.5 w-3.5 text-[#173B4D] shrink-0" />
                <span>100% digital</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Headphones className="h-3.5 w-3.5 text-[#C4932F] shrink-0" />
                <span>Suporte por e-mail e whatsapp</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
