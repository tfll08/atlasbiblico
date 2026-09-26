import React from 'react';
import { Smartphone, CreditCard, Infinity } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="bg-white px-3.5 xs:px-4 sm:px-6 pt-8 sm:pt-14 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Product Brand with Logo above Headline */}
        <div className="mb-5 sm:mb-7 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FAF8F5] px-4 sm:px-5 py-1.5 sm:py-2 border border-[#EAE5DB] shadow-2xs">
            <img 
              src="/favicon.svg" 
              alt="Logo Atlas Bíblico Visual" 
              width={24}
              height={24}
              className="h-4 w-4 sm:h-5 sm:w-5 rounded-md object-contain shrink-0" 
            />
            <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#173B4D]">
              Atlas Bíblico Visual
            </span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="mx-auto w-full max-w-4xl sm:max-w-5xl font-heading text-[1.65rem] xs:text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.24] sm:leading-[1.18] tracking-tight text-foreground text-balance">
          Entenda os lugares, rotas e jornadas da{' '}
          <span className="font-normal normal-case text-terracotta font-migra italic">
            Bíblia
          </span>{' '}
          com mapas visuais
        </h1>

        {/* Hero Transparent Image without background or frame */}
        <div className="relative mx-auto mt-6 sm:mt-8 w-full max-w-4xl flex flex-col items-center justify-center">
          
          {/* Selo: Aprovado por leitores da Bíblia */}
          <div 
            className="absolute -top-3 right-1 xs:right-3 sm:-top-2 sm:right-6 md:right-10 lg:right-14 z-20 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-xl select-none"
            aria-label="Selo Aprovado por leitores da Bíblia"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <defs>
                <linearGradient id="heroSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="40%" stopColor="#D8AC4F" />
                  <stop offset="100%" stopColor="#9A6E18" />
                </linearGradient>

                <linearGradient id="heroSealNavy" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1C4556" />
                  <stop offset="100%" stopColor="#102A36" />
                </linearGradient>
              </defs>

              {/* Outer Outer Ring with Petrol Base */}
              <circle cx="100" cy="100" r="95" fill="#0F2833" stroke="url(#heroSealGold)" strokeWidth="2.5" />
              
              {/* Outer Dotted Gold Ring */}
              <circle
                cx="100"
                cy="100"
                r="89"
                fill="none"
                stroke="#E5C158"
                strokeWidth="1.5"
                strokeDasharray="3 3.5"
                opacity="0.9"
              />

              {/* Solid Gold Band */}
              <circle cx="100" cy="100" r="84" fill="url(#heroSealGold)" />

              {/* Core Petrol Disc */}
              <circle cx="100" cy="100" r="80" fill="url(#heroSealNavy)" />

              {/* Inner Dotted Accent Ring */}
              <circle
                cx="100"
                cy="100"
                r="73"
                fill="none"
                stroke="#E5C158"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.6"
              />

              {/* 5 Golden Stars Arched at Top */}
              <g fill="#FDE68A" stroke="#B48222" strokeWidth="0.5">
                {/* Star 1 */}
                <polygon points="66,54 68,48 74,48 69,44 71,38 66,42 61,38 63,44 58,48 64,48" transform="scale(0.85) translate(12, 8)" />
                {/* Star 2 */}
                <polygon points="82,47 84,41 90,41 85,37 87,31 82,35 77,31 79,37 74,41 80,41" transform="scale(0.9) translate(9, 5)" />
                {/* Star 3 (Center) */}
                <polygon points="100,43 102.5,36 109,36 103.5,32 106,25 100,29.5 94,25 96.5,32 91,36 97.5,36" transform="translate(0, 10)" />
                {/* Star 4 */}
                <polygon points="118,47 120,41 126,41 121,37 123,31 118,35 113,31 115,37 110,41 116,41" transform="scale(0.9) translate(13, 5)" />
                {/* Star 5 */}
                <polygon points="134,54 136,48 142,48 137,44 139,38 134,42 129,38 131,44 126,48 132,48" transform="scale(0.85) translate(24, 8)" />
              </g>

              {/* Badge Checkmark Emblem */}
              <circle cx="100" cy="71" r="12" fill="url(#heroSealGold)" />
              <path
                d="M94.5 71.5 L98.5 75.5 L106 67"
                fill="none"
                stroke="#0F2833"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Central Text: APROVADO */}
              <text
                x="100"
                y="102"
                fill="#FFFFFF"
                fontSize="16.5"
                fontWeight="900"
                letterSpacing="0.14em"
                textAnchor="middle"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                APROVADO
              </text>

              {/* Subtext 1: POR LEITORES */}
              <text
                x="100"
                y="119"
                fill="#FDE68A"
                fontSize="10"
                fontWeight="800"
                letterSpacing="0.16em"
                textAnchor="middle"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                POR LEITORES
              </text>

              {/* Subtext 2: DA BÍBLIA */}
              <text
                x="100"
                y="136"
                fill="#FFFFFF"
                fontSize="11.5"
                fontWeight="900"
                letterSpacing="0.18em"
                textAnchor="middle"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                DA BÍBLIA
              </text>

              {/* Bottom Arc: RECOMENDADO */}
              <path
                id="heroSealBottomArc"
                d="M 44,130 A 62,62 0 0,0 156,130"
                fill="none"
              />
              <text fill="#E5C158" fontSize="7.5" fontWeight="700" letterSpacing="0.22em" opacity="0.95">
                <textPath href="#heroSealBottomArc" startOffset="50%" textAnchor="middle">
                  ★ RECOMENDADO ★
                </textPath>
              </text>
            </svg>
          </div>

          <img
            src="https://i.imgur.com/GqMNX5T.png"
            alt="Volumes do Atlas Bíblico Visual"
            width={1200}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full max-w-3xl h-auto object-contain select-none filter drop-shadow-md"
          />
        </div>

        {/* Subheadline Below Image */}
        <p className="mx-auto mt-6 sm:mt-7 max-w-2xl text-[1rem] xs:text-[1.05rem] sm:text-lg leading-relaxed text-muted-foreground text-balance">
          Uma coleção digital com{' '}
          <strong className="font-semibold text-terracotta">
            mapas, cidades, contextos e referências
          </strong>{' '}
          para consultar enquanto você estuda, ensina ou prepara uma mensagem.
        </p>

        {/* Primary CTA */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={onCtaClick}
            id="hero-cta-btn"
            className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#173B4D] px-8 sm:px-12 py-4 sm:py-5 text-center text-sm sm:text-base font-bold tracking-wide uppercase text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
          >
            QUERO ACESSAR O ATLAS COMPLETO
          </button>
        </div>

        {/* Features List */}
        <ul className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <li className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 shrink-0 text-gold" />
            <span>Área de membros estilo app</span>
          </li>
          <li className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 shrink-0 text-gold" />
            <span>Pagamento único</span>
          </li>
          <li className="flex items-center gap-2">
            <Infinity className="h-4 w-4 shrink-0 text-gold" />
            <span>Acesso vitalício</span>
          </li>
        </ul>

      </div>
    </section>
  );
};

