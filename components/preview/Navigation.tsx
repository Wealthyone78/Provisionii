"use client";
import Link from "@/components/static-link";
import { useRef } from "react";
import { ArrowUpRight, Menu, X } from "./Icons";
const mainLinks = [["Who we are", "/about"], ["Solutions", "/solutions"], ["Workforce programs", "/workforce-programs"], ["Find Work", "/careers"]] as const;
export default function Navigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  function close() { dialog.current?.close(); }
  return <>
    <nav aria-label="Main navigation" className="desktop-nav">
      {mainLinks.map(([title, href]) => <Link key={href} href={href}>{title}</Link>)}
      <Link className="nav-path" href="/find-talent">Find Talent <ArrowUpRight size={16} /></Link>
      

    </nav>
    <button ref={opener} className="mobile-menu" type="button" aria-label="Open navigation" aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}><Menu size={23} /></button>
    <dialog ref={dialog} className="navigation-sheet" aria-labelledby="navigation-title" aria-describedby="navigation-description" onClose={() => opener.current?.focus()}>
      <button className="menu-close" type="button" aria-label="Close navigation" onClick={close}><X size={24} /></button>
      <h2 id="navigation-title" className="menu-title">Your next connection.</h2><p id="navigation-description" className="menu-description">Explore Provisionii</p>
      <nav aria-label="Mobile navigation" className="sheet-links">{[["Home", "/"], ...mainLinks, ["Find Talent", "/find-talent"], ["Careers information", "/careers"], ["Talk with a team member", "/contact"]].map(([title, href]) => <Link key={href} href={href} onClick={close}>{title}<ArrowUpRight size={18} /></Link>)}</nav>
    </dialog>
  </>;
}
