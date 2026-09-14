export default function EnergyFlowIllustration() {
  return (
    <svg
      viewBox="0 0 560 460"
      className="w-full h-auto"
      role="img"
      aria-label="Diagram showing energy flowing from the sun through a solar panel and battery into a home"
    >
      <defs>
        <linearGradient id="panelSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2C4468" />
          <stop offset="100%" stopColor="#162439" />
        </linearGradient>
      </defs>

      {/* backdrop panel */}
      <rect x="0" y="0" width="560" height="460" rx="24" fill="#0F1B2D" />

      {/* ground line */}
      <line x1="40" y1="392" x2="520" y2="392" stroke="#203352" strokeWidth="1" />

      {/* sun */}
      <g>
        <circle cx="120" cy="96" r="34" fill="#E8A73B" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1={120 + Math.cos((deg * Math.PI) / 180) * 46}
            y1={96 + Math.sin((deg * Math.PI) / 180) * 46}
            x2={120 + Math.cos((deg * Math.PI) / 180) * 58}
            y2={96 + Math.sin((deg * Math.PI) / 180) * 58}
            stroke="#F4CB86"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* solar panel, angled */}
      <g transform="translate(150,180) rotate(-8)">
        <rect x="0" y="0" width="150" height="90" rx="4" fill="url(#panelSheen)" stroke="#5B93BC" strokeWidth="1.5" />
        {[1, 2, 3].map((i) => (
          <line key={`v${i}`} x1={(150 / 4) * i} y1="0" x2={(150 / 4) * i} y2="90" stroke="#0F1B2D" strokeWidth="1.5" />
        ))}
        {[1, 2].map((i) => (
          <line key={`h${i}`} x1="0" y1={(90 / 3) * i} x2="150" y2={(90 / 3) * i} stroke="#0F1B2D" strokeWidth="1.5" />
        ))}
      </g>

      {/* sun to panel energy dashes */}
      <path
        d="M138 118 L190 178"
        stroke="#E8A73B"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="animate-flow"
        fill="none"
      />

      {/* wire from panel to battery */}
      <path
        d="M300 230 C 340 230, 340 260, 380 260"
        stroke="#5B93BC"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        className="animate-flow"
        fill="none"
      />

      {/* battery pack */}
      <g transform="translate(380,235)">
        <rect x="0" y="0" width="60" height="90" rx="6" fill="#162439" stroke="#5B93BC" strokeWidth="1.5" />
        <rect x="18" y="-10" width="24" height="10" rx="2" fill="#5B93BC" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="12" y={14 + i * 24} width="36" height="12" rx="2" fill="#E8A73B" opacity={0.9 - i * 0.2} />
        ))}
      </g>

      {/* wire from battery down to home */}
      <path
        d="M410 325 L410 355 L250 355 L250 375"
        stroke="#5B93BC"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        className="animate-flow"
        fill="none"
      />

      {/* home silhouette */}
      <g transform="translate(130,330)">
        <polygon points="60,0 0,45 120,45" fill="#203352" />
        <rect x="10" y="45" width="100" height="62" fill="#162439" stroke="#2C4468" strokeWidth="1" />
        <rect x="30" y="65" width="22" height="22" fill="#E8A73B" opacity="0.85" />
        <rect x="70" y="65" width="22" height="22" fill="#E8A73B" opacity="0.5" />
        <rect x="50" y="88" width="20" height="19" fill="#0F1B2D" />
      </g>
    </svg>
  )
}
