import React from 'react';

interface WarrantyProps {
  onCtaClick?: () => void;
}

export const Warranty: React.FC<WarrantyProps> = () => {
  return (
    <section id="garantia" className="bg-white px-5 py-14 sm:py-20 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE5DB] p-8 sm:p-10 shadow-md text-center sm:text-left text-[#173B4D]">
          
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E5C158]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Visual Identity 7-Day Guarantee Seal */}
          <div className="shrink-0 relative flex items-center justify-center">
            <svg
              className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-md select-none"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Visual Identity Palette Gradients */}
                <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D8AC4F" />
                  <stop offset="50%" stopColor="#C4932F" />
                  <stop offset="100%" stopColor="#A8771A" />
                </linearGradient>

                <linearGradient id="sealPetrol" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1C4556" />
                  <stop offset="100%" stopColor="#143440" />
                </linearGradient>

                <linearGradient id="sealTerracotta" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8C4827" />
                  <stop offset="50%" stopColor="#C17D5C" />
                  <stop offset="100%" stopColor="#8C4827" />
                </linearGradient>
              </defs>

              {/* Smooth Outer Ring */}
              <circle cx="100" cy="100" r="94" fill="#FAF8F5" stroke="#EAE5DB" strokeWidth="2" />
              <circle cx="100" cy="100" r="88" fill="url(#sealGold)" />
              <circle cx="100" cy="100" r="82" fill="#FAF8F5" />
              
              {/* Inner Circle with Petrol Blue */}
              <circle cx="100" cy="100" r="76" fill="url(#sealPetrol)" />
              
              {/* Fine Gold Inner Ring */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#E5C158"
                strokeWidth="1.2"
                strokeDasharray="2 3"
                opacity="0.8"
              />

              {/* Top Arc "GARANTIA INCONDICIONAL" */}
              <path
                id="textPathGuarantee"
                d="M 40,100 A 60,60 0 0,1 160,100"
                fill="none"
              />
              <text fill="#FFFDF8" fontSize="8" fontWeight="bold" letterSpacing="0.18em">
                <textPath href="#textPathGuarantee" startOffset="50%" textAnchor="middle">
                  GARANTIA DE RISCO ZERO
                </textPath>
              </text>

              {/* Central Big Number "7" */}
              <text
                x="100"
                y="114"
                fill="#FFFDF8"
                fontSize="48"
                fontWeight="900"
                fontFamily="'Outfit', sans-serif"
                textAnchor="middle"
                className="select-none"
              >
                7
              </text>

              {/* "DIAS" Text */}
              <text
                x="100"
                y="132"
                fill="#E5C158"
                fontSize="12"
                fontWeight="800"
                letterSpacing="0.2em"
                textAnchor="middle"
                className="select-none"
              >
                DIAS
              </text>

              {/* Star Badges */}
              <polygon points="50,100 52,94 57,94 53,91 55,85 50,88 45,85 47,91 43,94 48,94" fill="#E5C158" />
              <polygon points="150,100 152,94 157,94 153,91 155,85 150,88 145,85 147,91 143,94 148,94" fill="#E5C158" />

              {/* Bottom Arc "100% SATISFAÇÃO" */}
              <path
                id="textPathSat"
                d="M 160,100 A 60,60 0 0,1 40,100"
                fill="none"
              />
              <text fill="#E5C158" fontSize="7.5" fontWeight="bold" letterSpacing="0.15em">
                <textPath href="#textPathSat" startOffset="50%" textAnchor="middle">
                  100% SATISFAÇÃO
                </textPath>
              </text>
            </svg>
          </div>

          {/* Guarantee Copy */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
              Compra 100% Segura
            </span>
            <h2 className="mt-1 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#173B4D]">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5C6E75]">
              Se por qualquer motivo você achar que o material não atendeu às suas expectativas, basta solicitar o reembolso em até 7 dias e devolveremos 100% do seu dinheiro. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
