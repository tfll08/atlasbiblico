import React from 'react';

interface WarrantyProps {
  onCtaClick?: () => void;
}

export const Warranty: React.FC<WarrantyProps> = () => {
  return (
    <section id="garantia" className="bg-[#173A45] px-5 py-14 sm:py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl bg-white border border-[#EAE5DB] p-8 sm:p-10 shadow-2xl text-center sm:text-left text-[#173B4D]">
          
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
                opacity="0.85"
              />

              {/* 3 Delicate Gold Stars */}
              <g fill="#E5C158">
                <polygon points="100,36 102,40 106.5,40.5 103,43.5 104,48 100,45.5 96,48 97,43.5 93.5,40.5 98,40" />
                <polygon points="86,39 87.5,42 91,42.5 88.5,45 89,48.5 86,46.5 83,48.5 83.5,45 81,42.5 84.5,42" opacity="0.9" />
                <polygon points="114,39 115.5,42 119,42.5 116.5,45 117,48.5 114,46.5 111,48.5 111.5,45 109,42.5 112.5,42" opacity="0.9" />
              </g>

              {/* Top Text: GARANTIA */}
              <text
                x="100"
                y="63"
                fill="#FAF8F5"
                fontSize="11"
                fontWeight="700"
                letterSpacing="2.5"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                GARANTIA
              </text>

              {/* Big "7" Number */}
              <text
                x="100"
                y="114"
                fill="#E5C158"
                fontSize="50"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                7
              </text>

              {/* Bottom Text: DIAS */}
              <text
                x="100"
                y="134"
                fill="#FAF8F5"
                fontSize="13"
                fontWeight="800"
                letterSpacing="3.5"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                DIAS
              </text>

              {/* Terracotta Ribbon at Bottom */}
              <g>
                <path
                  d="M 38 150 L 162 150 L 154 168 L 46 168 Z"
                  fill="url(#sealTerracotta)"
                  stroke="#FAF8F5"
                  strokeWidth="1"
                />
                <text
                  x="100"
                  y="162.5"
                  fill="#FFF"
                  fontSize="8.5"
                  fontWeight="700"
                  letterSpacing="1.2"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  100% INCONDICIONAL
                </text>
              </g>
            </svg>
          </div>

          {/* Guarantee Text */}
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold tracking-tight sm:text-2xl text-[#173B4D] text-balance">
              Você tem 7 dias para conhecer o material
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5C6E75] sm:text-base">
              Acesse, explore os volumes e veja se o Atlas faz sentido para o seu estudo. Se decidir que não é para você dentro do prazo da garantia, poderá solicitar o reembolso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};


