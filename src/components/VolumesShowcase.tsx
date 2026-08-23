import React from 'react';
import { VOLUMES_DATA } from '../data/content';
import { Check } from 'lucide-react';

interface VolumesShowcaseProps {
  onCtaClick?: () => void;
}

const SUMMARY_ITEMS = [
  '+170 páginas visuais',
  'Mapas geográficos e históricos',
  'Rotas e jornadas bíblicas',
  'Cidades e regiões explicadas',
  'Contexto dos acontecimentos',
  'Referências bíblicas para consulta'
];

export const VolumesShowcase: React.FC<VolumesShowcaseProps> = ({ onCtaClick }) => {
  return (
    <section id="o-que-voce-vai-receber" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C158]">
            A coleção
          </span>
          <h2 className="mt-3 mx-auto max-w-4xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-white text-balance break-words">
            Uma coleção para acompanhar você{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              da geografia às grandes jornadas bíblicas
            </span>
          </h2>
        </div>

        {/* 4 Volumes Showcase */}
        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16 lg:space-y-14">
          {VOLUMES_DATA.map((volume, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={volume.id}
                id={`volume-row-${volume.id}`}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 ${
                  isEven ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Book Volume Mockup Image - 3:4 Proportion without cutting */}
                <div className="w-full flex justify-center">
                  <img
                    src={volume.imageSrc}
                    alt={`${volume.badge} - ${volume.title}`}
                    width={750}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    draggable={false}
                    className="w-full max-w-[400px] md:max-w-[370px] lg:max-w-[390px] aspect-[3/4] object-contain rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] bg-white/10 p-3 border border-white/15"
                  />
                </div>

                {/* Book Text Description */}
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C158]">
                    {volume.badge}
                  </span>
                  
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl text-white">
                    {volume.title}
                  </h3>

                  <p className="mt-2.5 text-lg text-[#E0936F] font-migra italic font-normal">
                    {volume.phrase}
                  </p>

                  <p className="mt-3.5 text-base leading-relaxed text-white/85">
                    {volume.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Card Before CTA */}
        <div className="mt-14 sm:mt-16 mx-auto max-w-2xl rounded-2xl bg-white p-6 sm:p-8 border border-[#EAE5DB] shadow-xl text-center text-[#173B4D]">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#173B4D] mb-6">
            Nos 4 volumes principais você encontrará:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            {SUMMARY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 rounded-lg bg-[#FAF8F5] p-3 border border-[#EAE5DB] shadow-2xs">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#173B4D] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-8 sm:px-12 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#173B4D] transition-colors hover:bg-white/90 shadow-md cursor-pointer"
            >
              Quero garantir os 4 volumes completos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

