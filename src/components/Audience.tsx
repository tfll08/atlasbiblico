import React from 'react';
import { BookOpenCheck, Navigation, Users, Layers } from 'lucide-react';
import { AutoCarousel } from './AutoCarousel';

interface AudienceProps {
  onCtaClick?: () => void;
}

export const Audience: React.FC<AudienceProps> = ({ onCtaClick }) => {
  const audienceCards = [
    {
      id: 'audience-1',
      title: 'Quer aprofundar seus estudos e compreender melhor a Bíblia',
      icon: BookOpenCheck,
    },
    {
      id: 'audience-2',
      title: 'Tem dificuldade para visualizar lugares, rotas e contextos bíblicos',
      icon: Navigation,
    },
    {
      id: 'audience-3',
      title: 'Prepara aulas, estudos bíblicos, pregações ou pequenos grupos',
      icon: Users,
    },
    {
      id: 'audience-4',
      title: 'Quer conectar acontecimentos, personagens e lugares',
      icon: Layers,
    },
  ];

  // Combined rich gallery of unique high-quality previews from the atlas and complementary guides
  const audienceCarouselImages = [
    {
      url: 'https://i.imgur.com/VMfmqDu.png',
      alt: 'Topografia, rotas e mapas bíblicos'
    },
    {
      url: 'https://i.imgur.com/OzOrsrx.png',
      alt: 'Página ilustrada do material de estudo bíblico'
    },
    {
      url: 'https://i.imgur.com/K7rRGqE.png',
      alt: 'Estudo dos caminhos e cidades bíblicas'
    },
    {
      url: 'https://i.imgur.com/Hvej8Ye.png',
      alt: 'Mapa visual e contexto geográfico bíblico'
    },
    {
      url: 'https://i.imgur.com/Rgb6acs.png',
      alt: 'Cenários e regiões do Novo Testamento'
    },
    {
      url: 'https://i.imgur.com/yYEJZPh.png',
      alt: 'Lugares e acontecimentos históricos das Escrituras'
    },
    {
      url: 'https://i.imgur.com/4g8ot0a.png',
      alt: 'Jornadas e eventos das Escrituras'
    },
    {
      url: 'https://i.imgur.com/DC2nvH7.png',
      alt: 'Cenários, rotas e relevos bíblicos'
    },
  ];

  return (
    <section id="pra-quem-foi-criado" className="bg-white px-5 py-16 sm:py-24 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-[#173B4D] text-balance break-words">
            Ideal para{' '}
            <span className="font-normal normal-case text-terracotta font-migra italic inline sm:inline-block">
              você
            </span>{' '}
            que...
          </h2>
        </div>

        {/* Auto Carousel of Audiences and Pages (Above Cards) */}
        <div className="mt-8 sm:mt-10">
          <AutoCarousel images={audienceCarouselImages} />
          <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-muted-foreground/85 font-medium tracking-wide">
            ✦ Amostra de páginas, mapas e materiais visuais inclusos
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`audience-${card.id}`}
                className="rounded-xl sm:rounded-2xl bg-[#FAF8F5] p-4 sm:p-5 border border-[#EAE5DB] shadow-xs flex items-center gap-3.5 sm:gap-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-terracotta shadow-2xs border border-[#EAE5DB]">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#173B4D] leading-snug">
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
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#173B4D] px-8 sm:px-10 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
            >
              Quero enriquecer meus estudos bíblicos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
