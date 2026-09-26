import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  MessageCircle,
  Eye,
  Layers,
} from 'lucide-react';
import { openWhatsAppDirect } from '../config';

export interface PlateModel {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  fallbackImage?: string;
  badge?: string;
  description: string;
}

/**
 * Modelos de placas exibidos na aba do catálogo.
 * Para adicionar mais modelos:
 * 1. Coloque a imagem na pasta /public/modelos/ (ex: modelo-3.png)
 * 2. Adicione o objeto do modelo abaixo apontando para '/modelos/modelo-3.png'
 */
export const PLATE_MODELS: PlateModel[] = [
  {
    id: 'google-avaliacoes',
    name: 'Google Avaliações',
    subtitle: 'O modelo mais vendido do Brasil',
    category: 'Google 5 Estrelas',
    image: '/modelos/ChatGPT Image Sep 9, 2026, 05_13_49 PM.png',
    fallbackImage: '/modelos/modelo-google.png',
    badge: 'Mais Vendido ⭐',
    description:
      'Design oficial de alto contraste com 5 estrelas em destaque. Acelera avaliações no Google em qualquer comércio físico através de aproximação NFC.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    subtitle: 'Aproximação NFC e QR Code para Chat Direto',
    category: 'Atendimento & Vendas',
    image: '/modelos/modelo-1.png',
    fallbackImage: '/modelos/ChatGPT Image Sep 26, 2026, 05_27_41 PM-1.png',
    badge: 'Alta Demanda 💬',
    description:
      'O cliente apenas encosta o celular na placa e abre a conversa do WhatsApp do comércio na hora, sem precisar salvar o número na agenda.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    subtitle: 'Conquiste seguidores e engajamento no balcão',
    category: 'Redes Sociais',
    image: '/modelos/modelo-2.png',
    fallbackImage: '/modelos/ChatGPT Image Sep 26, 2026, 05_27_46 PM-2.png',
    badge: 'Popular 📸',
    description:
      'Aproximou o celular, abre instantaneamente o perfil da loja no Instagram para seguir, curtir fotos e marcar o comércio.',
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    subtitle: 'Conexão automática instantânea sem digitação',
    category: 'Conectividade',
    image: '/modelos/modelo-3.png',
    fallbackImage: '/modelos/ChatGPT Image Sep 26, 2026, 05_27_51 PM-3.png',
    badge: 'Prático 📶',
    description:
      'O cliente aproxima o smartphone e conecta na rede Wi-Fi do estabelecimento automaticamente, sem precisar perguntar ou digitar senha.',
  },
  {
    id: 'pix',
    name: 'PIX',
    subtitle: 'Recebimento ágil por aproximação e QR Code',
    category: 'Pagamentos',
    image: '/modelos/modelo-4.png',
    fallbackImage: '/modelos/ChatGPT Image Sep 26, 2026, 05_27_53 PM-4.png',
    badge: 'Alta Conversão ⚡',
    description:
      'Agilidade total no fechamento da conta: o cliente aproxima e já cai direto na tela de pagamento PIX com a chave do comércio.',
  },
];

interface NfcCardPreviewProps {
  onOrderClick?: () => void;
}

export const NfcCardPreview: React.FC<NfcCardPreviewProps> = ({ onOrderClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const currentModel = PLATE_MODELS[currentIndex] || PLATE_MODELS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PLATE_MODELS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PLATE_MODELS.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (modelId: string) => {
    setFailedImages((prev) => ({ ...prev, [modelId]: true }));
  };

  const getCurrentImageSrc = (model: PlateModel) => {
    if (failedImages[model.id] && model.fallbackImage) {
      return model.fallbackImage;
    }
    return model.image;
  };

  const handleOrderSpecificModel = () => {
    const msg = `Olá! Gostei muito do ${currentModel.name} da Placa NFC. Gostaria de saber os valores e disponibilidade desse modelo no atacado!`;
    if (onOrderClick) {
      openWhatsAppDirect(msg);
    } else {
      openWhatsAppDirect(msg);
    }
  };

  return (
    <div id="nfc-card-preview-section" className="relative w-full max-w-3xl mx-auto px-2">
      {/* Decorative Glow Background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-emerald-500/15 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative bg-[#0b101f]/95 border-2 border-cyan-500/40 rounded-3xl p-4 sm:p-7 shadow-2xl backdrop-blur-xl">
        {/* Top Header bar with badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Catálogo de Modelos Físicos
            </span>
            {currentModel.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/40 text-amber-300">
                {currentModel.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Modelo {currentIndex + 1} de {PLATE_MODELS.length}</span>
          </div>
        </div>

        {/* Main Model Showcase: Image Preview + Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left / Center: Interactive Plate Display */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[4/5] rounded-2xl border-2 border-cyan-400/60 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(0,210,255,0.3)] overflow-hidden bg-slate-950 group">
              {/* Product Image */}
              <img
                key={currentModel.id}
                src={getCurrentImageSrc(currentModel)}
                alt={currentModel.name}
                onError={() => handleImageError(currentModel.id)}
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Glossy Acrylic Reflection Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Subtle NFC Interactive Radar Pulses */}
              <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex items-center justify-center pointer-events-none z-10">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full border-2 border-cyan-400/80 animate-radar pointer-events-none" />
                  <div className="absolute w-20 h-20 rounded-full border border-cyan-400/40 animate-radar pointer-events-none [animation-delay:0.6s]" />
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 blur-sm animate-pulse pointer-events-none" />
                </div>
              </div>

              {/* Navigation Arrows Floating on Card */}
              {PLATE_MODELS.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Modelo anterior"
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Próximo modelo"
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg active:scale-90 cursor-pointer z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Quick Indicator Dots */}
            {PLATE_MODELS.length > 1 && (
              <div className="flex items-center gap-1.5 mt-3">
                {PLATE_MODELS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Ver modelo ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Model Info, Specs & WhatsApp Button */}
          <div className="md:col-span-6 flex flex-col justify-between text-left space-y-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400">
                {currentModel.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">
                {currentModel.name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                {currentModel.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {currentModel.description}
              </p>
            </div>

            {/* Specification Badges */}
            <div className="space-y-2 py-3 border-y border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acrílico 3mm premium com corte e acabamento a laser</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chip NFC NTAG integrado de alta frequência (iOS e Android)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>QR Code de contingência incluso sem mensalidade</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gravação direta na placa: não desbota e dura anos</span>
              </div>
            </div>

            {/* Action CTA for this model */}
            <div>
              <button
                type="button"
                onClick={handleOrderSpecificModel}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Pedir Este Modelo no WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                💡 Você pode mesclar diferentes modelos (Google, WhatsApp, Instagram, Wi-Fi, PIX) no mesmo lote!
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip (Click to switch model) */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <p className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            Clique nas miniaturas abaixo para alternar os modelos:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {PLATE_MODELS.map((model, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative rounded-xl p-2 border transition-all text-center flex flex-col items-center cursor-pointer ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_15px_rgba(0,229,255,0.3)] scale-[1.02]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-600'
                  }`}
                >
                  <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-slate-950 mb-1.5 relative">
                    <img
                      src={getCurrentImageSrc(model)}
                      alt={model.name}
                      onError={() => handleImageError(model.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[11px] font-bold line-clamp-1 px-1 ${isSelected ? 'text-cyan-300' : 'text-slate-300'}`}>
                    {model.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
