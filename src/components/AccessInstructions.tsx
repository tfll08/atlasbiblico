import React from 'react';
import { ShieldCheck, MailCheck, LayoutDashboard, Smartphone } from 'lucide-react';

export const AccessInstructions: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: ShieldCheck,
      title: 'Finalize sua compra',
      description: 'Pagamento seguro e confirmação automática.'
    },
    {
      stepNumber: '02',
      icon: MailCheck,
      title: 'Receba seus dados de acesso',
      description: 'Após a confirmação do pagamento, você recebe as instruções no e-mail cadastrado.'
    },
    {
      stepNumber: '03',
      icon: LayoutDashboard,
      title: 'Entre na área de membros',
      description: 'Todo o conteúdo fica organizado em um só lugar para facilitar sua navegação.'
    },
    {
      stepNumber: '04',
      icon: Smartphone,
      title: 'Acesse onde quiser',
      description: 'Abra no celular, tablet ou computador. Se quiser, também pode baixar e imprimir.'
    }
  ];

  return (
    <section id="como-receber-acesso" className="bg-white px-5 py-14 sm:py-20 text-[#173B4D] content-visibility-auto">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4932F]">
            Praticidade e Segurança
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-[#173B4D]">
            Como você recebe o acesso
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-[#5C6E75] leading-relaxed">
            Passo a passo simples para começar a usar seu material no mesmo dia.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-start rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-[#173B4D]"
              >
                {/* Step badge & Icon */}
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#173B4D] border border-[#EAE5DB] shadow-2xs">
                    <Icon className="h-5 w-5 text-[#C4932F] stroke-[2.2]" />
                  </div>
                  <span className="font-heading text-xl font-black text-[#D8AC4F]/60">
                    {item.stepNumber}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-base font-bold text-[#173B4D] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C6E75]">
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
