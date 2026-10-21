import React from 'react';
import { CreditCard, Mail, Smartphone } from 'lucide-react';

export const AccessInstructions: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: CreditCard,
      title: 'Finalize sua compra',
      description: 'Informe o e-mail em que deseja receber as instruções de acesso.'
    },
    {
      stepNumber: '02',
      icon: Mail,
      title: 'Receba as instruções por e-mail',
      description: 'Após a confirmação do pagamento, você recebe os dados para entrar na área de membros.'
    },
    {
      stepNumber: '03',
      icon: Smartphone,
      title: 'Abra e consulte seus materiais',
      description: 'Acesse pelo navegador do celular, tablet ou computador. Se preferir, adicione à tela inicial do celular para abrir como um aplicativo.'
    }
  ];

  return (
    <section id="como-receber-acesso" className="bg-[#173A45] px-5 py-14 sm:py-20 text-white scroll-mt-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
            Como acessar seu Atlas
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-[0.95rem] sm:text-base text-[#D1E0E5] leading-relaxed text-balance">
            Em poucos passos, seus materiais estarão disponíveis para consulta.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl bg-white/10 border border-white/20 p-6 sm:p-7 shadow-xl backdrop-blur-xs text-white transition-all duration-300 hover:bg-white/[0.13] hover:border-white/30 hover:-translate-y-1"
              >
                <div>
                  {/* Step badge & Icon */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#E5C158] border border-white/20 shadow-2xs">
                      <Icon className="h-5 w-5 text-[#E5C158] stroke-[2.2]" />
                    </div>
                    <span className="font-heading text-xl font-black text-[#E5C158]/70">
                      {item.stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#D1E0E5]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
