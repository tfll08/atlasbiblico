import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:py-24 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-3xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4932F]">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight sm:text-4xl text-[#173B4D] text-balance break-words">
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
                className="overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] shadow-xs transition-all text-[#173B4D]"
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-white"
                >
                  <span className="text-base font-bold text-[#173B4D]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#5C6E75] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C6A052]' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-4 text-sm sm:text-base leading-relaxed text-[#5C6E75] animate-fadeIn border-t border-[#EAE5DB]/60 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
