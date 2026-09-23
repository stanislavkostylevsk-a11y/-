interface LogoProps {
  variant?: 'light' | 'dark' | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  showText = true,
  className = '',
  onClick,
}: LogoProps) {
  const isDark = variant === 'dark';
  const isTransparent = variant === 'transparent';

  const iconSizes = {
    xs: 'w-7 h-7 rounded-lg',
    sm: 'w-9 h-9 rounded-xl',
    md: 'w-11 h-11 rounded-2xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-20 h-20 rounded-3xl',
  };

  const titleSizes = {
    xs: 'text-sm font-editorial',
    sm: 'text-base font-editorial',
    md: 'text-lg sm:text-xl font-editorial',
    lg: 'text-2xl sm:text-3xl font-editorial',
    xl: 'text-3xl sm:text-4xl font-editorial',
  };

  const uniqueId = isDark ? 'dark' : isTransparent ? 'trans' : 'light';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-transform ${
        onClick ? 'cursor-pointer hover:opacity-90' : ''
      } ${className}`}
    >
      {/* Modern Haute-Couture Vector Monogram Icon matching exact design */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-[#241B15] via-[#16100C] to-[#0A0705] text-[#FAF7F2] shadow-md shadow-black/30 ring-1 ring-[#FAF7F2]/10'
            : isTransparent
            ? 'bg-transparent text-[#1C1714]'
            : 'bg-gradient-to-br from-[#1E1712] via-[#2A211B] to-[#120D09] text-[#FAF7F2] shadow-md shadow-[#1C1714]/20 ring-1 ring-[#D8C7B5]/20'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
        >
          <defs>
            {/* Rose-Gold & Champagne Glow Gradient */}
            <linearGradient id={`goldGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDF1DF" />
              <stop offset="30%" stopColor="#E5BE95" />
              <stop offset="70%" stopColor="#C79668" />
              <stop offset="100%" stopColor="#8F5F3B" />
            </linearGradient>

            <filter id={`browGlow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Border squircle ring */}
          {!isTransparent && (
            <rect
              x="3.5"
              y="3.5"
              width="41"
              height="41"
              rx="11"
              fill="none"
              stroke={`url(#goldGrad-${uniqueId})`}
              strokeWidth="0.8"
              strokeOpacity="0.35"
            />
          )}

          {/* Eyebrow curved arch seamlessly passing behind the letter 'A' */}
          <path
            d="M9 22 C14 13.5, 33 13, 40 21"
            fill="none"
            stroke={`url(#goldGrad-${uniqueId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            filter={`url(#browGlow-${uniqueId})`}
          />

          {/* Feathered tail highlight */}
          <path
            d="M32 16.5 C35 17.5, 37.5 19, 40 21"
            fill="none"
            stroke="#FFF6EA"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* Letter 'A' bold white legs */}
          <line
            x1="24"
            y1="11"
            x2="15.5"
            y2="37"
            stroke={isTransparent ? '#1C1714' : '#FAF7F2'}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="11"
            x2="32.5"
            y2="37"
            stroke={isTransparent ? '#1C1714' : '#FAF7F2'}
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Gold Apex sphere / beauty pearl */}
          <circle
            cx="24"
            cy="10.5"
            r="2.6"
            fill={`url(#goldGrad-${uniqueId})`}
          />
          <circle
            cx="23.3"
            cy="9.8"
            r="0.8"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>

        {/* Ambient warm pin dot */}
        <span
          className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${
            isDark ? 'bg-[#D4A373]' : 'bg-[#E07A5F]'
          } ring-2 ${isDark ? 'ring-[#1C1714]' : 'ring-[#FAF7F2]'}`}
        />
      </div>

      {/* Typographic lockup */}
      {showText && (
        <div className="text-left flex flex-col justify-center">
          {showSubtitle && (
            <div
              className={`text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold leading-none mb-1 flex items-center gap-1.5 ${
                isDark ? 'text-[#C7ADA0]' : 'text-[#886C56]'
              }`}
            >
              <span>AMALIA BROWS</span>
              <span className="w-1 h-1 rounded-full bg-[#E07A5F]" />
              <span className="font-normal tracking-wider opacity-85">ACADEMY</span>
            </div>
          )}
          <div
            className={`${titleSizes[size]} font-bold tracking-tight leading-none flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-[#1C1714]'
            }`}
          >
            <span>Сама себе бровист</span>
            <span
              className={`text-[10px] sm:text-[11px] font-sans font-medium px-2 py-0.5 rounded-full border transition-colors ${
                isDark
                  ? 'bg-white/10 text-[#FAF7F2] border-white/20'
                  : 'bg-[#1C1714]/5 text-[#665040] border-[#D8C7B5]'
              }`}
            >
              ONLINE
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
