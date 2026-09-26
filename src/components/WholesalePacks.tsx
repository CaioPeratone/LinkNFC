import React from 'react';
import { Check, ArrowRight, Sparkles, Flame, Shield, Truck, MessageCircle } from 'lucide-react';
import { WholesaleTier } from '../types';

interface WholesalePacksProps {
  onSelectTier: (tier: WholesaleTier) => void;
}

export const WholesalePacks: React.FC<WholesalePacksProps> = ({ onSelectTier }) => {
  const tiers: WholesaleTier[] = [
    {
      id: 'kit-1',
      name: '1 unidade',
      badge: 'Varejo',
      cardCount: 1,
      unitPrice: 69.9,
      suggestedResale: 80,
      estimatedProfit: 10.1,
      highlight: false,
      whatsappMessage:
        'Olá! Gostaria de pedir 1 unidade no Varejo da Placa LinkNFC por R$ 69,90 un. Como posso realizar o pagamento?',
    },
    {
      id: 'kit-5',
      name: '5 Unidades',
      badge: 'Iniciante',
      cardCount: 5,
      unitPrice: 39.9,
      suggestedResale: 80,
      estimatedProfit: 200.5,
      highlight: false,
      whatsappMessage:
        'Olá! Gostaria de pedir o lote de 5 Unidades de Placas LinkNFC a R$ 39,90 un (Total: R$ 199,50). Pode me enviar as informações de envio?',
    },
    {
      id: 'kit-10',
      name: '10 Unidades',
      badge: 'Mais Vendido',
      cardCount: 10,
      unitPrice: 25.9,
      suggestedResale: 80,
      estimatedProfit: 541,
      highlight: false,
      freeShipping: false,
      whatsappMessage:
        'Olá! Quero pedir o pacote de 10 Unidades de Placas LinkNFC a R$ 25,90 un (Total: R$ 259,00) para lucrar R$ 541 na minha cidade. Como fecho o pedido?',
    },
    {
      id: 'kit-20',
      name: '20 unidades ou mais',
      badge: 'Melhor opção',
      cardCount: 20,
      unitPrice: 19.9,
      suggestedResale: 80,
      estimatedProfit: 1202,
      highlight: true,
      freeShipping: true,
      bonusGift: 'Frete Prioritário + Suporte VIP',
      whatsappMessage:
        'Olá! Quero garantir a Melhor Opção: lote de 20 unidades ou mais de Placas LinkNFC por R$ 19,90 un! Quero escolher modelos variados. Por favor, me envie a chave PIX e detalhes para despacho imediato.',
    },
  ];

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  return (
    <section id="lotes-atacado" className="relative w-full py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Lotes a Pronta Entrega
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Escolha Seu Lote no Atacado por{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              até R$: 19,90 a Placa
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Preço fechado de fornecedor direto. Sem intermediários, sem taxas escondidas e com despacho em até 24 horas.
          </p>

          {/* Model variety highlight */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 shadow-lg max-w-2xl mx-auto">
            <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400 inline" />
              Liberdade total de modelos:
            </span>
            <span>Você pode variar as quantidades! Ex: no lote de 20 peças, peça 5 de cada ou como preferir.</span>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tiers.map((tier) => {
            const totalCost = tier.cardCount * tier.unitPrice;
            const totalRevenue = tier.cardCount * tier.suggestedResale;

            return (
              <div
                key={tier.id}
                id={`tier-${tier.id}`}
                className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#101c36] via-[#0d162a] to-[#080d19] border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.3)] lg:-translate-y-2'
                    : 'bg-[#0a0f1d]/90 border border-slate-800 hover:border-cyan-500/50 shadow-xl'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md whitespace-nowrap ${
                        tier.highlight
                          ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-black'
                          : 'bg-slate-800 border border-slate-700 text-cyan-300'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mt-2 text-center pb-4 border-b border-slate-800/80">
                    <h3 className="text-lg font-black text-white">{tier.name}</h3>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        R$ {tier.unitPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold uppercase">/ un</span>
                    </div>
                    <p className="text-xs text-cyan-400 font-bold mt-1">
                      {tier.cardCount === 1 ? '1 placa para teste' : `${tier.cardCount} placas inclusas`}
                    </p>
                  </div>

                  {/* Financial Overview */}
                  <div className="py-4 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Investimento Total:</span>
                      <span className="font-bold text-slate-200">{formatBRL(totalCost)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Revenda a R$ 80/cada:</span>
                      <span className="font-bold text-white">{formatBRL(totalRevenue)}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex justify-between items-center mt-2">
                      <span className="text-[11px] font-bold text-emerald-300 uppercase">Lucro no Bolso:</span>
                      <span className="text-base font-black text-emerald-400">
                        {formatBRL(tier.estimatedProfit)}
                      </span>
                    </div>
                  </div>

                  {/* Included benefits */}
                  <ul className="space-y-2 py-3 text-xs text-slate-300 border-t border-slate-800/80">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Acrílico Black Piano 3mm corte a laser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Chip NFC NTAG integrado e testado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>QR Code de contingência embutido</span>
                    </li>
                    {tier.freeShipping && (
                      <li className="flex items-center gap-2 text-emerald-300 font-bold">
                        <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Frete Prioritário Grátis</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* WhatsApp Direct Buy Button */}
                <div className="pt-4 border-t border-slate-800/80 mt-2">
                  <button
                    type="button"
                    onClick={() => onSelectTier(tier)}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:brightness-110'
                        : 'bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-200 hover:border-cyan-400'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Compre Pelo WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-1.5">
                    Negocie direto com nosso consultor
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
