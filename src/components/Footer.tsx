import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full bg-[#0E252D] py-12 px-5 text-center text-xs text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4">
        
        {/* Copyright */}
        <p className="font-medium text-white text-xs uppercase tracking-wider">
          Atlas Bíblico Visual © Todos os direitos reservados.
        </p>

        {/* Support Email */}
        <p className="text-xs text-white/70">
          Suporte ao cliente:{' '}
          <a
            href="mailto:sac.inspirahub@gmail.com"
            className="font-medium text-white hover:text-[#E0936F] hover:underline transition-colors"
          >
            sac.inspirahub@gmail.com
          </a>
        </p>

        {/* Legal & Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-white hover:underline cursor-pointer transition-colors"
          >
            Termos de Uso
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-white hover:underline cursor-pointer transition-colors"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenLegal('contact')}
            className="hover:text-white hover:underline cursor-pointer transition-colors"
          >
            Contato
          </button>
        </div>

        {/* Micro-disclaimer */}
        <p className="max-w-xl text-[11px] leading-relaxed text-muted-foreground/70 pt-2">
          Este produto é um material digital de estudo e consulta. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};

