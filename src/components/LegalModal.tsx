import React from 'react';
import { X, Shield, FileText, Mail } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Termos de Uso',
          icon: FileText,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                Bem-vindo ao <strong>Atlas Bíblico Visual</strong>. Ao adquirir e acessar nosso material digital, você concorda com os seguintes termos:
              </p>
              <h4 className="font-bold text-foreground text-sm">1. Natureza do Produto</h4>
              <p>
                O Atlas Bíblico Visual é um conjunto de materiais 100% digitais (arquivos em alta resolução e formato de fácil visualização em telas e impressão pessoal). Nenhum item físico será enviado por correio.
              </p>
              <h4 className="font-bold text-foreground text-sm">2. Licença de Uso Pessoal</h4>
              <p>
                A compra confere ao adquirente uma licença individual e intransferível para uso pessoal, estudo devocional, preparação de aulas e mensagens. É autorizada a impressão das páginas para uso próprio.
              </p>
              <h4 className="font-bold text-foreground text-sm">3. Garantia Incondicional de 7 Dias</h4>
              <p>
                O comprador possui o prazo legal e contratual de 7 (sete) dias a contar da aprovação da compra para solicitar o cancelamento e reembolso total do valor pago caso julgue que o material não atendeu às suas expectativas.
              </p>
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'Política de Privacidade',
          icon: Shield,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                A sua privacidade é fundamental para nós. Esta política descreve como tratamos seus dados pessoais:
              </p>
              <h4 className="font-bold text-foreground text-sm">1. Coleta de Informações</h4>
              <p>
                Coletamos apenas as informações estritamente necessárias para processar a sua compra e entregar o acesso aos arquivos digitais (nome e endereço de e-mail).
              </p>
              <h4 className="font-bold text-foreground text-sm">2. Segurança de Pagamento</h4>
              <p>
                Todas as transações financeiras são criptografadas e processadas por plataformas de pagamento seguras e certificadas. Não armazenamos informações de cartões de crédito em nossos servidores.
              </p>
              <h4 className="font-bold text-foreground text-sm">3. Uso dos Dados</h4>
              <p>
                Seu e-mail será utilizado unicamente para envio dos links de acesso, atualizações do produto adquirido e comunicações essenciais sobre a sua conta.
              </p>
            </div>
          )
        };
      case 'contact':
        return {
          title: 'Atendimento & Contato',
          icon: Mail,
          text: (
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                Estamos à disposição para esclarecer qualquer dúvida sobre o <strong>Atlas Bíblico Visual</strong> ou auxiliar com o seu acesso:
              </p>
              <div className="bg-sand p-4 rounded-xl border border-border space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>E-mail de Suporte:</span>
                </div>
                <p className="text-foreground font-mono text-sm pl-6">
                  sac.inspirahub@gmail.com
                </p>
                <p className="text-xs text-muted-foreground pl-6">
                  Horário de atendimento: Segunda a Sexta, das 09h às 18h.
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Se você já realizou a compra e não localizou o e-mail de acesso, lembre-se de verificar sua caixa de spam ou lixo eletrônico.
              </p>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;
  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-sand text-foreground hover:bg-white flex items-center justify-center border border-border cursor-pointer transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border">
          <div className="h-8 w-8 rounded-lg bg-sand text-gold flex items-center justify-center">
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">
            {content.title}
          </h3>
        </div>

        {/* Body */}
        <div className="py-2">
          {content.text}
        </div>

        {/* Close footer action */}
        <div className="mt-6 pt-4 border-t border-border text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-[#1f4a5f] cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

