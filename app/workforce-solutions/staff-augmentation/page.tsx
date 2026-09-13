import { buildMetadata } from "@/lib/metadata";
import { ServicePage } from "@/components/marketing/service-page";
import { staffAugmentationService } from "@/content/site";
export const metadata = buildMetadata({"title":"Staff Augmentation","description":"Explore specialized professionals for your defined workforce needs.","path":"/workforce-solutions/staff-augmentation"});
export default function Page() { return <ServicePage service={staffAugmentationService} />; }