import type {Metadata,Viewport} from "next";
import localFont from "next/font/local";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import "./globals.css";import "./preview.css";
const poppins=localFont({src:[{path:"./fonts/poppins-regular.woff2",weight:"400",style:"normal"},{path:"./fonts/poppins-medium.woff2",weight:"500",style:"normal"},{path:"./fonts/poppins-semibold.woff2",weight:"600",style:"normal"}],display:"swap",variable:"--font-poppins"});
export const metadata:Metadata={metadataBase:new URL("https://www.provisionii.com"),title:{default:"Provisionii — People. Purpose. Possibility.",template:"%s | Provisionii"},description:"Connect with Provisionii about specialized recruiting and workforce solutions.",robots:{index:true,follow:true}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#0A1D3D"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" className={poppins.variable}><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;}
