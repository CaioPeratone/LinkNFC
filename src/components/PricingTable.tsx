import React from 'react';
import {
  Tag,
  Check,
  ArrowRight,
  Flame,
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';
import { openWhatsAppDirect } from '../config';

interface PricingTierItem {
  id: string;
  qtyLabel: string;
  unitPrice: number;
  minQty: number;
  isBestOption?: boolean;
  badge?: string;
  totalExample: number;
  resaleRevenue: number;
  profitExample: number;
  features: string[];
  whatsappMessage: string;
}

const PRICING_TIERS: PricingTierItem[] = [
  {
    id: 'tier-1',
    qtyLabel: '1 unidade',
    unitPrice: 69.9,
    minQty: 1,
    isBestOption: false,
    badge: 'Varejo',
    totalExample: 69.9,
    resaleRevenue: 80.0,
    profitExample: 10.1,
    features: [
      '1 Placa LinkNFC (à sua escolha: Google, WhatsApp, Instagram, Wi-Fi ou PIX)',
      'Acrílico Black Piano 3mm corte a laser',
      'Chip NFC NTAG + QR Code embutido',
      'Envio imediato direto do estoque',
    ],
    whatsappMessage:
      'Olá! Quero pedir 1 unidade no Varejo da Placa LinkNFC por R$ 69,90 un. Como realizo o pagamento?',
  },
  {
    id: 'tier-5',
    qtyLabel: '5 Unidades',
    unitPrice: 39.9,
    minQty: 5,
    isBestOption: false,
    badge: 'Primeiras Vendas',
    totalExample: 199.5,
    resaleRevenue: 400.0,
    profitExample: 200.5,
    features: [
      '5 Placas LinkNFC (pode variar os modelos livremente)',
      'Economia de R$ 150 em relação à unidade avulsa',
      'Acrílico Premium com proteção UV',
      'Despacho prioritário em até 24h úteis',
    ],
    whatsappMessage:
      'Olá! Gostaria de pedir o pacote de 5 Unidades de Placas LinkNFC por R$ 39,90 un (Total: R$ 199,50). Pode me passar a chave PIX?',
  },
  {
    id: 'tier-10',
    qtyLabel: '10 Unidades',
    unitPrice: 25.9,
    minQty: 10,
    isBestOption: false,
    badge: 'Mais Procurado',
    totalExample: 259.0,
    resaleRevenue: 800.0,
    profitExample: 541.0,
    features: [
      '10 Placas LinkNFC (pode mesclar modelos à sua escolha)',
      'Margem de lucro de mais de 200%',
      'Recupere todo o investimento vendendo só 4 placas',
      'Envio expresso com rastreio imediato',
    ],
    whatsappMessage:
      'Olá! Quero o lote de 10 Unidades de Placas LinkNFC a R$ 25,90 un (Total: R$ 259,00) para lucrar R$ 541 na minha cidade. Como fecho o pedido?',
  },
  {
    id: 'tier-20',
    qtyLabel: '20 unidades ou mais',
    unitPrice: 19.9,
    minQty: 20,
    isBestOption: true,
    badge: 'Melhor opção',
    totalExample: 398.0,
    resaleRevenue: 1600.0,
    profitExample: 1202.0,
    features: [
      'A partir de 20 placas por apenas R$ 19,90 un',
      'Pode mesclar modelos (ex: 5 de cada ou como preferir!)',
      'MAIOR MARGEM: Lucre R$ 60,10 limpos por placa',
      'Revenda a R$ 80 e fature R$ 1.600 a cada 20 placas',
      'Frete Prioritário + Suporte VIP via WhatsApp',
    ],
    whatsappMessage:
      'Olá! Quero garantir a Melhor Opção: lote de 20 unidades ou mais de Placas LinkNFC pelo valor de R$ 19,90 un. Por favor, envie os dados para pagamento.',
  },
];

export const PricingTable: React.FC = () => {
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  return (
    <section id="tabela-de-precos" className="relative w-full py-14 px-4 sm:px-6 bg-[#070b16] border-y border-cyan-500/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(0,229,255,0.25)]">
            <Tag className="w-3.5 h-3.5 text-cyan-400" />
            Tabela de Preços Direto de Fábrica
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tabela de Preços por Quantidade
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            Sem intermediários. Quanto maior o seu lote, menor o custo por unidade e maior a sua margem líquida ao revender por <strong className="text-cyan-300 font-bold">R$ 80,00</strong>.
          </p>

          {/* Model Variety Callout */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 shadow-lg max-w-2xl mx-auto">
            <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400 inline" />
              Varie as quantidades livremente:
            </span>
            <span>No pacote de 20 peças, por exemplo, você pode pedir 5 de cada (Google, WhatsApp, Instagram, Wi-Fi, PIX) ou qualquer combinação sem custo extra!</span>
          </div>
        </div>

        {/* 1. VISUAL TIERS CARDS (Responsive & clean on mobile and desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                tier.isBestOption
                  ? 'bg-gradient-to-b from-[#0e2428] via-[#091720] to-[#070d18] border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)] lg:-translate-y-2'
                  : 'bg-[#0b101f] border border-slate-800 hover:border-cyan-500/50 shadow-xl'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 ${
                    tier.isBestOption
                      ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                      : 'bg-slate-800 border border-slate-700 text-cyan-300'
                  }`}
                >
                  {tier.isBestOption && <Flame className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />}
                  {tier.badge}
                </span>
              </div>

              <div>
                <div className="mt-2 text-center pb-4 border-b border-slate-800/80">
                  <h3 className="text-base sm:text-lg font-black text-white">{tier.qtyLabel}</h3>
                  <div className="mt-2.5 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      R$ {tier.unitPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-slate-400 font-bold uppercase">/ un</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Total: <strong className="text-slate-200">{formatPrice(tier.totalExample)}</strong>
                  </p>
                </div>

                {/* Profit highlight */}
                <div className="py-4 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Revenda a R$ 80/un:</span>
                    <span className="font-bold text-slate-200">{formatPrice(tier.resaleRevenue)}</span>
                  </div>
                  <div
                    className={`p-2.5 rounded-xl border flex justify-between items-center ${
                      tier.isBestOption
                        ? 'bg-emerald-950/60 border-emerald-400/60'
                        : 'bg-slate-900/90 border-slate-800'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-emerald-300 uppercase">Seu Lucro Líquido:</span>
                    <span className="text-base font-black text-emerald-400">
                      {formatPrice(tier.profitExample)}
                    </span>
                  </div>
                </div>

                {/* Included features */}
                <ul className="space-y-2 py-3 text-xs text-slate-300 border-t border-slate-800/80">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <button
                  type="button"
                  onClick={() => openWhatsAppDirect(tier.whatsappMessage)}
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 ${
                    tier.isBestOption
                      ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:brightness-110'
                      : 'bg-cyan-950/70 hover:bg-cyan-900/90 border border-cyan-500/40 text-cyan-200 hover:border-cyan-400'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Pedir no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 flex-wrap text-center">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-cyan-400" />
            Envio Imediato para todo o Brasil
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Acrílico 3mm + Chip NFC NTAG Testado
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Negocie direto pelo WhatsApp oficial
          </span>
        </div>
      </div>
    </section>
  );
};
