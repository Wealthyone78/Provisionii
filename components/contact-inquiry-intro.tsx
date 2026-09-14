"use client";

import { useSearchParams } from "next/navigation";

export function GeneralInquiryIntro() {
  return <p className="intro">For general business inquiries, email <a href="mailto:hello@provisionii.com">hello@provisionii.com</a>.</p>;
}

export default function ContactInquiryIntro() {
  const values = useSearchParams().getAll("purpose");
  const purpose = values.length === 1 ? values[0] : null;
  if (purpose === "partnership") return <>
    <h2>Partnership inquiry</h2>
    <p className="intro">You may generally describe a client opportunity, recruiting relationship, contract placement opportunity, specialist expertise or potential workforce operating relationship. Email <a href="mailto:hello@provisionii.com">hello@provisionii.com</a>. Keep your description general and follow the information boundaries below.</p>
  </>;
  if (purpose === "supplier") return <>
    <h2>Supplier inquiry</h2>
    <p className="intro">You may generally describe your organization’s capability, service area and the type of potential Provisionii relationship you are exploring. Email <a href="mailto:hello@provisionii.com">hello@provisionii.com</a>. Keep your description general and follow the information boundaries below.</p>
  </>;
  return <GeneralInquiryIntro />;
}
