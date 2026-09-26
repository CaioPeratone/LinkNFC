import React from 'react';
import { ShieldCheck, Truck, Zap, PackageCheck, AlertOctagon, Check, X } from 'lucide-react';

export const NoCourseGuarantee: React.FC = () => {
  return (
    <section id="fornecedor-nacional" className="relative w-full py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Anti-Curso Disclaimer Box */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/40 via-[#101422] to-cyan-950/30 border-2 border-red-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Neon Accent Glow */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <AlertOctagon className="w-8 h-8 text-red-400 animate-pulse" />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-black uppercase tracking-wider">
                Aviso Importante • Transparência Total
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                NÃO VENDEMOS CURSO, EBOOK OU PROMESSA MILAGROSA.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Somos <strong className="text-cyan-400 font-bold">fornecedores nacionais diretos</strong> de placas
                físicas de acrílico com chip NFC homologado. Você adquire o produto no atacado com{' '}
                <strong className="text-white">pronta entrega e envio imediato</strong>, coloca na mão dos lojistas da
                sua cidade e fica com <strong className="text-emerald-400 font-bold">100% do lucro da revenda</strong>.
              </p>
            </div>
          </div>

          {/* Comparison Cards: O Que Fazemos vs O Que os Vendedores de Curso Fazem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
            {/* Outros (Cursos) */}
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/40 text-xs space-y-2">
              <p className="font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <X className="w-4 h-4 text-red-400" /> Outros na Internet
              </p>
              <ul className="space-y-1.5 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0 font-bold">✕</span>
                  <span>Cobram R$ 500 a R$ 2.000 por cursos cheios de enrolação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0 font-bold">✕</span>
                  <span>Ensinam a importar da China e você espera 40 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0 font-bold">✕</span>
                  <span>Risco de tributação na alfândega e produtos sem padrão</span>
                </li>
              </ul>
            </div>

            {/* LinkNFC (Fornecedor Real) */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-xs space-y-2 shadow-[0_0_15px_rgba(0,210,255,0.1)]">
              <p className="font-extrabold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cyan-400" /> Na LinkNFC (Seu Fornecedor)
              </p>
              <ul className="space-y-1.5 text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 shrink-0 font-bold">✓</span>
                  <span><strong>Zero enrolação:</strong> você investe somente nas placas físicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 shrink-0 font-bold">✓</span>
                  <span><strong>Estoque 100% no Brasil:</strong> envio no mesmo dia útil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 shrink-0 font-bold">✓</span>
                  <span>Acrílico Black Piano cortado a laser com chip NFC NTAG de alta resposta</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-300 font-semibold">Envio Imediato</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-2">
              <PackageCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300 font-semibold">Pronta Entrega</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-slate-300 font-semibold">Garantia Nacional</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-300 font-semibold">Lucro Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
