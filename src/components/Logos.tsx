import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  showText?: boolean;
}

/**
 * Premium Vector Brand Logo for "AMALIYA BROW" / "Сама себе бровист"
 * Features a refined monogram "A" intertwined with an elegant, graceful eyebrow curve & golden star accent.
 */
export const AmaliyaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showText = true
}) => {
  const sizeMap = {
    sm: { box: 32, font: 'text-sm', sub: 'text-[9px]' },
    md: { box: 40, font: 'text-base', sub: 'text-[10px]' },
    lg: { box: 52, font: 'text-xl', sub: 'text-xs' },
    xl: { box: 68, font: 'text-2xl', sub: 'text-sm' }
  };

  const { box } = sizeMap[size];

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Vector Monogram Icon */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
        style={{
          width: box,
          height: box,
          background: isLight 
            ? 'linear-gradient(135deg, #FAF7F2 0%, #EFE7DE 100%)' 
            : 'linear-gradient(135deg, #241D17 0%, #15110E 100%)',
          boxShadow: isLight
            ? '0 4px 12px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)'
            : '0 4px 16px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.15)',
          border: isLight ? '1px solid #D8C7B5' : '1px solid #3E3228'
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[72%] h-[72%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldArch" x1="15" y1="20" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6D365" />
              <stop offset="50%" stopColor="#E07A5F" />
              <stop offset="100%" stopColor="#D4A373" />
            </linearGradient>
            <linearGradient id="metalSilver" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#D8C7B5" />
            </linearGradient>
          </defs>

          {/* Elegant Eyebrow Arc sweeping across top */}
          <path
            d="M 18 38 C 34 20, 62 18, 84 32 C 70 30, 42 27, 24 43 Z"
            fill="url(#goldArch)"
          />

          {/* Monogram A with high-fashion serifs */}
          <path
            d="M 50 25 L 30 78 L 39 78 L 45 61 L 57 61 L 62 78 L 71 78 Z M 48 48 L 51 38 L 54 48 Z"
            fill={isLight ? '#1C1714' : 'url(#metalSilver)'}
          />

          {/* Center Crossbar Accent spark */}
          <circle cx="51" cy="54" r="2.2" fill="#F4A261" />

          {/* Subtle beauty sparkle */}
          <path
            d="M 82 23 Q 82 28 85 28 Q 82 28 82 33 Q 82 28 79 28 Q 82 28 82 23 Z"
            fill="#F6D365"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-editorial font-bold tracking-wide uppercase ${isLight ? 'text-white' : 'text-[#1C1714]'} text-base sm:text-lg`}>
              Amaliya
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold px-1.5 py-0.2 rounded bg-[#E07A5F]/15 text-[#E07A5F] border border-[#E07A5F]/30">
              Brow
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] font-sans tracking-wider ${isLight ? 'text-[#D8C7B5]' : 'text-[#7D6654]'}`}>
            Сама себе бровист
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Official & Aesthetic Logo for Prodamus Payment Gateway
 * Displays recognizable geometric shield & checkout checkmark in brand purple/coral gradient
 */
export const ProdamusLogo: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}> = ({
  className = '',
  size = 'md',
  showBadge = true
}) => {
  const heightMap = {
    sm: 22,
    md: 28,
    lg: 36
  };
  const h = heightMap[size];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Official Prodamus Stylized Emblem */}
      <svg
        height={h}
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="prodamusGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6C5CE7" />
            <stop offset="100%" stopColor="#A29BFE" />
          </linearGradient>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0984E3" />
            <stop offset="100%" stopColor="#00CEC9" />
          </linearGradient>
        </defs>

        {/* Payment Shield / Cart graphic */}
        <rect x="2" y="4" width="32" height="32" rx="9" fill="url(#prodamusGrad)" />
        <path
          d="M 10 16 L 26 16 M 10 24 L 20 24"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Verification check on card */}
        <circle cx="23" cy="24" r="4.5" fill="#00B894" />
        <path
          d="M 21.5 24 L 22.8 25.3 L 25 22.5"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* "prodamus" logotype text */}
        <text
          x="42"
          y="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="18"
          letterSpacing="-0.5px"
          fill="#1C1714"
        >
          prodamus
        </text>

        {/* Small trademark dot */}
        <circle cx="132" cy="14" r="2" fill="#6C5CE7" />
      </svg>

      {showBadge && (
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#6C5CE7]/10 text-[#5B48DF] border border-[#6C5CE7]/20 whitespace-nowrap hidden sm:inline">
          Платёжная система
        </span>
      )}
    </div>
  );
};
