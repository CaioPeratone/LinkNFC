import React, { useState, useId } from 'react';
import confetti from 'canvas-confetti';
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  RotateCcw,
  Zap,
  MessageCircle,
} from 'lucide-react';
import { GrowthChart } from './GrowthChart';

interface ProfitCalculatorProps {
  onWhatsAppOrder: (customMsg?: string) => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onWhatsAppOrder }) => {
  // Calculator state
  const [cardsPerDay, setCardsPerDay] = useState<number>(3);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30);
  const [resalePrice, setResalePrice] = useState<number>(80); // Preço sugerido de revenda
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Accessible unique IDs for slider inputs
  const cardsPerDayInputId = useId();
  const daysPerMonthInputId = useId();
  const resalePriceInputId = useId();

  // Tier pricing aligned with official pricing table
  const totalCardsMonth = cardsPerDay * daysPerMonth;
  const getCostPerCard = (total: number) => {
    if (total >= 20) return 19.9;
    if (total >= 10) return 25.9;
    if (total >= 5) return 39.9;
    return 69.9;
  };
  const costPerCard = getCostPerCard(totalCardsMonth);

  // Calculations
  const grossRevenue = totalCardsMonth * resalePrice;
  const totalCost = totalCardsMonth * costPerCard;
  const netProfit = grossRevenue - totalCost;
  const profitPerCard = resalePrice - costPerCard;
  const margin = Math.round((profitPerCard / resalePrice) * 100);

  // Formatting helpers
  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  const handlePreset = (daily: number, days = 30) => {
    setCardsPerDay(daily);
    setDaysPerMonth(days);
    if (daily >= 3) {
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00e5ff', '#38bdf8', '#10b981', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  const handleOrderWithGoal = () => {
    triggerConfetti();
    const msg = `Olá! Calculei no site da LinkNFC minha meta de vender ${cardsPerDay} placa(s) por dia (${totalCardsMonth} placas/mês) para faturar ${formatBRL(grossRevenue)} com lucro líquido de ${formatBRL(netProfit)}. Quero garantir meu lote a R$ ${costPerCard.toFixed(2).replace('.', ',')} un pela Tabela de Preços!`;
    onWhatsAppOrder(msg);
  };

  return (
    <section id="calculadora-de-lucro" className="relative w-full py-12 px-4 sm:px-6">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-br from-cyan-600/10 via-blue-700/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Simulador de Lucro Líquido
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Quanto Você Vai Colocar no Bolso{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              Todos os Meses?
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            Você adquire cada placa por até <strong className="text-emerald-400">R$: 19,90 un</strong> (na Melhor Opção para 20+ unidades) e revende por{' '}
            <strong className="text-cyan-300">R$ 80,00</strong>. Ajuste os números abaixo e visualize seu ganho
            líquido real.
          </p>
        </div>

        {/* Quick Goal Presets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          <button
            type="button"
            onClick={() => handlePreset(1)}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardsPerDay === 1
                ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                : 'bg-[#0a0f1d]/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
            }`}
          >
            <p className="text-[11px] uppercase tracking-wider font-semibold">Iniciante</p>
            <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">1 Placa / Dia</p>
            <p className="text-xs text-emerald-400 font-bold mt-1">+R$ 1.500/mês</p>
          </button>

          <button
            type="button"
            onClick={() => handlePreset(3)}
            className={`relative p-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardsPerDay === 3
                ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,210,255,0.35)]'
                : 'bg-[#0a0f1d]/80 border-cyan-500/40 text-slate-300 hover:border-cyan-400'
            }`}
          >
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-sm">
              Mais Recomendada
            </span>
            <p className="text-[11px] uppercase tracking-wider font-semibold text-cyan-300 flex items-center justify-center gap-1">
              <Flame className="w-3 h-3 text-cyan-400" /> Meta Principal
            </p>
            <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">3 Placas / Dia</p>
            <p className="text-xs text-emerald-400 font-black mt-1">+R$ 4.500/mês</p>
          </button>

          <button
            type="button"
            onClick={() => handlePreset(5)}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardsPerDay === 5
                ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                : 'bg-[#0a0f1d]/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
            }`}
          >
            <p className="text-[11px] uppercase tracking-wider font-semibold">Dedicado</p>
            <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">5 Placas / Dia</p>
            <p className="text-xs text-emerald-400 font-bold mt-1">+R$ 7.500/mês</p>
          </button>

          <button
            type="button"
            onClick={() => handlePreset(10)}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
              cardsPerDay === 10
                ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                : 'bg-[#0a0f1d]/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
            }`}
          >
            <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-300">Empresário</p>
            <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">10 Placas / Dia</p>
            <p className="text-xs text-emerald-400 font-bold mt-1">+R$ 15.000/mês</p>
          </button>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-[#0b101e]/90 border-2 border-cyan-500/40 rounded-3xl p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Cards Per Day */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={cardsPerDayInputId} className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Placas vendidas por dia:
                  </label>
                  <div className="text-right">
                    <span className="text-2xl font-black text-cyan-300">{cardsPerDay}</span>
                    <span className="text-xs text-slate-400 ml-1">unidades/dia</span>
                  </div>
                </div>
                <input
                  id={cardsPerDayInputId}
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={cardsPerDay}
                  onChange={(e) => setCardsPerDay(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                  <span>1 un/dia (R$ 1.500/mês)</span>
                  <span>3 un/dia (R$ 4.500/mês)</span>
                  <span>10 un/dia (R$ 15.000/mês)</span>
                  <span>15 un/dia</span>
                </div>
              </div>

              {/* Slider 2: Working Days per Month */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={daysPerMonthInputId} className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    Dias trabalhados no mês:
                  </label>
                  <div className="text-right">
                    <span className="text-lg font-bold text-white">{daysPerMonth}</span>
                    <span className="text-xs text-slate-400 ml-1">dias</span>
                  </div>
                </div>
                <input
                  id={daysPerMonthInputId}
                  type="range"
                  min="15"
                  max="30"
                  step="1"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>15 dias</span>
                  <span>22 dias (seg a sex)</span>
                  <span>26 dias (seg a sáb)</span>
                  <span>30 dias</span>
                </div>
              </div>

              {/* Advanced toggle for custom resale price */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  {showAdvanced ? 'Ocultar configurações de preço' : 'Ajustar preço de revenda (Padrão: R$ 80,00)'}
                </button>

                {showAdvanced && (
                  <div className="mt-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor={resalePriceInputId} className="text-xs font-semibold text-slate-300">
                        Preço que você vai cobrar do comerciante:
                      </label>
                      <span className="text-sm font-bold text-emerald-400">{formatBRL(resalePrice)}</span>
                    </div>
                    <input
                      id={resalePriceInputId}
                      type="range"
                      min="50"
                      max="150"
                      step="5"
                      value={resalePrice}
                      onChange={(e) => setResalePrice(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>R$ 50 (baixo)</span>
                      <span>R$ 80 (preço recomendado)</span>
                      <span>R$ 120 (alto valor)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Breakdown Mini-tags */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <p className="text-slate-400 text-[10px]">Custo LinkNFC</p>
                  <p className="font-extrabold text-white text-sm sm:text-base">
                    R$ {costPerCard.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[10px] text-cyan-400">tabela atacado</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <p className="text-slate-400 text-[10px]">Preço de Revenda</p>
                  <p className="font-extrabold text-white text-sm sm:text-base">{formatBRL(resalePrice)}</p>
                  <p className="text-[10px] text-slate-400">ao lojista</p>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                  <p className="text-emerald-300 text-[10px]">Lucro / Placa</p>
                  <p className="font-black text-emerald-400 text-sm sm:text-base">{formatBRL(profitPerCard)}</p>
                  <p className="text-[10px] text-emerald-300 font-semibold">{margin}% margem</p>
                </div>
              </div>
            </div>

            {/* Right Results Dashboard (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0e1628] to-[#0a0e1a] border-2 border-cyan-400/50 rounded-2xl p-6 shadow-2xl flex flex-col justify-between text-center relative overflow-hidden">
              {/* Highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
                  <DollarSign className="w-3 h-3" />
                  Lucro Líquido no Seu Bolso
                </span>

                <div className="my-2">
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">Você receberá livre todo mês:</p>
                  <div className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.5)] my-2">
                    {formatBRL(netProfit)}
                  </div>
                  <p className="text-xs text-slate-400">
                    Baseado em <strong className="text-white">{totalCardsMonth} placas</strong> comercializadas no mês
                  </p>
                </div>

                {/* Sub-metrics */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-left text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Faturamento Bruto Total:</span>
                    <span className="font-bold text-white">{formatBRL(grossRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Investimento em Placas (LinkNFC):</span>
                    <span className="font-semibold text-slate-300">{formatBRL(totalCost)}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-400 font-semibold pt-1 border-t border-slate-800/60">
                    <span>Retorno Líquido Direto:</span>
                    <span className="font-black text-sm">+{((netProfit / totalCost) * 100).toFixed(0)}% de ROI</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  id="calc-whatsapp-cta"
                  onClick={handleOrderWithGoal}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 hover:from-emerald-300 hover:to-cyan-300 shadow-[0_0_25px_rgba(0,229,255,0.4)] active:scale-98 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Compre Pelo WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Pronta entrega • Envio imediato para todo o Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Growth Chart embedded right below the interactive controls */}
          <GrowthChart
            currentCardsPerDay={cardsPerDay}
            costPerCard={costPerCard}
            resalePrice={resalePrice}
          />
        </div>
      </div>
    </section>
  );
};
