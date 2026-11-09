import React from 'react';
import { BookOpen, ArrowRight, Smartphone, Download, Sparkles } from 'lucide-react';

interface WhatYouReceiveProps {
  onCtaClick?: () => void;
}

export const WhatYouReceive: React.FC<WhatYouReceiveProps> = ({ onCtaClick }) => {
  const volumes = [
    {
      volume: 'Volume 1',
      title: 'O Mundo da Bíblia',
      description: 'Conheça as cidades, regiões, rios e montanhas que compõem o cenário das histórias bíblicas.',
      badgeColor: 'bg-[#1B4958]'
    },
    {
      volume: 'Volume 2',
      title: 'Os Patriarcas',
      description: 'Acompanhe as jornadas de Abraão, Isaque, Jacó e José, visualizando os lugares por onde passaram.',
      badgeColor: 'bg-[#8C4827]'
    },
    {
      volume: 'Volume 3',
      title: 'Os Caminhos de Jesus',
      description: 'Explore as cidades e regiões dos relatos dos Evangelhos e acompanhe os percursos do ministério de Jesus.',
      badgeColor: 'bg-[#B08830]'
    },
    {
      volume: 'Volume 4',
      title: 'As Viagens de Paulo',
      description: 'Siga as rotas missionárias de Paulo e localize as cidades por onde a mensagem do Evangelho se espalhou.',
      badgeColor: 'bg-[#2B5349]'
    }
  ];

  return (
    <section id="o-que-voce-vai-receber" className="relative px-4 xs:px-5 sm:px-6 py-16 sm:py-24 bg-white text-[#173B4D] border-b border-[#EAE5DB] scroll-mt-6 overflow-hidden">
      {/* Elemento absoluto do quadriculado sutil de fundo (decorativo) */}
      <div 
        className="absolute inset-0 pointer-events-none text-[#173B4D] opacity-[0.04] z-0" 
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C4932F] border border-[#EAE5DB] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#E5C158]" />
            <span>O QUE VOCÊ VAI RECEBER</span>
          </div>

          <h2 className="mt-3.5 mx-auto max-w-4xl font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl sm:leading-tight text-[#173B4D] text-balance break-words">
            4 volumes para acompanhar sua <span className="font-migra italic text-[#C4932F]">leitura da Bíblia</span>
          </h2>

          <p className="mt-3.5 mx-auto max-w-2xl text-[0.95rem] sm:text-base text-[#5C6E75] leading-relaxed text-balance">
            Mapas e explicações visuais organizados por temas para você consultar os lugares e as jornadas presentes nos relatos bíblicos.
          </p>
        </div>

        {/* Layout Principal: No mobile o mockup fica acima da lista (order-1) e as descrições visíveis (order-2); no desktop em duas colunas harmoniosas */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mockup do Produto: No celular acima da lista */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg flex justify-center">
              <img
                src="https://i.imgur.com/3wZ0NlD.png"
                alt="Mockup dos 4 volumes da coleção Atlas Bíblico Visual"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                draggable={false}
                onError={(e) => {
                  if (e.currentTarget.src !== '/images/hero-bundle.webp') {
                    e.currentTarget.src = '/images/hero-bundle.webp';
                  }
                }}
                className="w-full h-auto object-contain select-none filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Lista com os 4 Volumes Descritos: Mantém todas as 4 descrições bem visíveis no mobile e desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {volumes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] p-5 sm:p-6 transition-all duration-300 hover:border-[#D8AC4F]/50 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#173B4D] text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#173B4D] leading-snug">
                      {item.volume} — <span className="text-[#C4932F]">{item.title}</span>
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#5C6E75] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Informação sobre os arquivos em PDF e formatos de leitura */}
        <div className="mt-10 sm:mt-12 mx-auto max-w-3xl rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] p-4 sm:p-5 text-center shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#173B4D]">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-[#C4932F] shrink-0" />
              <Smartphone className="h-4 w-4 text-[#C4932F] shrink-0" />
            </div>
            <span>Todos os volumes em PDF, disponíveis para baixar e consultar no celular, tablet ou computador.</span>
          </div>
        </div>

        {/* Botão de Ação CTA Principal */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={onCtaClick}
            id="receive-cta-btn"
            className="animate-breathe group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#16A34A] px-8 sm:px-12 py-4 sm:py-5 text-center text-sm sm:text-base font-bold tracking-wide uppercase text-white transition-all hover:bg-[#15803D] hover:scale-[1.02] active:scale-[0.99] shadow-xl shadow-green-900/20 cursor-pointer border border-emerald-400/40"
          >
            <span>QUERO ACESSAR O ATLAS COMPLETO</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
