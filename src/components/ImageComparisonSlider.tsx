import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Antes',
  afterAlt = 'Depois',
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  defaultPosition = 50,
}) => {
  const [position, setPosition] = useState<number>(defaultPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [beforeSrc, setBeforeSrc] = useState<string>(beforeImage);
  const [afterSrc, setAfterSrc] = useState<string>(afterImage);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBeforeSrc(beforeImage);
  }, [beforeImage]);

  useEffect(() => {
    setAfterSrc(afterImage);
  }, [afterImage]);

  // Pre-decode both images into GPU memory immediately for instant render & smooth scrubbing
  useEffect(() => {
    const img1 = new Image();
    img1.src = beforeSrc;
    if ('decode' in img1) {
      img1.decode().catch(() => {});
    }

    const img2 = new Image();
    img2.src = afterSrc;
    if ('decode' in img2) {
      img2.decode().catch(() => {});
    }
  }, [beforeSrc, afterSrc]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      setPosition(0);
    } else if (e.key === 'End') {
      setPosition(100);
    }
  };

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* Interactive Comparison Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Comparar antes e depois"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/20 bg-white/10 p-1.5 sm:p-2.5 shadow-2xl backdrop-blur-xs cursor-ew-resize touch-none focus:outline-none focus:ring-2 focus:ring-[#E5C158]"
      >
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Base Layer: AFTER (Direita / Com o Atlas) */}
          <img
            src={afterSrc}
            alt={afterAlt}
            width={1200}
            height={1697}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            draggable={false}
            onError={() => {
              if (afterSrc !== 'https://i.imgur.com/GXIy7Ky.png') {
                setAfterSrc('https://i.imgur.com/GXIy7Ky.png');
              }
            }}
            className="block w-full h-auto object-cover select-none pointer-events-none filter drop-shadow-md"
          />

          {/* Top Layer: BEFORE (Esquerda / Antes) clipped dynamically */}
          <div
            className="absolute inset-0 overflow-hidden select-none pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={beforeSrc}
              alt={beforeAlt}
              width={1200}
              height={1662}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              draggable={false}
              onError={() => {
                if (beforeSrc !== 'https://i.imgur.com/M3cRDXh.png') {
                  setBeforeSrc('https://i.imgur.com/M3cRDXh.png');
                }
              }}
              className="block w-full h-full object-cover select-none pointer-events-none filter drop-shadow-md"
            />
          </div>

          {/* Badges */}
          {beforeLabel && (
            <div
              className={`absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/65 text-white/90 backdrop-blur-sm border border-white/20 pointer-events-none transition-opacity duration-200 ${
                position < 10 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {beforeLabel}
            </div>
          )}

          {afterLabel && (
            <div
              className={`absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#173B4D]/85 text-[#E5C158] backdrop-blur-sm border border-[#E5C158]/40 pointer-events-none transition-opacity duration-200 ${
                position > 90 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {afterLabel}
            </div>
          )}

          {/* Vertical Divider Line with Pinça / Grabber */}
          <div
            className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-[#FAF8F5] shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            {/* Grabber Handle ("Pinça") */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#173A45] shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-2 border-[#E5C158] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-0.5 text-[#173A45]">
                {/* Left chevron */}
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current -mr-0.5" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
                {/* Center vertical grip bars */}
                <div className="flex gap-0.5 px-0.5">
                  <div className="w-0.5 h-3 sm:h-3.5 bg-[#173A45]/40 rounded-full" />
                  <div className="w-0.5 h-3 sm:h-3.5 bg-[#173A45]/40 rounded-full" />
                </div>
                {/* Right chevron */}
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current -ml-0.5" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Helper text below slider */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#D1E0E5]">
        <span className="text-[#E5C158]">⟵</span>
        <span>Arraste a pinça para comparar</span>
        <span className="text-[#E5C158]">⟶</span>
      </div>
    </div>
  );
};
