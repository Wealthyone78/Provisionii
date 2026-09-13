'use client';
import { useEffect } from 'react';
export default function Motion(){useEffect(()=>{
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(preference.matches||!('IntersectionObserver' in window))return;
 const animations:Animation[]=[];
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const el=entry.target as HTMLElement;const animation=el.animate([{transform:'translateY(18px)'},{transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',delay:Number(el.dataset.delay||0)});animations.push(animation);observer.unobserve(el);}},{threshold:.12});
 document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
 const stop=()=>{if(preference.matches){observer.disconnect();animations.forEach(a=>a.cancel());}};
 preference.addEventListener('change',stop);
 return()=>{observer.disconnect();animations.forEach(a=>a.cancel());preference.removeEventListener('change',stop);};
 },[]);return null;}
