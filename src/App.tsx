import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { InsideAtlasPreview } from './components/InsideAtlasPreview';
import { StudyTransformation } from './components/StudyTransformation';
import { Audience } from './components/Audience';
import { VolumesShowcase } from './components/VolumesShowcase';
import { ComplementaryGuides } from './components/ComplementaryGuides';
import { OfferSection } from './components/OfferSection';
import { Warranty } from './components/Warranty';
import { AccessInstructions } from './components/AccessInstructions';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModal';

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

  const handleCtaClick = () => {
    // Scroll smoothly to the offer section
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDirectCheckout = () => {
    window.location.href = 'https://checkout.wiven.com.br/checkout/cmsz6ir2e00p201n3aurjcges?offer=5LL8K7X';
  };

  return (
    <div className="min-h-screen bg-white text-[#173B4D] font-sans flex flex-col">
      {/* Faixa no topo da página (não fixa) */}
      <TopBanner />

      <main className="flex-1 w-full">
        {/* 1. HERO */}
        <Hero onCtaClick={handleCtaClick} />

        {/* 2. VEJA O ATLAS POR DENTRO */}
        <InsideAtlasPreview onCtaClick={handleCtaClick} />

        {/* 3. O QUE MUDA NO SEU ESTUDO */}
        <StudyTransformation onCtaClick={handleCtaClick} />

        {/* 4. PRA QUEM FOI CRIADO */}
        <Audience onCtaClick={handleCtaClick} />

        {/* 5. O QUE VOCÊ VAI RECEBER (A COLEÇÃO) */}
        <VolumesShowcase onCtaClick={handleCtaClick} />

        {/* 6. MATERIAIS COMPLEMENTARES + PRESENTE SURPRESA */}
        <ComplementaryGuides onCtaClick={handleCtaClick} />

        {/* 7. OFERTA */}
        <OfferSection onCtaClick={handleOpenDirectCheckout} />

        {/* 8. GARANTIA */}
        <Warranty onCtaClick={handleCtaClick} />

        {/* 9. COMO VOCÊ RECEBE O ACESSO */}
        <AccessInstructions />

        {/* 10. FAQ EM FORMATO DE SANFONA */}
        <FaqSection />
      </main>

      {/* 11. RODAPÉ */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
