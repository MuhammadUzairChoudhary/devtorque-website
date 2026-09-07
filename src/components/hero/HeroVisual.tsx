interface HeroVisualProps {
  lineClassName?: string;
}

export function HeroVisual({ lineClassName = "text-text-primary" }: HeroVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-[210px] overflow-hidden sm:h-[250px] lg:h-[310px]"
      data-hero-visual
    >
      <svg
        className={`absolute left-1/2 top-0 h-full w-[140vw] max-w-none -translate-x-1/2 sm:w-[125vw] lg:w-[110vw] ${lineClassName}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1728 573"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1730.5 91.7816V109.281C1562.52 81.6112 1420.5 461.781 1200 461.781C992.5 461.781 867.5 192.282 768.108 192.282C648.5 192.282 545 570.781 351.5 570.781C158 570.781 76.5 140.281 -3.5 55.2815V27.7815V1.78149C81.4834 45.1427 208.142 372.304 344.108 363.56C489.04 354.241 572.646 116.775 768.108 96.5603C893.644 83.577 1055.81 241.654 1199.61 241.06C1349.91 240.44 1562.52 49.6112 1730.5 77.2815L1730.5 91.7816ZM-3.5 27.7815C83.5 92.2815 191 464.282 351 464.282C511 464.282 572.646 164.997 768.108 144.782C893.644 131.798 1054.71 345.375 1198.5 344.782C1348.8 344.161 1562.52 64.1113 1730.5 91.7816"
          stroke="currentColor"
          strokeDasharray="10 10 4 11"
          strokeLinecap="round"
          strokeMiterlimit="1"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
