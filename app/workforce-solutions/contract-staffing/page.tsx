import { buildMetadata } from "@/lib/metadata";
import { ServicePage } from "@/components/marketing/service-page";
import { contractStaffingService } from "@/content/site";
export const metadata = buildMetadata({"title":"Contract Staffing","description":"Explore contract workforce support with responsibilities defined for each engagement.","path":"/workforce-solutions/contract-staffing"});
export default function Page() { return <ServicePage service={contractStaffingService} />; }