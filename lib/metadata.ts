import type { Metadata } from "next";
export const SITE_URL = "https://www.provisionii.com";
export function buildMetadata({title,description,path}:{title:string;description:string;path:string}):Metadata{return {title,description,alternates:{canonical:SITE_URL+path},robots:{index:true,follow:true},openGraph:{title,description,url:SITE_URL+path,siteName:"Provisionii",type:"website"}};}
