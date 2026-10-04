import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/site";

type P = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: P) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

export const PinIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const ClockIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.5V12l3.5 2" />
  </Svg>
);

export const NavigateIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 11 21 3l-8 18-2-8-8-2z" />
  </Svg>
);

export const ExternalIcon = (p: P) => (
  <Svg {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </Svg>
);

export const CheckIcon = (p: P) => (
  <Svg strokeWidth={2.4} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const MenuIcon = (p: P) => (
  <Svg strokeWidth={2.2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p: P) => (
  <Svg strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const ShieldIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </Svg>
);

export const TruckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M1.5 4.5h13v11h-13zM14.5 8.5h4l3 3.5v3.5h-7z" />
    <circle cx="5.5" cy="18" r="2.2" />
    <circle cx="17.5" cy="18" r="2.2" />
  </Svg>
);

export const KeyIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="m10.7 12.3 9.8-9.8M17 6l3 3M14.5 8.5l2 2" />
  </Svg>
);

export const ChatIcon = (p: P) => (
  <Svg {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.1A8 8 0 1 1 21 12z" />
  </Svg>
);

export function Stars({ value, className = "" }: { value: number; className?: string }) {
  // Five stars, the last one partially filled (e.g. 4.8 → 80% of the fifth star).
  return (
    <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} viewBox="0 0 24 24" className="h-full w-auto" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}-${Math.round(fill * 100)}`}>
                <stop offset={fill} stopColor="currentColor" />
                <stop offset={fill} stopColor="currentColor" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i}-${Math.round(fill * 100)})`}
              d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z"
            />
          </svg>
        );
      })}
    </span>
  );
}

const serviceIcons: Record<ServiceIcon, React.ReactNode> = {
  brakes: (
    <>
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="2.6" />
      <path d="M11 7.4v.01M16.6 13h.01M11 18.6v.01M5.4 13h.01" strokeWidth={2.4} />
      <path d="M15.5 3.2a10 10 0 0 1 5.3 5.6" strokeWidth={3.2} />
    </>
  ),
  struts: (
    <>
      <path d="M12 1.5v3.5M12 19v3.5M7.5 5h9M7.5 19h9" />
      <path d="M8 7.5 16 9.5 8 11.5 16 13.5 8 15.5 16 17" />
    </>
  ),
  exhaust: (
    <>
      <rect x="2" y="8.5" width="11" height="7" rx="3.5" />
      <path d="M13 12h5.5M18.5 10v4" />
      <path d="M21.2 8.8a1.3 1.3 0 1 0 0 .01M21.6 15.6a1 1 0 1 0 0 .01" strokeWidth={1.6} />
    </>
  ),
  belts: (
    <>
      <circle cx="7" cy="15.5" r="4.5" />
      <circle cx="17.5" cy="6.5" r="3" />
      <circle cx="7" cy="15.5" r="1.2" />
      <path d="M3.9 12.2 15.4 4.4M10.3 18.6 20.2 8.4" />
    </>
  ),
  cooling: (
    <>
      <path d="M9 14.3V4.5a2.5 2.5 0 0 1 5 0v9.8a4.5 4.5 0 1 1-5 0z" />
      <path d="M11.5 9v8" strokeWidth={2.4} />
      <path d="M17.5 5.5h3M17.5 9h3" />
    </>
  ),
  diagnostics: (
    <>
      <path d="M3 16a9 9 0 0 1 18 0" />
      <path d="M12 16l4.5-5.5" strokeWidth={2.2} />
      <circle cx="12" cy="16" r="1.4" />
      <path d="M5.6 12.4l1.2.7M12 7v1.4M18.4 12.4l-1.2.7M2.5 20h19" />
    </>
  ),
  electrical: (
    <path d="M13.5 2 4.5 13.5h6.5L10 22l9.5-12H13l.5-8z" />
  ),
  ac: (
    <>
      <path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17" />
      <path d="M9.2 3.8 12 5.6l2.8-1.8M9.2 20.2 12 18.4l2.8 1.8M3.4 10.6l2.9-.3 1-2.8M20.6 13.4l-2.9.3-1 2.8M20.6 10.6l-2.9-.3-1-2.8M3.4 13.4l2.9.3 1 2.8" />
    </>
  ),
  tuneup: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
};

export function ServiceGlyph({ name, ...p }: P & { name: ServiceIcon }) {
  return <Svg {...p}>{serviceIcons[name]}</Svg>;
}
