import React from 'react';

export const MeuRHLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#logoGradient)"
      d="M50,5 A45,45 0 1,1 5,50 A45,45 0 0,1 50,5 M50,15 A35,35 0 1,0 85,50 A35,35 0 0,0 50,15"
    />
    <text
      x="50"
      y="62"
      fontFamily="sans-serif"
      fontSize="40"
      fill="white"
      textAnchor="middle"
      fontWeight="bold"
    >
      G
    </text>
  </svg>
);
