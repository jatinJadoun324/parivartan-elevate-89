export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-label="Parivartan Nutrition"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="parivartan-logo-stroke" x1="22" y1="24" x2="98" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5F7F55" />
          <stop offset="0.55" stopColor="#3F6B46" />
          <stop offset="1" stopColor="#2B4E36" />
        </linearGradient>
      </defs>

      <circle
        cx="60"
        cy="20"
        r="10"
        fill="none"
        stroke="url(#parivartan-logo-stroke)"
        strokeWidth="5"
      />
      <path
        d="M52 92V55C52 43 42 31 25 30C25 52 36 65 52 69"
        fill="none"
        stroke="url(#parivartan-logo-stroke)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M68 92V55C68 43 78 31 95 30C95 52 84 65 68 69"
        fill="none"
        stroke="url(#parivartan-logo-stroke)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <line
        x1="56"
        y1="92"
        x2="56"
        y2="55"
        stroke="url(#parivartan-logo-stroke)"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <line
        x1="64"
        y1="92"
        x2="64"
        y2="55"
        stroke="url(#parivartan-logo-stroke)"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}
