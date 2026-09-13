import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & { size?: number };
function Icon({ size = 20, children, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}
export function ArrowRight(props: IconProps) { return <Icon {...props}><path d="M5 12h14m-6-6 6 6-6 6" /></Icon>; }
export function ArrowUpRight(props: IconProps) { return <Icon {...props}><path d="M7 17 17 7M7 7h10v10" /></Icon>; }
export function ArrowLeft(props: IconProps) { return <Icon {...props}><path d="M19 12H5m6 6-6-6 6-6" /></Icon>; }
export function MapPin(props: IconProps) { return <Icon {...props}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>; }
export function Briefcase(props: IconProps) { return <Icon {...props}><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v3h4v-3" /></Icon>; }
export function Banknote(props: IconProps) { return <Icon {...props}><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></Icon>; }
export function Share(props: IconProps) { return <Icon {...props}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4m-6.8 7 6.8 4" /></Icon>; }
export function Copy(props: IconProps) { return <Icon {...props}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></Icon>; }
export function Check(props: IconProps) { return <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>; }
export function Menu(props: IconProps) { return <Icon {...props}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>; }
export function X(props: IconProps) { return <Icon {...props}><path d="m6 6 12 12M6 18 12-12" /></Icon>; }
