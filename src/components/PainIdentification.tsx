import React from 'react';

interface PainIdentificationProps {
  onCtaClick?: () => void;
}

export const PainIdentification: React.FC<PainIdentificationProps> = ({ onCtaClick }) => {
  return (
    <section id="contexto-e-lugares" className="bg-white px-5 py-16 sm:py-20 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Section Header with Reflection & Identification */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
            Compreensão e Contexto
          </span>

          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-[#173B4D] text-balance break-words">
            Você já leu uma passagem da Bíblia e ficou tentando imaginar{' '}
            <span className="font-normal normal-case text-terracotta font-migra italic inline sm:inline-block">
              onde tudo aquilo aconteceu?
            </span>
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-[#5C6E75] text-balance">
            Muitos relatos ficam mais fáceis de compreender quando você visualiza os lugares, as distâncias e os caminhos percorridos. <span className="font-medium text-[#173B4D]">O Atlas Bíblico Visual organiza esse contexto de forma clara e visual.</span>
          </p>
        </div>

        {/* CTA Button */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#173B4D] px-8 sm:px-10 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
            >
              Quero entender a Bíblia com mais clareza
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

