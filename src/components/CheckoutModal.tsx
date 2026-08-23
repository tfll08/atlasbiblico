import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, CreditCard, QrCode, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 h-8 w-8 rounded-full bg-white text-foreground hover:bg-[#FAF8F5] flex items-center justify-center border border-border cursor-pointer shadow-xs transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-primary text-primary-foreground p-6 sm:p-7 relative">
          <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase mb-1">
            <Sparkles className="h-4 w-4" />
            <span>Atlas Bíblico Visual</span>
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
            Finalizar acesso à coleção
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm mt-1">
            4 volumes + 4 guias complementares + presente surpresa
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="h-16 w-16 rounded-full bg-sand text-gold flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-xl text-foreground">
                Pedido Processado com Sucesso!
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                As instruções de acesso ao <strong>Atlas Bíblico Visual</strong> foram enviadas para o e-mail: <br />
                <span className="font-semibold text-foreground">{email}</span>
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm tracking-wide cursor-pointer hover:bg-[#1f4a5f]"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order Summary Box */}
              <div className="bg-sand p-4 rounded-xl border border-border flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground font-medium block">Total do Pedido:</span>
                  <span className="text-sm font-bold text-foreground">Coleção Digital Completa</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-foreground">R$ 47</span>
                  <span className="block text-[10px] text-gold font-bold uppercase tracking-wider">
                    Pagamento Único
                  </span>
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-lg border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-white border-primary text-primary shadow-xs ring-1 ring-primary'
                      : 'bg-sand border-border text-muted-foreground hover:bg-white'
                  }`}
                >
                  <QrCode className="h-4 w-4 text-gold" />
                  <span>PIX (Imediato)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-lg border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-white border-primary text-primary shadow-xs ring-1 ring-primary'
                      : 'bg-sand border-border text-muted-foreground hover:bg-white'
                  }`}
                >
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Seu Melhor E-mail (onde receberá o material)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-[#1f4a5f] text-primary-foreground font-bold text-base tracking-wide transition-all shadow-soft cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>PAGAR R$ 47 E LIBERAR ACESSO</span>
                </button>
              </div>

              {/* Security & Warranty Assurance */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Garantia de 7 Dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5 text-primary" />
                  Pagamento 100% Seguro
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

