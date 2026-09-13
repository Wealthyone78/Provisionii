import { buildMetadata } from "@/lib/metadata";
import { ServicePage } from "@/components/marketing/service-page";
import { directHireService } from "@/content/site";
export const metadata = buildMetadata({"title":"Direct Hire Recruiting","description":"Specialized recruiting for direct employment with your organization.","path":"/workforce-solutions/direct-hire"});
export default function Page() { return <ServicePage service={directHireService} />; }