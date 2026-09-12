import React, { useRef, useState } from 'react';
import { Play, Check } from 'lucide-react';

interface InsideAtlasPreviewProps {
  onCtaClick?: () => void;
}

const BENEFIT_PHRASES = [
  'Encontre os lugares dos acontecimentos bíblicos',
  'Acompanhe jornadas e rotas visualmente',
  'Consulte referências bíblicas na própria página',
  'Use em estudos, aulas e pregações'
];

export const InsideAtlasPreview: React.FC<InsideAtlasPreviewProps> = ({ onCtaClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="veja-por-dentro" className="bg-white px-5 py-16 sm:py-24 text-[#173B4D] overflow-hidden scroll-mt-6 content-visibility-auto">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4932F]">
            VEJA POR DENTRO
          </span>
          <h2 className="mt-3 mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-[#173B4D] text-balance break-words">
            Veja como o Atlas funciona na prática
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5C6E75] sm:text-lg leading-relaxed text-balance">
            Assista ao vídeo e explore algumas das páginas, mapas, rotas e conteúdos que fazem parte do Atlas Bíblico Visual.
          </p>
        </div>

        {/* Video Preview Section */}
        <div id="video-colecao" className="mt-10 sm:mt-12 flex flex-col items-center justify-center scroll-mt-10">
          {/* Invitation to press play */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-4 py-1.5 text-xs font-semibold text-[#B08830] border border-[#EAE5DB] mb-5 shadow-2xs">
            <Play className="h-3 w-3 fill-[#B08830]" />
            <span>Clique no play para assistir</span>
          </div>

          {/* Video Container Frame */}
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] rounded-3xl overflow-hidden border-4 border-[#173B4D]/15 bg-black shadow-2xl transition-all duration-300 hover:border-[#173B4D]/30">
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

        {/* Feature Benefit Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {BENEFIT_PHRASES.map((phrase, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl bg-[#FAF8F5] p-4 border border-[#EAE5DB] text-left shadow-2xs transition-all hover:bg-white hover:shadow-xs"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <span className="text-sm font-medium text-[#173B4D] leading-snug">
                {phrase}
              </span>
            </div>
          ))}
        </div>

        {/* Section CTA Button leading to offer */}
        {onCtaClick && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={onCtaClick}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#173B4D] px-8 sm:px-12 py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#173B4D]/90 shadow-md cursor-pointer"
            >
              quero acessar o atlas completo
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
