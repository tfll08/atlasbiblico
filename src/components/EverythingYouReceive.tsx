import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  Layers, 
  Map, 
  Users, 
  GraduationCap, 
  Smartphone,
  ArrowRight,
  Sparkles,
  Play
} from 'lucide-react';

interface EverythingYouReceiveProps {
  onCtaClick?: () => void;
}

export const EverythingYouReceive: React.FC<EverythingYouReceiveProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

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
            Veja por dentro uma coleção completa de mapas, jornadas, personagens e contextos bíblicos, organizada para facilitar seu estudo.
          </p>
        </div>

        {/* Video Preview Section replacing the static mockup */}
        <div id="video-colecao" className="mt-10 sm:mt-12 flex flex-col items-center justify-center scroll-mt-10">
          {/* Invitation to press play */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E5C158]/15 px-4 py-1.5 text-xs font-semibold text-[#E5C158] border border-[#E5C158]/30 mb-5 shadow-xs">
            <Play className="h-3 w-3 fill-[#E5C158]" />
            <span>Clique no play para assistir</span>
          </div>

          {/* Video Container Frame */}
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-3xl overflow-hidden border-4 border-white/20 bg-black shadow-2xl transition-all duration-300 hover:border-white/35">
            <video
              ref={videoRef}
              src="https://i.imgur.com/bs5WKaq.mp4"
              poster="/video-preview-thumb.jpg"
              preload="metadata"
              playsInline
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full aspect-[9/16] object-cover block select-none"
            />

            {/* Custom interactive play overlay when paused */}
            {!isPlaying && (
              <div 
                onClick={handlePlayClick}
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/25 z-10 p-4"
                title="Clique no play para assistir"
              >
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#E5C158] text-[#173A45] flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 active:scale-95 pl-1">
                  <Play className="h-7 w-7 sm:h-9 sm:w-9 fill-[#173A45]" />
                </div>
                <span className="mt-4 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-xs text-xs sm:text-sm font-semibold text-white tracking-wide border border-white/25 shadow-md text-center">
                  Clique no play para assistir
                </span>
              </div>
            )}
          </div>
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
