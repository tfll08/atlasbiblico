import React, { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';

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

interface ReadingTheme {
  id: string;
  label: string;
  volumeBadge: string;
  text: string;
}

const READING_THEMES: ReadingTheme[] = [
  {
    id: 'paulo',
    label: 'Viagens de Paulo',
    volumeBadge: 'Volume 4',
    text: 'Está lendo sobre as viagens de Paulo? Abra o mapa correspondente no Atlas, localize as cidades mencionadas e acompanhe o percurso enquanto lê sua Bíblia.',
  },
  {
    id: 'jesus',
    label: 'Caminhos de Jesus',
    volumeBadge: 'Volume 3',
    text: 'Está lendo os Evangelhos? Abra o mapa correspondente no Atlas, visualize por quais vilas Jesus passou e compreenda as distâncias reais enquanto lê sua Bíblia.',
  },
  {
    id: 'patriarcas',
    label: 'Patriarcas',
    volumeBadge: 'Volume 2',
    text: 'Está lendo sobre Abraão, Isaque, Jacó ou José? Abra o mapa correspondente no Atlas, acompanhe as rotas pelo deserto e entenda o caminho até a Terra Prometida enquanto lê sua Bíblia.',
  },
  {
    id: 'mundo-biblia',
    label: 'O Mundo da Bíblia',
    volumeBadge: 'Volume 1',
    text: 'Está lendo sobre impérios, nações e cenários do Antigo Testamento? Abra o mapa correspondente no Atlas, localize os territórios e rios e compreenda o contexto geográfico enquanto lê sua Bíblia.',
  },
];

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
  const [selectedThemeId, setSelectedThemeId] = useState<string>('paulo');

  const currentTheme = READING_THEMES.find((t) => t.id === selectedThemeId) || READING_THEMES[0];

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
            Veja páginas reais do Atlas e descubra como ele é usado durante a leitura.
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

      {/* 3. BLOCO SIMPLIFICADO: COMO USAR DURANTE A LEITURA */}
      <div className="mt-14 sm:mt-18 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-3xl bg-white/10 border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md text-center">
          
          {/* Título */}
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Como usar durante a leitura
          </h3>

          {/* Temas Clicáveis (4 Volumes) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {READING_THEMES.map((theme) => {
              const isSelected = selectedThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#E5C158] text-[#173B4D] font-bold shadow-md scale-105'
                      : 'bg-white/10 text-white/85 hover:bg-white/20 hover:text-white border border-white/15'
                  }`}
                >
                  {theme.label}
                </button>
              );
            })}
          </div>

          {/* Texto dinâmico que muda conforme o tema escolhido */}
          <div className="mt-6 mx-auto max-w-2xl rounded-2xl bg-black/20 border border-white/15 p-5 sm:p-6 shadow-inner min-h-[96px] flex items-center justify-center">
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed transition-opacity duration-300">
              {currentTheme.text}
            </p>
          </div>

          {/* Três passos abaixo: Leia a passagem → Consulte o mapa → Localize os lugares */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/15">
            {/* Modo Mobile: Em uma única linha de texto, sem caixinhas */}
            <div className="block sm:hidden text-center">
              <p className="text-[11px] min-[360px]:text-xs font-semibold text-white/95 leading-normal flex items-center justify-center gap-1.5 min-[360px]:gap-2">
                <span>Leia a passagem</span>
                <span className="text-[#E5C158] font-bold select-none">→</span>
                <span>Consulte o mapa</span>
                <span className="text-[#E5C158] font-bold select-none">→</span>
                <span>Localize os lugares</span>
              </p>
            </div>

            {/* Modo Desktop / Tablet */}
            <div className="hidden sm:flex items-center justify-center gap-3 sm:gap-4 md:gap-5 text-xs sm:text-sm md:text-base font-semibold text-white">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 shadow-2xs">
                <span>Leia a passagem</span>
              </div>

              <ArrowRight className="h-4 w-4 text-[#E5C158] shrink-0" />

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 shadow-2xs">
                <span>Consulte o mapa</span>
              </div>

              <ArrowRight className="h-4 w-4 text-[#E5C158] shrink-0" />

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 shadow-2xs">
                <span>Localize os lugares</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTÃO DE AÇÃO PARA A OFERTA */}
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
