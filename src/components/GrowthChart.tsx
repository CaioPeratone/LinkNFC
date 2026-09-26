import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, DollarSign, Award } from 'lucide-react';
import { GrowthDataPoint } from '../types';

interface GrowthChartProps {
  currentCardsPerDay: number;
  costPerCard: number;
  resalePrice: number;
}

export const GrowthChart: React.FC<GrowthChartProps> = ({
  currentCardsPerDay,
  costPerCard,
  resalePrice,
}) => {
  const [viewMode, setViewMode] = useState<'dailyScale' | 'cumulativeMonths'>('dailyScale');

  // Format currency in BRL
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Generate dynamic data based on volume scale
  const dailyScaleData: GrowthDataPoint[] = [
    { period: '1 placa/dia', placas: 30, investimento: 30 * costPerCard, faturamento: 30 * resalePrice, lucroLiquido: 30 * (resalePrice - costPerCard) },
    { period: '2 placas/dia', placas: 60, investimento: 60 * costPerCard, faturamento: 60 * resalePrice, lucroLiquido: 60 * (resalePrice - costPerCard) },
    { period: '3 placas/dia', placas: 90, investimento: 90 * costPerCard, faturamento: 90 * resalePrice, lucroLiquido: 90 * (resalePrice - costPerCard) },
    { period: '5 placas/dia', placas: 150, investimento: 150 * costPerCard, faturamento: 150 * resalePrice, lucroLiquido: 150 * (resalePrice - costPerCard) },
    { period: '7 placas/dia', placas: 210, investimento: 210 * costPerCard, faturamento: 210 * resalePrice, lucroLiquido: 210 * (resalePrice - costPerCard) },
    { period: '10 placas/dia', placas: 300, investimento: 300 * costPerCard, faturamento: 300 * resalePrice, lucroLiquido: 300 * (resalePrice - costPerCard) },
  ];

  // Cumulative projection over 6 months based on current selected rate with compound expansion
  const monthlyCards = currentCardsPerDay * 30;
  const unitProfit = resalePrice - costPerCard;

  const cumulativeData: GrowthDataPoint[] = [
    { period: 'Mês 1', placas: monthlyCards, investimento: monthlyCards * costPerCard, faturamento: monthlyCards * resalePrice, lucroLiquido: monthlyCards * unitProfit },
    { period: 'Mês 2', placas: Math.round(monthlyCards * 1.3), investimento: Math.round(monthlyCards * 1.3) * costPerCard, faturamento: Math.round(monthlyCards * 1.3) * resalePrice, lucroLiquido: Math.round(monthlyCards * 1.3) * unitProfit },
    { period: 'Mês 3', placas: Math.round(monthlyCards * 1.7), investimento: Math.round(monthlyCards * 1.7) * costPerCard, faturamento: Math.round(monthlyCards * 1.7) * resalePrice, lucroLiquido: Math.round(monthlyCards * 1.7) * unitProfit },
    { period: 'Mês 4', placas: Math.round(monthlyCards * 2.1), investimento: Math.round(monthlyCards * 2.1) * costPerCard, faturamento: Math.round(monthlyCards * 2.1) * resalePrice, lucroLiquido: Math.round(monthlyCards * 2.1) * unitProfit },
    { period: 'Mês 5', placas: Math.round(monthlyCards * 2.6), investimento: Math.round(monthlyCards * 2.6) * costPerCard, faturamento: Math.round(monthlyCards * 2.6) * resalePrice, lucroLiquido: Math.round(monthlyCards * 2.6) * unitProfit },
    { period: 'Mês 6', placas: Math.round(monthlyCards * 3.2), investimento: Math.round(monthlyCards * 3.2) * costPerCard, faturamento: Math.round(monthlyCards * 3.2) * resalePrice, lucroLiquido: Math.round(monthlyCards * 3.2) * unitProfit },
  ];

  const chartData = viewMode === 'dailyScale' ? dailyScaleData : cumulativeData;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0b101e] border border-cyan-500/40 p-3 rounded-xl shadow-2xl text-xs space-y-1 backdrop-blur-md">
          <p className="font-bold text-white mb-1.5 border-b border-slate-700/60 pb-1">{label}</p>
          <p className="text-cyan-300 font-semibold flex items-center justify-between gap-3">
            <span>Faturamento Bruto:</span>
            <span className="font-bold">{formatBRL(payload[0]?.value || 0)}</span>
          </p>
          <p className="text-emerald-400 font-bold flex items-center justify-between gap-3 text-sm">
            <span>Lucro Líquido:</span>
            <span>{formatBRL(payload[1]?.value || 0)}</span>
          </p>
          <p className="text-slate-400 text-[11px] flex items-center justify-between gap-3">
            <span>Placas Vendidas:</span>
            <span>{payload[0]?.payload?.placas} unidades</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="growth-chart-container" className="w-full mt-6 bg-[#080d1a] border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-xl">
      {/* Controls & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            Crescimento Progressivo do Faturamento & Lucro
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare o potencial de escala à medida que você conquista clientes na sua região
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('dailyScale')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              viewMode === 'dailyScale'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Escala por Dia
          </button>
          <button
            type="button"
            onClick={() => setViewMode('cumulativeMonths')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              viewMode === 'cumulativeMonths'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Evolução em 6 Meses
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="w-full h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="faturamentoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00e5ff" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="lucroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="period"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(val) => `R$${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}`}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Faturamento */}
            <Area
              type="monotone"
              dataKey="faturamento"
              stroke="#00e5ff"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#faturamentoGrad)"
              name="Faturamento Bruto"
            />

            {/* Lucro Líquido */}
            <Area
              type="monotone"
              dataKey="lucroLiquido"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#lucroGrad)"
              name="Lucro Líquido"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-3 pt-3 border-t border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-cyan-400 shrink-0" />
          <span className="text-slate-300">Faturamento Bruto (Revenda)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-emerald-400 shrink-0" />
          <span className="text-emerald-400 font-bold">Lucro Líquido no Bolso</span>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center justify-start sm:justify-end gap-1 text-slate-400">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Lucro de <strong>62.5%</strong> por unidade vendida</span>
        </div>
      </div>
    </div>
  );
};
