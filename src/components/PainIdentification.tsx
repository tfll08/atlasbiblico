import React from 'react';
import { Compass, MapPin, BookOpen, Eye } from 'lucide-react';

interface PainIdentificationProps {
  onCtaClick?: () => void;
}

export const PainIdentification: React.FC<PainIdentificationProps> = ({ onCtaClick }) => {
  const painPoints = [
    {
      id: 'pain-1',
      title: 'Entenda melhor o contexto das passagens',
      icon: BookOpen,
    },
    {
      id: 'pain-2',
      title: 'Visualize lugares, rotas e regiões bíblicas',
      icon: MapPin,
    },
    {
      id: 'pain-3',
      title: 'Use como apoio em estudos, aulas e pregações',
      icon: Compass,
    },
    {
      id: 'pain-4',
      title: 'Acompanhe os acontecimentos com mais clareza',
      icon: Eye,
    },
  ];

  return (
    <section id="contexto-e-lugares" className="bg-white px-5 py-16 sm:py-24 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header with Reflection & Identification */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
            Compreensão e Contexto
          </span>

          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-[#173B4D] text-balance break-words">
            Você já leu uma passagem da Bíblia e ficou tentando imaginar{' '}
            <span className="font-normal normal-case text-terracotta font-migra italic inline sm:inline-block">
              onde tudo aquilo aconteceu?
            </span>
          </h2>

          <div className="mt-6 mx-auto max-w-3xl space-y-4 text-base sm:text-lg leading-relaxed text-[#5C6E75] text-balance">
            <p>
              Jerusalém, Galileia, Egito, Babilônia, Éfeso, as viagens de Paulo... muitos acontecimentos ficam mais fáceis de compreender quando você consegue visualizar os lugares, as distâncias e os caminhos percorridos.
            </p>
            <p className="font-medium text-[#173B4D]">
              O Atlas Bíblico Visual foi criado para ajudar você a enxergar esse contexto de forma clara, organizada e visual.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`pain-card-${card.id}`}
                className="rounded-2xl bg-[#FAF8F5] p-5 sm:p-6 border border-[#EAE5DB] shadow-xs flex flex-col items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-white flex items-center justify-center text-terracotta shadow-2xs border border-[#EAE5DB]">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#173B4D] leading-snug">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {onCtaClick && (
          <div className="mt-12 sm:mt-14 flex justify-center">
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
