import React from 'react';
import { BookOpen, Printer, Zap } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const items = [
    {
      icon: BookOpen,
      label: 'Baseado na Bíblia',
    },
    {
      icon: Printer,
      label: 'Pronto para imprimir em A4',
    },
    {
      icon: Zap,
      label: 'Acesso vitalício e imediato',
    },
  ];

  return (
    <section
      aria-label="Diferenciais do Atlas Bíblico Visual"
      className="w-full bg-[#8C4827] border-y border-[#E5C158]/25 text-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3.5 sm:py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-x-12 md:gap-x-16">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white"
              >
                <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0 text-[#FDE68A] stroke-[2]" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
