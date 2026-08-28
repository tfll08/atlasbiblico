import React, { useState, useEffect, lazy, Suspense } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { InsideAtlasPreview } from './components/InsideAtlasPreview';
import { PainIdentification } from './components/PainIdentification';
import { VolumesShowcase } from './components/VolumesShowcase';
import { Audience } from './components/Audience';
import { EverythingYouReceive } from './components/EverythingYouReceive';
import { ComplementaryGuides } from './components/ComplementaryGuides';
import { OfferSection } from './components/OfferSection';
import { Warranty } from './components/Warranty';
import { AccessInstructions } from './components/AccessInstructions';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(module => ({ default: module.CheckoutModal })));
const LegalModal = lazy(() => import('./components/LegalModal').then(module => ({ default: module.LegalModal })));

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  // Anti-drag and context menu protection specifically for images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === 'IMG' || target?.closest('img')) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === 'IMG' || target?.closest('img')) {
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

  // Scroll to "Tudo o que você recebe" (Hero CTA action)
  const handleHeroCtaClick = () => {
    const receiveElement = document.getElementById('tudo-o-que-recebe');
    if (receiveElement) {
      receiveElement.scrollIntoView({ behavior: 'smooth' });
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
        <Hero onCtaClick={handleHeroCtaClick} />

        {/* 2. VEJA O QUE VOCÊ VAI ENCONTRAR POR DENTRO (Azul) */}
        <InsideAtlasPreview onCtaClick={handleScrollToOffer} />

        {/* 3. NOVA SEÇÃO DE DOR / IDENTIFICAÇÃO (Branco) */}
        <PainIdentification onCtaClick={handleScrollToOffer} />

        {/* 4. SEÇÃO DA COLEÇÃO COM OS 4 VOLUMES (Azul) */}
        <VolumesShowcase onCtaClick={handleScrollToOffer} />

        {/* 5. IDEAL PARA VOCÊ QUE... (Branco, com carrossel enriquecido) */}
        <Audience onCtaClick={handleScrollToOffer} />

        {/* 6. TUDO O QUE VOCÊ RECEBE (Azul, resumo de valor com botão para oferta) */}
        <EverythingYouReceive onCtaClick={handleScrollToOffer} />

        {/* 7. BÔNUS COMPLEMENTARES + PRESENTE SURPRESA (Branco) */}
        <ComplementaryGuides onCtaClick={handleScrollToOffer} />

        {/* 8. OFERTA (Azul com card central destacado) */}
        <OfferSection onCtaClick={handleOpenDirectCheckout} />

        {/* 9. GARANTIA (Branco) */}
        <Warranty onCtaClick={handleScrollToOffer} />

        {/* 10. COMO VOCÊ RECEBE O ACESSO (Azul) */}
        <AccessInstructions />

        {/* 11. FAQ (Branco) */}
        <FaqSection />
      </main>

      {/* 12. RODAPÉ (Azul Escuro / Petróleo) */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Modals (Lazy Loaded) */}
      <Suspense fallback={null}>
        {isCheckoutOpen && (
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        )}

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
