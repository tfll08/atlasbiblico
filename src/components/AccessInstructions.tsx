import React from 'react';
import { Lock, MailCheck, Smartphone } from 'lucide-react';

export const AccessInstructions: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: Lock,
      title: 'FINALIZE SUA COMPRA',
      description: 'Pagamento 100% seguro e protegido por criptografia de dados.'
    },
    {
      stepNumber: '02',
      icon: MailCheck,
      title: 'RECEBA SEU ACESSO',
      description: 'Após a confirmação do pagamento, você recebe as instruções de acesso no seu email.'
    },
    {
      stepNumber: '03',
      icon: Smartphone,
      title: 'ACESSE ONDE QUISER',
      description: 'Celular, tablet ou imprima'
    }
  ];

  return (
    <section id="como-receber-acesso" className="bg-[#FAF8F5] px-5 py-14 sm:py-20 border-t border-b border-[#EAE5DB] content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
            Passo a passo simples
          </span>
          <h2 className="mt-2.5 font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl text-[#173B4D]">
            COMO VOCÊ RECEBE O ACESSO
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center sm:items-start text-center sm:text-left rounded-2xl bg-white border border-[#EAE5DB] p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Step badge & Icon */}
                <div className="w-full flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#173B4D] border border-[#EAE5DB] shadow-xs">
                    <Icon className="h-6 w-6 text-[#173B4D]" />
                  </div>
                  <span className="font-heading text-2xl font-black text-[#EAE5DB]">
                    {item.stepNumber}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-[#173B4D]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5C6E75]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
