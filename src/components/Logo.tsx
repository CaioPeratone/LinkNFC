import React, { useState } from 'react';
import logoPng from '../assets/images/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = false }) => {
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  return (
    <div id="linknfc-logo-container" className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Visual Logo Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {/* Soft cyan glow aura */}
        <div className="absolute inset-0 bg-cyan-500/25 blur-md rounded-full pointer-events-none" />

        {!useFallbackSvg ? (
          <img
            src={logoPng || "/ChatGPT Image Sep 21, 2026, 09_09_06 PM.png"}
            alt="LinkNFC Logo"
            onError={() => setUseFallbackSvg(true)}
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_12px_rgba(0,210,255,0.7)]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(0,210,255,0.85)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="linkNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="whiteLinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#dbeafe" />
              </linearGradient>
            </defs>

            {/* Chain Link Outer Ring 1 (Cyan Neon) */}
            <rect
              x="20"
              y="36"
              width="34"
              height="22"
              rx="11"
              transform="rotate(-45 37 47)"
              stroke="url(#linkNeonGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_6px_rgba(0,210,255,0.9)]"
            />

            {/* Chain Link Interlocking Segment 2 (White/Ice Blue) */}
            <path
              d="M 46 44 L 56 34 C 62 28 72 28 78 34 C 84 40 84 50 78 56 L 68 66"
              stroke="url(#whiteLinkGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            />

            {/* Radiating NFC Waves */}
            <path
              d="M 64 22 A 12 12 0 0 1 78 36"
              stroke="#00d2ff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 67 14 A 22 22 0 0 1 86 33"
              stroke="#38bdf8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 70 6 A 32 32 0 0 1 94 30"
              stroke="#60a5fa"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Typography: "Link" in White + "NFC" in Electric Cyan/Blue */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight ${textSizes[size]} flex items-baseline`}>
          <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Link</span>
          <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent font-black drop-shadow-[0_0_18px_rgba(0,229,255,0.4)]">
            NFC
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-400/90 mt-0.5">
            Fornecedor Nacional Atacado
          </span>
        )}
      </div>
    </div>
  );
};

