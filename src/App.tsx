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

  // Anti-copy, Anti-drag, Anti-save event protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+C, Ctrl+A, Ctrl+U, Ctrl+S, Ctrl+P, F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'u', 's', 'p', 'a'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        return false;
      }
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'c', 'j'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
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
    <div className="min-h-screen bg-white text-[#173B4D] font-sans flex flex-col select-none">
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
