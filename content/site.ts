import type { ApprovedCtaId } from "@/lib/analytics";

export type Cta = {
  readonly href: string;
  readonly label: string;
  readonly analyticsId?: ApprovedCtaId;
};

export type ProcessStep = {
  readonly title: string;
  readonly body: string;
};

export type ContentCard = {
  readonly title: string;
  readonly body: string;
};

export type ActiveService = {
  readonly slug: "direct-hire" | "contract-staffing" | "staff-augmentation";
  readonly name: string;
  readonly shortName: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly description: string;
  readonly summary: string;
  readonly bestFor: string;
  readonly href: string;
  readonly inquiryHref: string;
  readonly exploreLabel: string;
  readonly exploreAnalyticsId: ApprovedCtaId;
  readonly fit: readonly string[];
  readonly process: readonly ProcessStep[];
  readonly distinctionTitle: string;
  readonly distinctionBody: string;
  readonly secondaryDistinction?: {
    readonly id: string;
    readonly title: string;
    readonly body: string;
  };
  readonly closingTitle: string;
  readonly closingBody: string;
  readonly cta: Cta;
};

export const siteConfig = {
  name: "Provisionii",
  legalName: "Provisionii",
  description:
    "Provisionii provides Direct Hire, Contract Staffing, Contract-to-Hire, and Staff Augmentation with experienced judgment, disciplined execution, and accountable delivery.",
  phone: "",
  location: "Service availability confirmed for each engagement",
} as const;

export const ctaLabels = {
  organization: "Start a Search",
  talent: "Join Our Talent Network",
  findWork: "Find Work",
  findOpportunities: "Find Opportunities",
  explore: "Explore Solutions",
  directHire: "Explore Direct Hire",
  contractStaffing: "Explore Contract Staffing",
  staffAugmentation: "Explore Staff Augmentation",
  talk: "Talk With Our Team",
  contact: "Contact Provisionii",
} as const;

export const organizationNeeds = [
  { value: "direct_hire", label: "Direct Hire" },
  { value: "contract_staffing", label: "Contract Staffing" },
  { value: "contract_to_hire", label: "Contract-to-Hire" },
  { value: "staff_augmentation", label: "Staff Augmentation" },
  { value: "unsure", label: "Not sure which model fits" },
  { value: "other_workforce_need", label: "Another workforce need" },
] as const;

export const talentInterests = [
  { value: "direct_hire", label: "Direct Hire" },
  { value: "contract_staffing", label: "Contract Staffing" },
  { value: "contract_to_hire", label: "Contract-to-Hire" },
  { value: "staff_augmentation", label: "Staff Augmentation" },
  { value: "open_to_multiple", label: "Open to multiple" },
] as const;

export const directHireService: ActiveService = {
  slug: "direct-hire",
  name: "Direct Hire",
  shortName: "Direct Hire",
  eyebrow: "Direct Hire",
  headline: "Direct Hire for critical permanent roles.",
  description:
    "When long-term capability and ownership matter, Provisionii leads a focused search for talent the client intends to employ directly.",
  summary:
    "For critical permanent roles where the organization needs long-term capability and a focused search.",
  bestFor:
    "Core positions, specialized needs, and important vacancies intended for direct client employment.",
  href: "/workforce-solutions/direct-hire",
  inquiryHref: "/find-talent?need=direct_hire",
  exploreLabel: ctaLabels.directHire,
  exploreAnalyticsId: "explore_direct_hire",
  fit: [
    "A core or long-term position is open.",
    "Specialized expertise is difficult to identify or engage.",
    "An important vacancy needs focused recruiting attention.",
    "The selected person will become the client’s employee.",
  ],
  process: [
    {
      title: "Align the requirement",
      body: "Align the role, requirements, environment, timing, and decision criteria.",
    },
    {
      title: "Build the search",
      body: "Build and execute a focused sourcing and recruiting strategy.",
    },
    {
      title: "Screen and coordinate",
      body: "Screen relevant talent and coordinate communication and interviews.",
    },
    {
      title: "Support the start",
      body: "Support offer coordination and the agreed start process.",
    },
  ],
  distinctionTitle: "Operating distinction",
  distinctionBody:
    "The client makes the hiring decision, issues the employment offer, and becomes the employer. Provisionii supports the agreed recruiting and placement process.",
  closingTitle: "Start with the role that needs to be filled.",
  closingBody:
    "Share the work, timing, location, and relevant context. We’ll review the requirement and determine the appropriate next step.",
  cta: { href: "/find-talent?need=direct_hire", label: ctaLabels.organization, analyticsId: "start_search" },
};

export const contractStaffingService: ActiveService = {
  slug: "contract-staffing",
  name: "Contract Staffing & Contract-to-Hire",
  shortName: "Contract Staffing",
  eyebrow: "Contract Staffing & Contract-to-Hire",
  headline: "Flexible talent for immediate and changing workforce needs.",
  description:
    "Contract Staffing provides talent for defined assignments and changing demand. Contract-to-Hire uses the same service family when the engagement includes a measured path toward possible permanent employment.",
  summary:
    "For urgent coverage, temporary or changing demand, and assignments where flexibility matters. Contract-to-Hire adds a measured path toward possible permanent employment when appropriate.",
  bestFor:
    "Coverage gaps, project work, variable demand, and trial-to-hire needs.",
  href: "/workforce-solutions/contract-staffing",
  inquiryHref: "/find-talent?need=contract_staffing",
  exploreLabel: ctaLabels.contractStaffing,
  exploreAnalyticsId: "explore_contract_staffing",
  fit: [
    "An urgent coverage gap needs support.",
    "Demand is temporary, variable, or still developing.",
    "A project or leave period requires defined capacity.",
    "The organization wants a measured path before possible permanent hiring.",
  ],
  process: [
    {
      title: "Clarify the assignment",
      body: "Clarify the assignment, work location, schedule, duration, requirements, and supervision model.",
    },
    {
      title: "Confirm the engagement path",
      body: "Confirm the appropriate worker relationship and engagement path before recruiting proceeds.",
    },
    {
      title: "Recruit and coordinate",
      body: "Recruit, screen, and coordinate relevant talent.",
    },
    {
      title: "Support the assignment",
      body: "Support the approved onboarding, assignment, communication, and workforce-management process.",
    },
  ],
  distinctionTitle: "Contract Staffing distinction",
  distinctionBody:
    "Provisionii supplies employed talent for an authorized assignment where the service, location, and operating requirements can be supported.",
  secondaryDistinction: {
    id: "contract-to-hire",
    title: "Contract-to-Hire distinction",
    body:
      "Possible conversion to client employment is governed by the client agreement and hiring decision. Contract-to-Hire does not guarantee conversion or employment.",
  },
  closingTitle: "Tell us where flexibility is needed.",
  closingBody:
    "Share the work, timing, duration, location, and operating context. We’ll help determine the appropriate path.",
  cta: {
    href: "/find-talent?need=contract_staffing",
    label: ctaLabels.organization,
    analyticsId: "start_search",
  },
};

export const staffAugmentationService: ActiveService = {
  slug: "staff-augmentation",
  name: "Staff Augmentation",
  shortName: "Staff Augmentation",
  eyebrow: "Staff Augmentation",
  headline: "Add specialized capacity to the team you already have.",
  description:
    "Staff Augmentation adds qualified capacity or specialized expertise to a client team, function, or project under a defined engagement while the client retains day-to-day direction.",
  summary:
    "For specialized expertise or additional capacity added to an existing team, function, or project under a defined engagement.",
  bestFor:
    "Project spikes, capability gaps, and teams that need added capacity while retaining day-to-day direction.",
  href: "/workforce-solutions/staff-augmentation",
  inquiryHref: "/find-talent?need=staff_augmentation",
  exploreLabel: ctaLabels.staffAugmentation,
  exploreAnalyticsId: "explore_staff_augmentation",
  fit: [
    "A project spike creates a temporary capacity gap.",
    "An existing team needs specialized expertise.",
    "A function needs additional hands without creating a permanent role immediately.",
    "Defined work requires added capacity for a specific period or engagement.",
  ],
  process: [
    {
      title: "Clarify the capacity need",
      body: "Clarify the capacity need, work, duration, role, governance, and expected outcomes.",
    },
    {
      title: "Align the engagement",
      body: "Align the engagement structure, responsibilities, reporting, and change controls.",
    },
    {
      title: "Recruit and coordinate",
      body: "Recruit and coordinate talent suited to the defined need.",
    },
    {
      title: "Support delivery",
      body: "Support the approved assignment and agreed delivery-governance process.",
    },
  ],
  distinctionTitle: "Operating distinction",
  distinctionBody:
    "Staff Augmentation is not a label-only synonym for temporary staffing. The engagement must define the work, capacity, responsibilities, reporting, and change process while the client retains day-to-day direction.",
  closingTitle: "Tell us where the team needs added capacity.",
  closingBody:
    "Share the work, timing, expertise, location, and operating context. We’ll review the need and determine the appropriate next step.",
  cta: {
    href: "/find-talent?need=staff_augmentation",
    label: ctaLabels.organization,
    analyticsId: "start_search",
  },
};

export const activeServices = [
  directHireService,
  contractStaffingService,
  staffAugmentationService,
] as const;

export const decisionRows = [
  {
    title: "Critical, permanent, and central to the organization",
    body: "Direct Hire",
  },
  { title: "Immediate, temporary, or changing demand", body: "Contract Staffing" },
  {
    title: "A measured path before possible permanent hiring",
    body: "Contract-to-Hire",
  },
  {
    title: "An existing team needs added capacity or specialized expertise",
    body: "Staff Augmentation",
  },
] as const;

export const deliverySteps = [
  {
    title: "Understand the requirement",
    body: "We clarify the work, outcomes, operating environment, timing, budget, constraints, work location, and decision criteria.",
  },
  {
    title: "Align the model",
    body: "We recommend the appropriate path based on the work, duration, level of flexibility, delivery expectations, and operating requirements.",
  },
  {
    title: "Recruit and coordinate",
    body: "We source, engage, and screen relevant talent, coordinate interviews and communication, and keep ownership clear.",
  },
  {
    title: "Follow through",
    body: "We manage the agreed next steps through selection, offer or assignment coordination, start, and applicable workforce support.",
  },
] as const;

export const operatingPrinciples = [
  { title: "Experienced talent acquisition judgment", body: "" },
  { title: "Structured recruiting and stakeholder coordination", body: "" },
  { title: "Clear ownership and follow-through", body: "" },
  { title: "Human accountability for consequential decisions", body: "" },
] as const;
