import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCheckout = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.location.href = 'https://pagamento.projetoreino.com/checkout/212527976:1';
    }
  };

  return (
    <section id="faq" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white content-visibility-auto scroll-mt-6">
      <div className="mx-auto max-w-3xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight sm:text-4xl text-white text-balance break-words">
            Dúvidas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4 sm:mt-16">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-xs transition-all text-white backdrop-blur-xs"
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-white/15"
                >
                  <span className="text-base font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E5C158]' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-4 text-sm sm:text-base leading-relaxed text-[#D1E0E5] animate-fadeIn border-t border-white/15 bg-black/20">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button at the end of FAQ */}
        <div className="mt-12 sm:mt-14 flex flex-col items-center">
          <button
            onClick={handleCheckout}
            className="animate-breathe group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#265342] px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-[0.1em] text-white shadow-xl transition-all duration-300 hover:bg-[#1f4537] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
          >
            <span>TIREI MINHAS DÚVIDAS, QUERO O ATLAS</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
