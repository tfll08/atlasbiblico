import React from 'react';

export const PainIdentification: React.FC = () => {
  return (
    <section id="contexto-e-lugares" className="bg-[#173A45] px-4 sm:px-6 py-16 sm:py-24 text-white overflow-hidden scroll-mt-6">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
            COMPREENSÃO E CONTEXTO
          </span>

          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white text-balance break-words">
            Já leu um relato bíblico e ficou tentando imaginar{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              onde tudo aquilo aconteceu?
            </span>
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#D1E0E5] text-balance">
            Muitos acontecimentos ficam mais fáceis de compreender quando conseguimos visualizar os lugares, as distâncias e os caminhos percorridos.
          </p>

          <p className="mt-3 mx-auto max-w-2xl text-base sm:text-lg font-medium text-[#E5C158] leading-relaxed text-balance">
            O Atlas Bíblico Visual transforma esse contexto em uma experiência visual.
          </p>
        </div>

        {/* Visual Map Showcase with Handwritten Callouts & Dotted Arrows */}
        <div className="mt-12 sm:mt-16 relative mx-auto max-w-4xl px-2 sm:px-6">
          
          {/* Top Callouts (Mobile & Desktop) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12 mb-3 sm:mb-4 max-w-2xl mx-auto items-end">
            
            {/* 1. VEJA O MAPA */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5C158] tracking-wide rotate-[-3deg] select-none drop-shadow-xs">
                VEJA O MAPA
              </span>
              {/* Curved Dotted Arrow pointing down-right */}
              <svg className="w-12 h-10 sm:w-16 sm:h-12 text-[#E5C158] mt-1 ml-4" viewBox="0 0 60 45" fill="none">
                <path d="M10 5 C 25 5, 45 15, 52 38" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="56,42 46,38 52,30" fill="currentColor" />
              </svg>
            </div>

            {/* 2. ENTENDA O LUGAR */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5C158] tracking-wide rotate-[3deg] select-none drop-shadow-xs">
                ENTENDA O LUGAR
              </span>
              {/* Curved Dotted Arrow pointing down-left */}
              <svg className="w-12 h-10 sm:w-16 sm:h-12 text-[#E5C158] mt-1 mr-4" viewBox="0 0 60 45" fill="none">
                <path d="M50 5 C 35 5, 15 15, 8 38" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="4,42 14,38 8,30" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Central Image Container */}
          <div className="relative mx-auto max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/10 border-2 border-white/20 shadow-2xl backdrop-blur-xs">
            <img
              src="https://i.imgur.com/uMa1QCh.png"
              alt="Páginas e mapas do Atlas Bíblico Visual com rotas e contextos detalhados"
              width={1000}
              height={700}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl select-none filter drop-shadow-lg"
            />
          </div>

          {/* Bottom Callouts (Mobile & Desktop) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12 mt-3 sm:mt-4 max-w-2xl mx-auto items-start">
            
            {/* 3. ACOMPANHE A JORNADA */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Curved Dotted Arrow pointing up-right */}
              <svg className="w-12 h-10 sm:w-16 sm:h-12 text-[#E5C158] mb-1 ml-4" viewBox="0 0 60 45" fill="none">
                <path d="M10 40 C 25 40, 45 30, 52 7" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="56,3 46,7 52,15" fill="currentColor" />
              </svg>
              <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5C158] tracking-wide rotate-[2deg] select-none drop-shadow-xs">
                ACOMPANHE A JORNADA
              </span>
            </div>

            {/* 4. CONECTE O CONTEXTO */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              {/* Curved Dotted Arrow pointing up-left */}
              <svg className="w-12 h-10 sm:w-16 sm:h-12 text-[#E5C158] mb-1 mr-4" viewBox="0 0 60 45" fill="none">
                <path d="M50 40 C 35 40, 15 30, 8 7" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" strokeLinecap="round" />
                <polygon points="4,3 14,7 8,15" fill="currentColor" />
              </svg>
              <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5C158] tracking-wide rotate-[-3deg] select-none drop-shadow-xs">
                CONECTE O CONTEXTO
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
