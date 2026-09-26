import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface ResellerFaqProps {
  onWhatsAppClick: () => void;
}

export const ResellerFaq: React.FC<ResellerFaqProps> = ({ onWhatsAppClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'Como configuro o link do Google da empresa na placa?',
      a: 'É extremamente simples e leva menos de 15 segundos! Você usa o aplicativo gratuito "NFC Tools" (disponível para iPhone e Android). Basta copiar o link de avaliação do perfil do Google do comerciante, colar no app e encostar a placa na traseira do seu celular. A gravação é imediata e vitalícia.',
    },
    {
      q: 'O comerciante precisa pagar alguma mensalidade?',
      a: 'NÃO! Esse é o maior argumento de vendas. A placa é 100% física, não usa bateria e não tem aplicativo pago nem taxa mensal. O comerciante paga uma única vez (R$ 80,00 a R$ 120,00) para ter avaliações 5 estrelas para sempre no balcão dele.',
    },
    {
      q: 'Funciona em iPhone e Android?',
      a: 'Sim! Mais de 95% dos smartphones modernos contam com leitor NFC nativo (iPhone 7/XR em diante e linha Android). O cliente só encosta a traseira do celular na placa e a janela de avaliação no Google se abre na hora. E para qualquer telefone antigo, a placa acompanha QR Code auxiliar integrado.',
    },
    {
      q: 'Qual o prazo de despacho do meu pedido?',
      a: 'Nós somos fornecedores nacionais com estoque real a pronta entrega no Brasil! Pedidos confirmados são embalados e despachados em até 24 horas úteis com código de rastreamento imediato.',
    },
    {
      q: 'Por que o lojista compra tão fácil?',
      a: 'Empresas no Google com mais avaliações 5 estrelas aparecem nas primeiras posições das buscas na cidade, atraindo novos clientes todos os dias. O maior problema do lojista é que os clientes têm preguiça de procurar a loja no Google para avaliar. A placa resolve isso em 1 segundo de aproximação.',
    },
    {
      q: 'Vocês vendem curso?',
      a: 'NÃO! Como deixamos claro em todo o site, nós NÃO vendemos curso, mentoria ou grupo VIP. Nós somos indústria/fornecedor de placas. Nosso negócio é colocar placas de alta qualidade no seu endereço a preço de atacado direto de fábrica (até R$: 19,90 un para 20+ peças) para você revender por R$ 80,00 e lucrar.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas-frequentes" className="relative w-full py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Perguntas Frequentes de Revendedores
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Tudo o que você precisa saber antes de fazer seu primeiro pedido
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#0a0f1d]/90 overflow-hidden transition-colors hover:border-cyan-500/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help */}
        <div className="mt-8 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-sm font-bold text-white">Ainda tem alguma dúvida específica?</p>
            <p className="text-xs text-cyan-300">Fale com nosso especialista agora pelo WhatsApp</p>
          </div>
          <button
            type="button"
            onClick={onWhatsAppClick}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
