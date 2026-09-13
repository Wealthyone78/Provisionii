import Image from "next/image";
import Link from "@/components/static-link";
import Navigation from "./preview/Navigation";
export function PreviewLogo() { return <span className="logo"><Image src="/provisionii-logo.webp" alt="Provisionii" width={235} height={235} unoptimized priority /></span>; }
export function SiteHeader() { return <header className="header-shell"><div className="header"><Link href="/" aria-label="Provisionii home"><PreviewLogo /></Link><Navigation /></div></header>; }
