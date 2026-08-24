import React from 'react';
import { BookOpenCheck, Map, BookmarkCheck, GraduationCap } from 'lucide-react';
import { AutoCarousel } from './AutoCarousel';

interface StudyTransformationProps {
  onCtaClick?: () => void;
}

export const StudyTransformation: React.FC<StudyTransformationProps> = ({ onCtaClick }) => {
  const cards = [
    {
      id: 'card-1',
      title: 'Fácil de entender e consultar',
      icon: BookOpenCheck,
    },
    {
      id: 'card-2',
      title: 'Mapas e informações organizados visualmente',
      icon: Map,
    },
    {
      id: 'card-3',
      title: 'Conteúdo com referências bíblicas',
      icon: BookmarkCheck,
    },
    {
      id: 'card-4',
      title: 'Ideal para estudos, aulas e pregações',
      icon: GraduationCap,
    },
  ];

  const carouselImages = [
    {
      url: 'https://i.imgur.com/OzOrsrx.png',
      alt: 'Página ilustrada do material de estudo'
    },
    {
      url: 'https://i.imgur.com/Hvej8Ye.png',
      alt: 'Mapa visual e contexto bíblico'
    },
    {
      url: 'https://i.imgur.com/yYEJZPh.png',
      alt: 'Lugares e acontecimentos bíblicos'
    },
    {
      url: 'https://i.imgur.com/DC2nvH7.png',
      alt: 'Cenários e rotas bíblicas'
    },
  ];

  return (
    <section id="o-que-muda" className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="mx-auto max-w-4xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-foreground text-balance break-words">
            Um material ilustrado para compreender{' '}
            <span className="font-normal normal-case text-terracotta font-migra italic inline sm:inline-block">
              lugares, jornadas e contextos
            </span>{' '}
            da Bíblia
          </h2>
        </div>

        {/* Auto Carousel of Maps & Context (Above Cards) */}
        <div className="mt-8 sm:mt-10">
          <AutoCarousel images={carouselImages} />
          <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-muted-foreground/85 font-medium tracking-wide">
            ✦ Amostra de páginas e mapas ilustrados presentes nos bônus
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`transformation-${card.id}`}
                className="rounded-xl sm:rounded-2xl bg-[#FAF8F5] p-4 sm:p-5 border border-[#EAE5DB] shadow-soft flex items-center gap-3.5 sm:gap-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-[#C6A052] shadow-xs border border-[#EAE5DB]">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-foreground leading-snug">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#173B4D] px-8 sm:px-10 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
            >
              Quero entender a Bíblia com mais clareza
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

