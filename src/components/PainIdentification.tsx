import React from 'react';
import { Eye } from 'lucide-react';

interface PainIdentificationProps {
  onCtaClick?: () => void;
}

interface MarqueeItem {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  borderColor: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    id: 'preview-1',
    src: '/images/marquee/preview-1.webp',
    fallbackSrc: 'https://i.imgur.com/0zrUyqe.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Mapa Histórico',
    borderColor: 'border-[#93C5FD]/70', // azul suave
  },
  {
    id: 'preview-2',
    src: '/images/marquee/preview-2.webp',
    fallbackSrc: 'https://i.imgur.com/t0qnGer.jpeg',
    alt: 'Página do Atlas com rotas e lugares bíblicos',
    borderColor: 'border-[#FDE047]/70', // amarelo suave
  },
  {
    id: 'preview-3',
    src: '/images/marquee/preview-3.webp',
    fallbackSrc: 'https://i.imgur.com/Fxs0fo4.jpeg',
    alt: 'Mapa visual detalhado com cidades e regiões bíblicas',
    borderColor: 'border-[#DDD6FE]/70', // lilás suave
  },
  {
    id: 'preview-4',
    src: '/images/marquee/preview-4.webp',
    fallbackSrc: 'https://i.imgur.com/nRM7kss.jpeg',
    alt: 'Página de acontecimentos bíblicos e conexões territoriais',
    borderColor: 'border-[#A7F3D0]/70', // verde suave
  },
  {
    id: 'preview-5',
    src: '/images/marquee/preview-5.webp',
    fallbackSrc: 'https://i.imgur.com/wk0hUnc.jpeg',
    alt: 'Mapa de rotas e viagens nas Escrituras',
    borderColor: 'border-[#93C5FD]/70', // azul suave
  },
  {
    id: 'preview-6',
    src: '/images/marquee/preview-6.webp',
    fallbackSrc: 'https://i.imgur.com/cMrOLht.jpeg',
    alt: 'Contexto visual com explicações e referências bíblicas',
    borderColor: 'border-[#FDE047]/70', // amarelo suave
  },
  {
    id: 'preview-7',
    src: '/images/marquee/preview-7.webp',
    fallbackSrc: 'https://i.imgur.com/akSXN1x.jpeg',
    alt: 'Jornada bíblica mapeada com clareza geográfica',
    borderColor: 'border-[#DDD6FE]/70', // lilás suave
  },
  {
    id: 'preview-8',
    src: '/images/marquee/preview-8.webp',
    fallbackSrc: 'https://i.imgur.com/ufC1u8q.jpeg',
    alt: 'Página do Atlas com cidades, montanhas e rios bíblicos',
    borderColor: 'border-[#A7F3D0]/70', // verde suave
  },
  {
    id: 'preview-9',
    src: '/images/marquee/preview-9.webp',
    fallbackSrc: 'https://i.imgur.com/A3abYP3.jpeg',
    alt: 'Rotas do Novo Testamento e expansão da fé',
    borderColor: 'border-[#93C5FD]/70', // azul suave
  },
  {
    id: 'preview-10',
    src: '/images/marquee/preview-10.webp',
    fallbackSrc: 'https://i.imgur.com/GjLk1yN.jpeg',
    alt: 'Mapas dos reinos e divisões territoriais bíblicas',
    borderColor: 'border-[#FDE047]/70', // amarelo suave
  },
  {
    id: 'preview-11',
    src: '/images/marquee/preview-11.webp',
    fallbackSrc: 'https://i.imgur.com/b9rPMWF.jpeg',
    alt: 'Página do Atlas com visualização completa de rotas',
    borderColor: 'border-[#DDD6FE]/70', // lilás suave
  },
];

// Row 1 distribution (items 1 to 11)
const ROW_1 = MARQUEE_ITEMS;

// Row 2 distribution: interleaved/rotated to give a diverse alternating visual flow
const ROW_2 = [
  MARQUEE_ITEMS[6],
  MARQUEE_ITEMS[7],
  MARQUEE_ITEMS[8],
  MARQUEE_ITEMS[9],
  MARQUEE_ITEMS[10],
  MARQUEE_ITEMS[0],
  MARQUEE_ITEMS[1],
  MARQUEE_ITEMS[2],
  MARQUEE_ITEMS[3],
  MARQUEE_ITEMS[4],
  MARQUEE_ITEMS[5],
];

// Triplicate for seamless infinite marquee loop
const TRIPLE_ROW_1 = [...ROW_1, ...ROW_1, ...ROW_1];
const TRIPLE_ROW_2 = [...ROW_2, ...ROW_2, ...ROW_2];

export const PainIdentification: React.FC<PainIdentificationProps> = ({ onCtaClick }) => {
  return (
    <section id="demonstracao-interativa" className="bg-[#173A45] py-16 sm:py-24 text-white overflow-hidden scroll-mt-6 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        
        {/* 1. ESTRUTURA DO CABEÇALHO */}
        <div className="flex flex-col items-center">
          {/* Tag/Badge Superior */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-white/20 shadow-2xs backdrop-blur-xs">
            <Eye className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>VEJA O MATERIAL POR DENTRO</span>
          </div>

          {/* Título da Seção */}
          <h2 className="mt-3.5 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white text-balance break-words">
            Conheça os <span className="font-migra italic text-[#E5C158]">mapas</span> que vão acompanhar seu estudo da Bíblia
          </h2>

          {/* Subtítulo */}
          <p className="mt-3.5 mx-auto max-w-2xl text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-[#D1E0E5] text-balance">
            Veja páginas reais do Atlas, com lugares, jornadas e explicações para consultar durante sua leitura.
          </p>
        </div>

      </div>

      {/* 2. CARROSSEL INFINITO DUPLO (DUAL MARQUEE) COM FADE GRADIENT */}
      <div className="relative mt-12 sm:mt-16 w-full overflow-hidden select-none">
        
        {/* Laterais com gradiente fade suave para sensação de profundidade infinita */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-[#173A45] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-[#173A45] to-transparent z-10" />

        {/* Linha 1: Move-se continuamente para a esquerda */}
        <div className="py-2 overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6">
            {TRIPLE_ROW_1.map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                className={`w-[240px] sm:w-[270px] shrink-0 bg-white rounded-[2.5rem] p-3 sm:p-4 border-2 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:border-[#12BFA6] hover:shadow-xl group cursor-pointer`}
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl bg-[#FAFAF9] border border-black/5 p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={540}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    draggable={false}
                    onError={(e) => {
                      if (e.currentTarget.src !== item.fallbackSrc) {
                        e.currentTarget.src = item.fallbackSrc;
                      }
                    }}
                    className="w-full h-full object-contain rounded-xl select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2: Move-se continuamente para a direita */}
        <div className="py-2 mt-2 sm:mt-4 overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6">
            {TRIPLE_ROW_2.map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                className={`w-[240px] sm:w-[270px] shrink-0 bg-white rounded-[2.5rem] p-3 sm:p-4 border-2 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:border-[#12BFA6] hover:shadow-xl group cursor-pointer`}
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl bg-[#FAFAF9] border border-black/5 p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={540}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    draggable={false}
                    onError={(e) => {
                      if (e.currentTarget.src !== item.fallbackSrc) {
                        e.currentTarget.src = item.fallbackSrc;
                      }
                    }}
                    className="w-full h-full object-contain rounded-xl select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. BOTÃO DE AÇÃO PARA A OFERTA */}
      {onCtaClick && (
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <button
            onClick={onCtaClick}
            className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-8 sm:px-12 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#173B4D] transition-all hover:bg-white/95 hover:scale-[1.02] active:scale-[0.99] shadow-md cursor-pointer"
          >
            QUERO ACESSAR O ATLAS COMPLETO
          </button>
        </div>
      )}
    </section>
  );
};
