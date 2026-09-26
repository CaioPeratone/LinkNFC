import React from 'react';
import {
  MessageCircle,
  TrendingUp,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  Store,
  DollarSign,
  Award,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { NfcCardPreview } from './components/NfcCardPreview';
import { ProfitCalculator } from './components/ProfitCalculator';
import { NoCourseGuarantee } from './components/NoCourseGuarantee';
import { PricingTable } from './components/PricingTable';
import { ResellerFaq } from './components/ResellerFaq';
import { MobileStickyCta } from './components/MobileStickyCta';
import { openWhatsAppDirect, WHATSAPP_CONFIG } from './config';

export default function App() {
  const handleOpenWhatsApp = (customMsg?: string) => {
    openWhatsAppDirect(customMsg);
  };

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black pb-24 sm:pb-12">
      {/* 1. FOCUSED HEADER (100% conversion focused) */}
      <header className="w-full border-b border-cyan-500/20 bg-[#080d19]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo with matching brand colors */}
          <Logo size="md" showSubtitle />

          {/* Right Action: Direct WhatsApp Conversion Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Envio Nacional Imediato</span>
            </div>

            <button
              type="button"
              id="header-whatsapp-btn"
              onClick={() => handleOpenWhatsApp()}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-black text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-97 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Compre Pelo WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 px-4 sm:px-6 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-black uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Fornecedor Nacional de Placas Google NFC para Revenda
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Faça de{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#10b981] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
              R$ 4.500 a R$ 5.000 / Mês
            </span>{' '}
            Vendendo 3 Placas Por Dia
          </h1>

          {/* Subtitle / Anti-Curso Headline from Prompt */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed font-medium">
            O cliente do comércio apenas encosta o celular na placa e a tela de avaliação do Google se abre na hora!{' '}
            <strong className="text-white font-extrabold">NÓS NÃO VENDEMOS CURSO:</strong>{' '}
            somos fornecedores nacionais diretos com estoque a pronta entrega e envio imediato até{' '}
            <span className="text-emerald-400 font-black">R$:19,90 a unidade</span> para você revender por{' '}
            <span className="text-cyan-300 font-black">R$ 80,00</span>.
          </p>

          {/* Direct CTA Buttons */}
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md sm:max-w-lg mx-auto">
            <button
              type="button"
              id="hero-whatsapp-cta"
              onClick={() => handleOpenWhatsApp()}
              className="w-full sm:w-auto flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-97 cursor-pointer transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Compre Pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#tabela-de-precos"
              className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Ver Tabela de Preços</span>
            </a>
          </div>

          {/* Trust bullets */}
          <div className="mt-6 flex items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Até R$: 19,90 no Atacado (20+ un)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Pronta Entrega no Brasil
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Lucro Líquido: até R$ 60,10 / placa
            </span>
          </div>
        </div>

        {/* Physical Product & Simulation Section */}
        <div className="mt-12">
          <NfcCardPreview onOrderClick={() => handleOpenWhatsApp()} />
        </div>
      </section>

      {/* 4. THE NO-COURSE GUARANTEE (Prominent Headline & Reality Check) */}
      <NoCourseGuarantee />

      {/* 5. OFFICIAL PRICING TABLE (1 un, 5 un, 10 un, 20+ un) */}
      <PricingTable />

      {/* 6. HOW THE RESELLER BUSINESS WORKS IN 3 FAST STEPS */}
      <section className="py-12 px-4 sm:px-6 bg-[#070b16] border-y border-slate-800/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 mb-2">
              Passo a Passo Simples
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Como Funciona o Negócio da Revenda LinkNFC
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Sem fórmulas mágicas. Produto físico de alta demanda que todo comércio precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-[#0b101f] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 font-black text-lg flex items-center justify-center mb-4 border border-cyan-500/40">
                1
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2">
                  Peça seu Lote com Envio Imediato
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Você compra seu lote no atacado por até <strong className="text-emerald-400 font-bold">R$: 19,90 a placa</strong> na Melhor Opção.
                  Despachamos em até 24 horas úteis direto do nosso estoque nacional.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>Rastreio dos Correios/Transportadora</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-[#0b101f] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 font-black text-lg flex items-center justify-center mb-4 border border-cyan-500/40">
                2
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2">
                  Apresente nos Comércios da Sua Cidade
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Visite restaurantes, padarias, clínicas, barbearias e lojas. Encoste o celular na placa na frente do
                  dono e veja a reação dele ao abrir o Google instantaneamente.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <Store className="w-4 h-4" />
                <span>Venda visual que se vende sozinha</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0f1a30] to-[#0b101f] border-2 border-emerald-500/50 p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-lg flex items-center justify-center mb-4 border border-emerald-500/40">
                3
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2">
                  Receba R$ 80 no PIX e Lucre até R$ 60,10 Líquido
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  O lojista paga na hora. Vendendo apenas <strong className="text-emerald-400 font-bold">3 placas por dia</strong> (90 no mês),
                  você coloca mais de <strong className="text-emerald-300 font-bold">R$ 5.400,00 limpos</strong> no bolso todos os meses com a Melhor Opção a R$ 19,90 un!
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-bold">
                <DollarSign className="w-4 h-4" />
                <span>Mais de R$ 180,00 de lucro líquido por dia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROFIT CALCULATOR & PROGRESSIVE GROWTH CHART */}
      <ProfitCalculator onWhatsAppOrder={(msg) => handleOpenWhatsApp(msg)} />

      {/* 7. WHY COMMERCE BUYS INSTANTLY */}
      <section className="py-12 px-4 sm:px-6 bg-[#080d19]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-950/50 via-[#0d1424] to-blue-950/40 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                <BadgeCheck className="w-9 h-9" />
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  O Script de 30 Segundos Que Faz o Lojista Comprar na Hora
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed italic border-l-2 border-cyan-400 pl-3">
                  "Sr. João, sabia que o restaurante concorrente está recebendo novos clientes pelo Google porque tem
                  mais avaliações que o senhor? Com esta placa no seu caixa, o cliente só aproxima o celular e te dá 5
                  estrelas em 2 segundos. Sem mensalidade, só R$ 80 uma única vez. Posso configurar agora pra você?"
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80">
                <p className="text-cyan-400 font-black text-base">Zero</p>
                <p className="text-slate-400 text-[11px]">Mensalidades pro Lojista</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80">
                <p className="text-cyan-400 font-black text-base">15 Segundos</p>
                <p className="text-slate-400 text-[11px]">Tempo de Configuração</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80">
                <p className="text-cyan-400 font-black text-base">100% Nativo</p>
                <p className="text-slate-400 text-[11px]">Sem Instalar Aplicativos</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80">
                <p className="text-emerald-400 font-black text-base">Até R$ 60,10/placa</p>
                <p className="text-slate-400 text-[11px]">Seu Lucro Líquido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION FOR RESELLERS */}
      <ResellerFaq onWhatsAppClick={() => handleOpenWhatsApp()} />

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-b from-[#0e172a] to-[#070b14] border-2 border-cyan-400/60 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,210,255,0.25)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />

          <Logo size="lg" className="justify-center mb-4" />

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Pronto Para Faturar Seus Primeiros{' '}
            <span className="text-emerald-400">R$ 5.000 / Mês</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Fale diretamente com nossa equipe comercial no WhatsApp. Tire suas dúvidas, receba fotos reais do estoque e
            garanta seu lote com envio imediato para todo o Brasil.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="footer-whatsapp-cta"
              onClick={() => handleOpenWhatsApp()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 text-slate-950 font-black text-base tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-97 cursor-pointer hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Compre Pelo WhatsApp</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Atendimento Rápido • Estoque Pronta Entrega • Garantia LinkNFC
          </p>
        </div>
      </section>

      {/* 11. CLEAN FOOTER (Strictly no useless links, pure brand focus) */}
      <footer className="mt-auto border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-slate-400">| Fornecedor Nacional Oficial de Placas NFC</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenWhatsApp()}
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {WHATSAPP_CONFIG.displayPhone}</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <p className="text-slate-400">
              © {new Date().getFullYear()} LinkNFC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FIXED STICKY BAR & DESKTOP FLOATING WHATSAPP BUTTON */}
      <MobileStickyCta onWhatsAppClick={() => handleOpenWhatsApp()} />
    </div>
  );
}
