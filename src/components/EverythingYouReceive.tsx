import React from 'react';
import { 
  BookOpen, 
  Layers, 
  Map, 
  Users, 
  GraduationCap, 
  Smartphone,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface EverythingYouReceiveProps {
  onCtaClick?: () => void;
}

export const EverythingYouReceive: React.FC<EverythingYouReceiveProps> = ({ onCtaClick }) => {
  const items = [
    {
      icon: BookOpen,
      title: '4 volumes principais',
      description: 'O Mundo da Bíblia, Os Patriarcas, Os Caminhos de Jesus e As Viagens de Paulo.'
    },
    {
      icon: Map,
      title: 'Mapas dos principais lugares bíblicos',
      description: 'Jerusalém, Galileia, Judeia, Egito, Canaã, Babilônia e outros cenários das Escrituras.'
    },
    {
      icon: Users,
      title: 'Personagens e profetas organizados visualmente',
      description: 'Abraão, José, Moisés, Davi, Elias, Isaías, Jeremias, Paulo e muitos outros.'
    },
    {
      icon: GraduationCap,
      title: 'Material para estudo, ensino e pregação',
      description: 'Ideal para devocionais, aulas, EBD, células, pregações e estudo pessoal.'
    },
    {
      icon: Smartphone,
      title: 'Acesso digital imediato',
      description: 'Acesse pela área de membros no celular, tablet ou computador. Também pode baixar e imprimir.'
    },
    {
      icon: Layers,
      title: '+300 páginas de conteúdo visual',
      description: 'Material organizado para facilitar a compreensão e a consulta durante o estudo bíblico.'
    }
  ];

  return (
    <section id="tudo-o-que-recebe" className="bg-[#173A45] px-5 py-16 sm:py-24 text-white content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-white/20 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>Resumo da Coleção</span>
          </div>

          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug tracking-tight text-white text-balance break-words">
            Tudo o que você recebe com o{' '}
            <span className="font-normal normal-case text-[#E0936F] font-migra italic inline sm:inline-block">
              Atlas Bíblico Visual
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85 text-balance">
            Uma coleção visual e organizada para ajudar você a compreender lugares, jornadas, personagens e contextos da Bíblia com mais clareza.
          </p>
        </div>

        {/* Showcase Image */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-4xl flex justify-center">
          <img
            src="https://i.imgur.com/b9audEu.webp"
            onError={(e) => {
              // Fallback to png if webp direct endpoint fails
              const target = e.currentTarget;
              if (target.src !== 'https://i.imgur.com/b9audEu.png') {
                target.src = 'https://i.imgur.com/b9audEu.png';
              }
            }}
            alt="Tudo o que você recebe com o Atlas Bíblico Visual"
            width={1200}
            height={700}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full max-w-3xl h-auto object-contain select-none filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Feature Grid */}
        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-7 backdrop-blur-xs flex flex-col justify-start transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:border-white/25 shadow-lg"
              >
                <div className="h-11 w-11 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] mb-4 shrink-0">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button to Offer Section */}
        {onCtaClick && (
          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
            <button
              onClick={onCtaClick}
              className="animate-breathe inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white px-8 sm:px-12 py-4 text-center text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#173B4D] transition-all hover:bg-white/95 shadow-xl cursor-pointer"
            >
              <span>Ver Condição Especial da Oferta</span>
              <ArrowRight className="h-5 w-5 text-[#173B4D] stroke-[2.5]" />
            </button>
            <p className="mt-3 text-xs text-white/70 font-medium tracking-wide">
              ✦ Acesso digital imediato e garantia incondicional de 7 dias
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
