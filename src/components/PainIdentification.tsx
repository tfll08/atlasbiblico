import React, { useState, useEffect, useCallback } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, ZoomIn, BookOpen, MapPin, Compass } from 'lucide-react';

interface PainIdentificationProps {
  onCtaClick?: () => void;
}

interface MarqueeItem {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  borderColor: string;
  title: string;
  contentSummary: string;
  biblicalContext: string;
  howToUse: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    id: 'preview-1',
    src: '/images/marquee/preview-1.webp',
    fallbackSrc: 'https://i.imgur.com/0zrUyqe.png',
    alt: 'Página 67 do Atlas - Dois Anos em Roma e a Moradia de Paulo',
    borderColor: 'border-[#93C5FD]/70',
    title: 'Dois Anos em Roma — Pregando Sem Impedimento Algum (At 28:31)',
    contentSummary: 'Planta urbana de Roma no século I com o Coliseu, Monte Capitolino, Fórum Romano, Rio Tibre e a moradia alugada de Paulo onde recebia todos com liberdade. Inclui mapa da expansão a partir da capital imperial.',
    biblicalContext: 'O encerramento do livro de Atos dos Apóstolos (Atos 28:30-31), período em que Paulo permaneceu preso em sua própria moradia alugada e escreveu cartas fundamentais como Efésios, Filipenses e Colossenses.',
    howToUse: 'Consulte ao estudar o final de Atos e as epístolas da prisão para visualizar a capital do império e a ousadia apostólica na expansão do Reino de Deus.'
  },
  {
    id: 'preview-2',
    src: '/images/marquee/preview-2.webp',
    fallbackSrc: 'https://i.imgur.com/t0qnGer.jpeg',
    alt: 'Página 03 do Atlas - O Mundo Bíblico em uma Visão Geral',
    borderColor: 'border-[#FDE047]/70',
    title: 'O Mundo Bíblico em uma Visão — Canaã Entre os Impérios',
    contentSummary: 'Visão geográfica panorâmica mostrando a terra de Canaã como ponte estratégica entre o Mar Mediterrâneo, o Egito (Rio Nilo), a Síria, o Mar Vermelho e a Mesopotâmia (Rios Tigre e Eufrates).',
    biblicalContext: 'O cenário territorial de todo o Antigo Testamento — a rota de Abraão (Gn 12), a terra prometida aos patriarcas (Gn 15:18) e a extensão do reino sob Salomão (1Rs 4:21).',
    howToUse: 'O mapa de cabeceira ideal para consultar sempre que iniciar a leitura de qualquer livro histórico ou profético da Bíblia, situando montanhas, mares e impérios vizinhos.'
  },
  {
    id: 'preview-3',
    src: '/images/marquee/preview-3.webp',
    fallbackSrc: 'https://i.imgur.com/Fxs0fo4.jpeg',
    alt: 'Página 26 do Atlas - Jericó e o Caminho do Jordão',
    borderColor: 'border-[#DDD6FE]/70',
    title: 'Jericó e o Caminho do Jordão — Vale, Oásis e Acesso a Jerusalém',
    contentSummary: 'Mapa topográfico mostrando Jericó, o oásis fértil, o Rio Jordão, o Monte das Tentações (Quarantal), o Mar Morto e a íngreme rota da "Subida de Jerusalém" pelo deserto de Judá.',
    biblicalContext: 'Cenário da primeira conquista de Josué na entrada de Canaã (Josué 6), da parábola do Bom Samaritano ("descia um homem de Jerusalém para Jericó"), da cura do cego Bartimeu (Marcos 10) e do encontro de Jesus com Zaqueu (Lucas 19).',
    howToUse: 'Consulte na leitura dos Evangelhos para compreender o esforço físico e o desnível real da subida para a Páscoa em Jerusalém, além de enriquecer aulas de EBD e sermões expositivos.'
  },
  {
    id: 'preview-4',
    src: '/images/marquee/preview-4.webp',
    fallbackSrc: 'https://i.imgur.com/nRM7kss.jpeg',
    alt: 'Página 33 do Atlas - O Caminho para Emaús',
    borderColor: 'border-[#A7F3D0]/70',
    title: 'O Caminho para Emaús — A Aparição no Dia da Ressurreição',
    contentSummary: 'Mapeamento da rota representativa de cerca de 7 a 11 km a oeste de Jerusalém até Emaús, atravessando as colinas da Judeia, vales de Soreque e Elá, e vilarejos como Ain Karem e Quiriate-Jearim.',
    biblicalContext: 'O relato emocionante de Lucas 24:13-35 no próprio dia da ressurreição, quando Jesus se aproxima de dois discípulos desiludidos e lhes explica as Escrituras antes de se revelar ao partir do pão.',
    howToUse: 'Excelente para meditação devocional, estudos de Páscoa e preparação de mensagens sobre o coração aquecido pela Palavra e a presença viva de Cristo ressurreto.'
  },
  {
    id: 'preview-5',
    src: '/images/marquee/preview-5.webp',
    fallbackSrc: 'https://i.imgur.com/wk0hUnc.jpeg',
    alt: 'Página 07 do Atlas - Desertos e Caminhos nas Escrituras',
    borderColor: 'border-[#93C5FD]/70',
    title: 'Desertos e Caminhos — Quando o Caminho Passa Pelo Deserto',
    contentSummary: 'Mapeamento dos desertos de Sur, Pará, Neguebe, Arabá e Judá, conectando o Delta do Nilo à Península do Sinai, Golfo de Ácaba e Canaã. Detalha o papel vital dos poços de água, comboios de caravanas e gargantas rochosas.',
    biblicalContext: 'Os 40 anos de peregrinação no deserto em Êxodo e Números, a fuga de Elias ao Horebe (1Rs 19), os trajetos de Abraão pelo Neguebe (Gn 12-13) e a fuga de José e Maria com o menino Jesus para o Egito (Mt 2:13-15).',
    howToUse: 'Indispensável para entender como a aridez e os pontos de água definiam os acampamentos de Israel, ajudando a compreender textos sobre provisão e perseverança no deserto.'
  },
  {
    id: 'preview-6',
    src: '/images/marquee/preview-6.webp',
    fallbackSrc: 'https://i.imgur.com/cMrOLht.jpeg',
    alt: 'Página 35 do Atlas - O Mar de Tiberíades após a Ressurreição',
    borderColor: 'border-[#FDE047]/70',
    title: 'O Mar de Tiberíades Após a Ressurreição — Pesca, Reencontro e Restauração',
    contentSummary: 'Visão detalhada do Mar da Galileia com cidades litorâneas (Cafarnaum, Genesaré, Magdala, Tiberíades e Tabga), a rota do barco dos apóstolos e o ponto da aparição de Jesus na praia com a fogueira e os peixes.',
    biblicalContext: 'João 21:1-19, quando os discípulos voltam à pescaria e o Senhor ressurreto os orienta a lançar as redes à direita do barco, restaurando a vocação de Pedro com o chamado "Apascenta as minhas ovelhas".',
    howToUse: 'Use ao estudar o Evangelho de João para visualizar a paz e a familiaridade do cenário da Galileia, ideal para ilustrar sermões de restauração espiritual e chamado ministerial.'
  },
  {
    id: 'preview-7',
    src: '/images/marquee/preview-7.webp',
    fallbackSrc: 'https://i.imgur.com/akSXN1x.jpeg',
    alt: 'Página 10 do Atlas - Jerusalém, a Cidade Decisiva',
    borderColor: 'border-[#DDD6FE]/70',
    title: 'Jerusalém — A Cidade no Centro de Acontecimentos Decisivos',
    contentSummary: 'Reconstrução visual em perspectiva artística e topográfica de Jerusalém nas colinas de Judá, evidenciando o Monte do Templo, as muralhas, o Monte das Oliveiras, e os acessos para Belém (ao sul), Betânia e Jericó.',
    biblicalContext: 'O epicentro de toda a história bíblica — da conquista da fortaleza dos jebuseus por Davi (2Sm 5-6) à glória do Templo de Salomão (1Rs 8), reconstruções dos muros com Neemias (Ne 2) e a crucificação e ressurreição de Cristo (Mt 21-28).',
    howToUse: 'A página de maior valor para qualquer leitor da Bíblia: ajuda a compreender imediatamente os relevos, os vales (Cedrom e Hinom) e a relação espacial entre Jerusalém e os vilarejos vizinhos.'
  },
  {
    id: 'preview-8',
    src: '/images/marquee/preview-8.webp',
    fallbackSrc: 'https://i.imgur.com/ufC1u8q.jpeg',
    alt: 'Página 31 do Atlas - Império Persa e o Retorno dos Exilados',
    borderColor: 'border-[#A7F3D0]/70',
    title: 'Império Persa — O Retorno dos Exilados e a Reconstrução de Jerusalém',
    contentSummary: 'Extensão territorial do Império Persa desde o Golfo Pérsico até a Ásia Menor e o Egito, com o trajeto do "Decreto de Ciro (539 a.C.) — Retorno", cidades de Susa, Persépolis e a província de Judá (Yehud). Inclui o Cilindro de Ciro e a reconstrução dos muros.',
    biblicalContext: 'Os livros de 2 Crônicas 36, Esdras, Neemias, Ester e Daniel. O cumprimento da promessa profética do retorno a Jerusalém após 70 anos de cativeiro na Babilônia.',
    howToUse: 'Perfeito para clarear os livros de Esdras e Neemias, entender o contexto do palácio de inverno em Susa no livro de Ester e a organização das províncias persas sob Dario e Artaxerxes.'
  },
  {
    id: 'preview-9',
    src: '/images/marquee/preview-9.webp',
    fallbackSrc: 'https://i.imgur.com/A3abYP3.jpeg',
    alt: 'Página 34 do Atlas - Linha do Tempo dos 5 Grandes Impérios da Bíblia',
    borderColor: 'border-[#93C5FD]/70',
    title: 'Os Grandes Impérios da Bíblia — Linha Cronológica Comparativa',
    contentSummary: 'Quadro cronológico e comparativo com mapas territoriais e monumentos dos 5 impérios que influenciaram as Escrituras: Assíria (c. 900-609 a.C.), Babilônia (626-539 a.C.), Pérsia (539-330 a.C.), Grécia (330-63 a.C.) e Roma (desde 63 a.C.).',
    biblicalContext: 'O cumprimento das visões da estátua e das feras em Daniel (Dn 8 e 2), a queda de Samaria em 2 Reis 17, a destruição de Jerusalém em 2 Reis 25 e o censo de César Augusto no nascimento de Cristo (Lc 2:1-7).',
    howToUse: 'O guia de síntese histórica definitivo para professores e pregadores situarem em qual império cada profeta atuou e como o mundo helenístico e romano preparou a plenitude dos tempos.'
  },
  {
    id: 'preview-10',
    src: '/images/marquee/preview-10.webp',
    fallbackSrc: 'https://i.imgur.com/GjLk1yN.jpeg',
    alt: 'Página 36 do Atlas - Linha do Tempo Bíblica da Criação à Igreja Primitiva',
    borderColor: 'border-[#FDE047]/70',
    title: 'Linha do Tempo Bíblica — Da Criação à Igreja Primitiva',
    contentSummary: 'Infográfico sequencial ilustrado com as 12 eras canônicas da Bíblia: 1 Criação, 2 Patriarcas, 3 Êxodo, 4 Conquista, 5 Juízes, 6 Reino Unido, 7 Reino Dividido, 8 Exílio, 9 Retorno, 10 Período do Segundo Templo, 11 Jesus e 12 Igreja Primitiva.',
    biblicalContext: 'O arco narrativo completo das Escrituras Sagradas, integrando livros poéticos, proféticos e epistolares em suas respectivas épocas históricas.',
    howToUse: 'A página mais indicada para destravar a leitura cronológica da Bíblia, permitindo ao leitor saber de imediato onde se posiciona no fio da história sagrada.'
  },
  {
    id: 'preview-11',
    src: '/images/marquee/preview-11.webp',
    fallbackSrc: 'https://i.imgur.com/b9rPMWF.jpeg',
    alt: 'Página 01 do Volume 3 do Atlas - Os Caminhos de Jesus',
    borderColor: 'border-[#DDD6FE]/70',
    title: 'Os Caminhos de Jesus — Do Nascimento ao Início do Ministério',
    contentSummary: 'Mapa de orientação sequencial numerado dos primeiros passos de Cristo: 1 Belém (nascimento) → 2 Egito (fuga de Herodes) → 3 Nazaré (infância e crescimento) → 4 Jerusalém (visita ao Templo) → 5 Rio Jordão (batismo) → 6 Galileia (início do ministério).',
    biblicalContext: 'Os relatos dos Evangelhos de Mateus 2, Lucas 2 e Marcos 1, conectando o cumprimento profético da linhagem davídica em Belém à profecia do Nazareno e o testemunho de João Batista.',
    howToUse: 'Ideal para abrir durante a leitura dos primeiros capítulos dos quatro Evangelhos e nas celebrações de Natal e início de ano, visualizando a geografia de fé percorrida pela família de Jesus.'
  },
];

// Row distributions
const ROW_1 = MARQUEE_ITEMS;
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

const TRIPLE_ROW_1 = [...ROW_1, ...ROW_1, ...ROW_1];
const TRIPLE_ROW_2 = [...ROW_2, ...ROW_2, ...ROW_2];

export const PainIdentification: React.FC<PainIdentificationProps> = ({ onCtaClick }) => {
  const [selectedItem, setSelectedItem] = useState<MarqueeItem | null>(null);

  // Keyboard navigation & Esc key handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedItem) return;

    if (e.key === 'Escape') {
      setSelectedItem(null);
    } else if (e.key === 'ArrowRight') {
      const currentIndex = MARQUEE_ITEMS.findIndex(item => item.id === selectedItem.id);
      const nextIndex = (currentIndex + 1) % MARQUEE_ITEMS.length;
      setSelectedItem(MARQUEE_ITEMS[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
      const currentIndex = MARQUEE_ITEMS.findIndex(item => item.id === selectedItem.id);
      const prevIndex = (currentIndex - 1 + MARQUEE_ITEMS.length) % MARQUEE_ITEMS.length;
      setSelectedItem(MARQUEE_ITEMS[prevIndex]);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem, handleKeyDown]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = MARQUEE_ITEMS.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % MARQUEE_ITEMS.length;
    setSelectedItem(MARQUEE_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = MARQUEE_ITEMS.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + MARQUEE_ITEMS.length) % MARQUEE_ITEMS.length;
    setSelectedItem(MARQUEE_ITEMS[prevIndex]);
  };

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
            Veja algumas páginas que você vai encontrar no{' '}
            <span className="font-migra italic text-[#E5C158]">Atlas</span>
          </h2>

          {/* Subtítulo */}
          <p className="mt-3.5 mx-auto max-w-2xl text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-[#D1E0E5] text-balance">
            Mapas, rotas, cidades, regiões e referências organizados visualmente para consulta.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#E5C158]/90 font-medium inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
            <ZoomIn className="h-3.5 w-3.5" />
            <span>Clique em qualquer página para ampliar e ver o contexto</span>
          </p>
        </div>

      </div>

      {/* 2. CARROSSEL INFINITO DUPLO COM CLIQUE PARA AMPLIAR */}
      <div className="relative mt-10 sm:mt-14 w-full overflow-hidden select-none">
        
        {/* Laterais com gradiente fade suave para sensação de profundidade infinita */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-[#173A45] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-[#173A45] to-transparent z-10" />

        {/* Linha 1: Move-se continuamente para a esquerda */}
        <div className="py-2 overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6">
            {TRIPLE_ROW_1.map((item, idx) => (
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                key={`row1-${item.id}-${idx}`}
                aria-label={`Ampliar ${item.title}`}
                className={`w-[245px] sm:w-[280px] shrink-0 bg-white rounded-2xl p-1.5 sm:p-2 border-2 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:border-[#12BFA6] hover:shadow-2xl group cursor-pointer text-left relative focus:outline-hidden focus:ring-2 focus:ring-[#E5C158]`}
              >
                <div className="relative aspect-[3/4] w-full rounded-xl bg-[#FAFAF9] border border-black/5 p-1 flex items-center justify-center overflow-hidden">
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
                    className="w-full h-full object-contain rounded-lg select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Badge de Hover Indicativo */}
                  <div className="absolute inset-x-2 bottom-2 bg-[#173B4D]/90 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2 rounded-lg flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    <ZoomIn className="h-3 w-3 text-[#E5C158]" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Linha 2: Move-se continuamente para a direita */}
        <div className="py-2 mt-2 sm:mt-4 overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6">
            {TRIPLE_ROW_2.map((item, idx) => (
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                key={`row2-${item.id}-${idx}`}
                aria-label={`Ampliar ${item.title}`}
                className={`w-[245px] sm:w-[280px] shrink-0 bg-white rounded-2xl p-1.5 sm:p-2 border-2 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:border-[#12BFA6] hover:shadow-2xl group cursor-pointer text-left relative focus:outline-hidden focus:ring-2 focus:ring-[#E5C158]`}
              >
                <div className="relative aspect-[3/4] w-full rounded-xl bg-[#FAFAF9] border border-black/5 p-1 flex items-center justify-center overflow-hidden">
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
                    className="w-full h-full object-contain rounded-lg select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Badge de Hover Indicativo */}
                  <div className="absolute inset-x-2 bottom-2 bg-[#173B4D]/90 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2 rounded-lg flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    <ZoomIn className="h-3 w-3 text-[#E5C158]" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 3. FLUXO DIRETO DE LEITURA */}
      <div className="mt-12 sm:mt-16 mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-white/10 border border-white/20 px-5 sm:px-8 py-3 sm:py-3.5 backdrop-blur-md shadow-lg">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Leia a passagem
          </span>
          <span className="text-[#E5C158] font-bold select-none text-xs sm:text-base">→</span>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Consulte o Atlas
          </span>
          <span className="text-[#E5C158] font-bold select-none text-xs sm:text-base">→</span>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
            Localize os lugares
          </span>
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

      {/* 5. MODAL LIGHTBOX COM AMPLIAÇÃO DA PÁGINA E DESCRIÇÃO CONTEXTUAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-preview-title"
          onClick={() => setSelectedItem(null)}
        >
          {/* Card Container do Modal */}
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0F2833] border-2 border-white/20 shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Top Bar com Navegação e Fechar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/15 bg-[#173A45]">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FDE68A]">
                  <Eye className="h-3.5 w-3.5 text-[#E5C158]" />
                  <span>Prévia do Atlas</span>
                </span>
                <span className="text-xs text-[#D1E0E5]/70 hidden xs:inline">
                  Página ampliada para consulta
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Botões de navegação anterior / próxima */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Página anterior"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próxima página"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Botão fechar */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Fechar ampliação"
                  className="h-8 w-8 rounded-full bg-white/15 hover:bg-rose-500 text-white flex items-center justify-center transition-all ml-1 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Conteúdo com Scroll Interno Fluido */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
              
              {/* Imagem Ampliada com Contorno Elegante */}
              <div className="relative w-full rounded-2xl bg-white p-2.5 sm:p-4 shadow-xl flex items-center justify-center border border-white/20">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={900}
                  height={1200}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onError={(e) => {
                    if (e.currentTarget.src !== selectedItem.fallbackSrc) {
                      e.currentTarget.src = selectedItem.fallbackSrc;
                    }
                  }}
                  className="w-full max-h-[50vh] sm:max-h-[56vh] object-contain rounded-xl select-none"
                />
              </div>

              {/* Bloco de Descrição Explicando o Conteúdo, Contexto e Como Usar */}
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-6 text-left backdrop-blur-xs space-y-4">
                
                {/* Título da Página / Mapa */}
                <div>
                  <h3 
                    id="modal-preview-title"
                    className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-snug"
                  >
                    {selectedItem.title}
                  </h3>
                </div>

                {/* 1. O que você encontra neste mapa */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>O que você vai encontrar nesta página</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#D1E0E5]">
                    {selectedItem.contentSummary}
                  </p>
                </div>

                {/* 2. Contexto Bíblico */}
                <div className="space-y-1 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                    <Compass className="h-3.5 w-3.5" />
                    <span>Contexto dos relatos</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#D1E0E5]">
                    {selectedItem.biblicalContext}
                  </p>
                </div>

                {/* 3. Situação em que você pode usar esse material */}
                <div className="space-y-1 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C158]">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Situação de uso recomendada</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#D1E0E5]">
                    {selectedItem.howToUse}
                  </p>
                </div>

              </div>

              {/* Botão de Ação Direto no Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-[#D1E0E5]/80 text-center sm:text-left">
                  Esta página faz parte da coleção completa com mais de 300 páginas visuais.
                </span>
                {onCtaClick && (
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onCtaClick();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#16A34A] hover:bg-[#15803D] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all shadow-lg shadow-green-950/30 cursor-pointer whitespace-nowrap"
                  >
                    Quero acessar esta e outras páginas
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
