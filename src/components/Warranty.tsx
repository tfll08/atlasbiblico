import React from 'react';

export const Warranty: React.FC = () => {
  return (
    <section id="garantia" className="bg-white px-5 py-14 sm:py-20 text-[#173B4D] scroll-mt-6">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE5DB] p-8 sm:p-10 shadow-sm text-center sm:text-left text-[#173B4D]">
          
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E5C158]/10 rounded-full blur-2xl pointer-events-none" />

          {/* New 7-Day Guarantee Seal */}
          <div className="shrink-0 relative flex items-center justify-center">
            <img
              src="/images/selo-garantia.webp"
              alt="Garantia Incondicional de 7 Dias"
              width={240}
              height={240}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              onError={(e) => {
                if (e.currentTarget.src !== 'https://i.imgur.com/Twu6lAt.png') {
                  e.currentTarget.src = 'https://i.imgur.com/Twu6lAt.png';
                }
              }}
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-md select-none transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Guarantee Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#173B4D]">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-3 text-[0.95rem] sm:text-base leading-relaxed text-[#5C6E75] text-balance">
              Acesse o material e conheça o Atlas com tranquilidade. Se dentro de 7 dias você decidir que ele não é para você, basta solicitar o reembolso dentro do prazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
