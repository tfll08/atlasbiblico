import React, { useState, useEffect, lazy, Suspense } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { PainIdentification } from './components/PainIdentification';
import { InsideAtlasPreview } from './components/InsideAtlasPreview';
import { VolumesShowcase } from './components/VolumesShowcase';
import { ComplementaryGuides } from './components/ComplementaryGuides';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { Warranty } from './components/Warranty';
import { AccessInstructions } from './components/AccessInstructions';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

const LegalModal = lazy(() => import('./components/LegalModal').then(module => ({ default: module.LegalModal })));

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  // Anti-drag and context menu protection specifically for images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === 'IMG' || 
        target?.closest('img') || 
        target?.tagName === 'VIDEO' || 
        target?.closest('video')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === 'IMG' || 
        target?.closest('img') || 
        target?.tagName === 'VIDEO' || 
        target?.closest('video')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // Scroll directly to the video in "Tudo o que você recebe"
  const handleScrollToReceiveVideo = () => {
    const videoElement = document.getElementById('video-colecao') || document.getElementById('tudo-o-que-recebe');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Scroll to "Oferta"
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDirectCheckout = () => {
    window.location.href = 'https://pagamento.projetoreino.com/checkout/212527976:1';
  };

  return (
    <div className="min-h-screen bg-white text-[#173B4D] font-sans flex flex-col">
      {/* Faixa no topo da página */}
      <TopBanner />

      <main className="flex-1 w-full">
        {/* 1. HERO (Branco) */}
        <Hero onCtaClick={handleScrollToReceiveVideo} />

        {/* 2. COMPREENSÃO E CONTEXTO - MAPA COM SETAS (Azul) */}
        <PainIdentification />

        {/* 3. VEJA O QUE VOCÊ VAI ENCONTRAR NO ATLAS - VÍDEO + BENEFÍCIOS (Branco) */}
        <InsideAtlasPreview onCtaClick={handleScrollToOffer} />

        {/* 4. COLEÇÃO COM OS 4 VOLUMES (Azul) */}
        <VolumesShowcase onCtaClick={handleScrollToOffer} />

        {/* 5. BÔNUS COMPLEMENTARES + PRESENTE SURPRESA (Branco) */}
        <ComplementaryGuides onCtaClick={handleScrollToOffer} />

        {/* 6. DEPOIMENTOS EM CARROSSEL (Azul) */}
        <Testimonials onCtaClick={handleScrollToOffer} />

        {/* 7. OFERTA COMPLETA (Branco) */}
        <OfferSection />

        {/* 8. GARANTIA INCONDICIONAL DE 7 DIAS (Azul) */}
        <Warranty onCtaClick={handleScrollToOffer} />

        {/* 9. COMO VOCÊ RECEBE O ACESSO (Branco) */}
        <AccessInstructions />

        {/* 10. PERGUNTAS FREQUENTES (Azul) */}
        <FaqSection onCtaClick={handleScrollToOffer} />
      </main>

      {/* 12. RODAPÉ (Azul Escuro / Petróleo) */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Modals (Lazy Loaded) */}
      <Suspense fallback={null}>
        {legalModalType && (
          <LegalModal
            type={legalModalType}
            onClose={() => setLegalModalType(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
