import React from "react";

// Fully local SVG "graphics" — deliberately crude, no external requests.

export function StarBurst({ size = 120, className = "" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={{ imageRendering: "pixelated" }}>
      <g stroke="#000" strokeWidth="2">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line key={a} x1="50" y1="50" x2={50 + 48 * Math.cos((a * Math.PI) / 180)} y2={50 + 48 * Math.sin((a * Math.PI) / 180)} stroke="#ff0000" strokeWidth="3" />
        ))}
      </g>
      <polygon
        points="50,5 58,38 92,38 64,57 74,90 50,70 26,90 36,57 8,38 42,38"
        fill="#ffcc00" stroke="#000" strokeWidth="3"
      />
      <text x="50" y="58" textAnchor="middle" fontFamily="Impact, sans-serif" fontSize="22" fill="#ff0000" stroke="#000" strokeWidth="0.5">NEW</text>
    </svg>
  );
}

export function ConstructionGraphic({ size = 120, className = "" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="0" width="100" height="100" fill="#ffff00" />
      {[0, 20, 40, 60, 80].map((x) => (
        <g key={x}>
          <rect x={x} y="0" width="10" height="100" fill="#000" />
          <rect x={x + 10} y="0" width="10" height="100" fill="#ffff00" />
        </g>
      ))}
      <rect x="25" y="35" width="50" height="40" fill="#ff8800" stroke="#000" strokeWidth="3" />
      <rect x="30" y="20" width="40" height="20" fill="#ffcc00" stroke="#000" strokeWidth="3" />
      <circle cx="35" cy="55" r="6" fill="#000" />
      <circle cx="65" cy="55" r="6" fill="#000" />
      <rect x="42" y="48" width="16" height="10" fill="#fff" stroke="#000" strokeWidth="2" />
      <line x1="50" y1="20" x2="50" y2="10" stroke="#000" strokeWidth="3" />
      <circle cx="50" cy="8" r="4" fill="#ff0000" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

export function SuccessClipart({ size = 200, className = "", style }) {
  return (
    <svg viewBox="0 0 200 150" width={size} height={size * 0.75} className={className} style={{ imageRendering: "pixelated", ...style }}>
      <rect width="200" height="150" fill="#00aaff" />
      <ellipse cx="100" cy="140" rx="90" ry="12" fill="#0055aa" />
      {/* businessman */}
      <rect x="40" y="70" width="40" height="55" fill="#000080" stroke="#000" strokeWidth="2" />
      <circle cx="60" cy="55" r="16" fill="#ffcc99" stroke="#000" strokeWidth="2" />
      <rect x="50" y="60" width="20" height="6" fill="#ff0000" stroke="#000" strokeWidth="1" />
      <polygon points="44,40 60,30 76,40 76,48 44,48" fill="#000" />
      {/* trophy */}
      <g>
        <rect x="130" y="40" width="30" height="30" fill="#ffcc00" stroke="#000" strokeWidth="3" />
        <rect x="125" y="35" width="40" height="10" fill="#ffcc00" stroke="#000" strokeWidth="3" />
        <rect x="135" y="70" width="20" height="15" fill="#ffcc00" stroke="#000" strokeWidth="3" />
        <rect x="120" y="85" width="50" height="8" fill="#ffcc00" stroke="#000" strokeWidth="3" />
        <path d="M125,40 q-15,5 -12,20 q3,10 18,8" fill="none" stroke="#ffcc00" strokeWidth="6" />
        <path d="M165,40 q15,5 12,20 q-3,10 -18,8" fill="none" stroke="#ffcc00" strokeWidth="6" />
      </g>
      {/* handshake arms */}
      <rect x="78" y="78" width="20" height="8" fill="#000080" stroke="#000" strokeWidth="2" transform="rotate(-8 88 82)" />
      <rect x="104" y="78" width="20" height="8" fill="#ffcc00" stroke="#000" strokeWidth="2" transform="rotate(8 114 82)" />
      <rect x="96" y="76" width="14" height="12" fill="#ffcc99" stroke="#000" strokeWidth="2" />
      <text x="100" y="20" textAnchor="middle" fontFamily="Impact, sans-serif" fontSize="16" fill="#ffff00" stroke="#000" strokeWidth="0.5">SUCCESS!!!</text>
    </svg>
  );
}

export function SpinningGlobe({ size = 80, className = "" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <circle cx="50" cy="50" r="46" fill="#00aaff" stroke="#000" strokeWidth="3" />
      <ellipse cx="50" cy="50" rx="46" ry="20" fill="none" stroke="#00ff00" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="20" ry="46" fill="none" stroke="#00ff00" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="46" ry="46" fill="none" stroke="#000" strokeWidth="2" />
      <path d="M20,40 q15,5 30,0 t30,0 t20,0" fill="#00ff00" opacity="0.8" />
      <path d="M30,65 q20,-5 40,0 t20,5" fill="#00ff00" opacity="0.8" />
    </svg>
  );
}