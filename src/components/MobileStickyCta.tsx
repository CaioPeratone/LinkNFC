import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
  onWhatsAppClick: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onWhatsAppClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Small threshold to avoid micro-triggers
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      // Quando rolado para baixo após o topo: esconde a barra
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        // Quando rolado para cima ou no topo: exibe novamente
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Bottom Fixed Bar (Sticky on iPhone & Android - hides when scrolling down) */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#070b16]/95 backdrop-blur-lg border-t border-cyan-500/30 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-all duration-300 ease-out transform ${
          isVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-1.5 px-1">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
              Fornecedor Online
            </span>
          </div>
          <span className="text-[10px] font-bold text-cyan-300">
            A partir de R$ 19,90 • Envio Imediato
          </span>
        </div>

        <button
          type="button"
          id="mobile-sticky-whatsapp-btn"
          onClick={onWhatsAppClick}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-97 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950" />
          <span>Compre Pelo WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <button
          type="button"
          id="desktop-floating-whatsapp-btn"
          onClick={onWhatsAppClick}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer"
        >
          <div className="relative">
            <span className="animate-ping absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-white opacity-75" />
            <MessageCircle className="w-6 h-6 fill-slate-950" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase font-extrabold text-emerald-950">Atendimento Imediato</p>
            <p className="text-xs font-black text-slate-950">Compre Pelo WhatsApp</p>
          </div>
        </button>
      </div>
    </>
  );
};
