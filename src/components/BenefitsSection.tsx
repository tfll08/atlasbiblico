import React from 'react';
import { MapPin, History, BookOpen, Sparkles } from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick?: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onCtaClick }) => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Compreenda o cenário dos relatos',
      description: 'Veja onde ficam as cidades e regiões mencionadas na Bíblia e como os lugares se relacionam com os acontecimentos da sua leitura.',
      accent: '#C4932F'
    },
    {
      icon: History,
      title: 'Situe os acontecimentos na história',
      description: 'Consulte a linha do tempo e os guias de personagens, profetas e reinos para entender melhor quem viveu em cada período.',
      accent: '#173B4D'
    },
    {
      icon: BookOpen,
      title: 'Consulte enquanto lê',
      description: 'Encontrou um lugar ou uma jornada que não consegue visualizar? Consulte os mapas para acompanhar o texto bíblico com os lugares diante dos olhos.',
      accent: '#2B5349'
    },
    {
      icon: Sparkles,
      title: 'Use mesmo se estiver começando',
      description: 'Você não precisa ter conhecimento avançado nem estudar os quatro volumes em sequência. Consulte os temas conforme avança na sua leitura.',
      accent: '#8C4827'
    }
  ];

  return (
    <section id="beneficios" className="bg-[#FAF8F5] px-4 xs:px-5 sm:px-6 py-16 sm:py-24 text-[#173B4D] border-b border-[#EAE5DB] scroll-mt-6 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C4932F] border border-[#EAE5DB] shadow-2xs">
            <span>BENEFÍCIOS DA COLEÇÃO</span>
          </div>

          <h2 className="mt-3.5 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-[#173B4D] text-balance break-words">
            Uma nova forma de enxergar e compreender as histórias da{' '}
            <span className="font-migra italic text-[#C4932F]">Bíblia</span>
          </h2>
        </div>

        {/* Grade com 4 Cards de Benefícios */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl bg-white border border-[#EAE5DB] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#D8AC4F]/50 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#173B4D] text-[#E5C158] shadow-xs shrink-0">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C4932F]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#173B4D] leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-[0.95rem] leading-relaxed text-[#5C6E75]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Opcional para rolagem até a oferta */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-xl bg-[#173B4D] px-8 sm:px-10 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#173B4D]/90 shadow-md hover:scale-[1.01] cursor-pointer"
            >
              Quero consultar o Atlas durante meus estudos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
