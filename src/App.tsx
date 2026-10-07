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

  // Scroll to "Oferta" - robustly optimized for mobile, tablets and desktop
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (!offerElement) return;

    const performScroll = (behavior: ScrollBehavior = 'smooth') => {
      const topBanner = document.getElementById('top-announcement-banner');
      const bannerHeight = topBanner ? topBanner.offsetHeight : 0;
      const rect = offerElement.getBoundingClientRect();
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      // Offset so the offer badge and headline have clean top breathing room
      const targetY = currentScrollY + rect.top - bannerHeight - 12;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior,
      });
    };

    // 1. Initial smooth scroll
    performScroll('smooth');

    // 2. Mobile resilience & dynamic layout stabilization checks
    // On mobile browsers, viewport shifts or dynamic address bar show/hide
    // can interrupt smooth scrolls or stop before the true destination.
    // Check at progressive intervals to guarantee precise arrival at #oferta.
    const checkpoints = [350, 700, 1100];
    checkpoints.forEach((delay, idx) => {
      setTimeout(() => {
        const topBanner = document.getElementById('top-announcement-banner');
        const bannerHeight = topBanner ? topBanner.offsetHeight : 0;
        const rect = offerElement.getBoundingClientRect();
        const expectedTop = bannerHeight + 12;
        // If still off-target by more than 40px
        if (Math.abs(rect.top - expectedTop) > 40) {
          performScroll(idx === checkpoints.length - 1 ? 'auto' : 'smooth');
        }
      }, delay);
    });
  };

  const handleOpenDirectCheckout = () => {
    let url = 'https://pagamento.projetoreino.com/checkout/212527976:1';
    if (typeof window !== 'undefined' && window.location.search) {
      try {
        const u = new URL(url);
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach((value, key) => {
          u.searchParams.set(key, value);
        });
        url = u.toString();
      } catch {
        // fallback
      }
    }
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white text-[#173B4D] font-sans flex flex-col">
      {/* Faixa no topo da página */}
      <TopBanner />

      <main className="flex-1 w-full">
        {/* 1. HERO (Branco) - Leva à oferta */}
        <Hero onCtaClick={handleScrollToOffer} />

        {/* 2. COMPREENSÃO E CONTEXTO - MAPA COM SETAS (Azul) - Leva à oferta */}
        <PainIdentification onCtaClick={handleScrollToOffer} />

        {/* 3. VEJA O QUE VOCÊ VAI ENCONTRAR NO ATLAS - VÍDEO + BENEFÍCIOS (Branco) - Leva à oferta */}
        <InsideAtlasPreview onCtaClick={handleScrollToOffer} />

        {/* 4. COLEÇÃO COM OS 4 VOLUMES (Azul) - Leva à oferta */}
        <VolumesShowcase onCtaClick={handleScrollToOffer} />

        {/* 5. BÔNUS COMPLEMENTARES + PRESENTE SURPRESA (Branco) - Leva à oferta */}
        <ComplementaryGuides onCtaClick={handleScrollToOffer} />

        {/* 6. DEPOIMENTOS EM CARROSSEL (Azul) - Leva à oferta */}
        <Testimonials onCtaClick={handleScrollToOffer} />

        {/* 7. OFERTA COMPLETA (Branco) - Checkout direto */}
        <OfferSection />

        {/* 8. GARANTIA INCONDICIONAL DE 7 DIAS (Azul) - Leva à oferta */}
        <Warranty onCtaClick={handleScrollToOffer} />

        {/* 9. COMO VOCÊ RECEBE O ACESSO (Branco) */}
        <AccessInstructions />

        {/* 10. PERGUNTAS FREQUENTES (Azul) - Checkout direto */}
        <FaqSection onCtaClick={handleOpenDirectCheckout} />
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
