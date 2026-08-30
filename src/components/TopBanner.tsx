import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

export const TopBanner: React.FC = () => {
  return (
    <div id="top-announcement-banner" className="w-full bg-[#C85A32] text-white py-2.5 px-4 text-center">
      <div className="mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#F5E6D3]" />
        <span>+300 páginas visuais de mapas, personagens, profetas e contextos bíblicos</span>
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#F5E6D3]" />
      </div>
    </div>
  );
};
