export const analyticsEventName = "provisionii:analytics";

export const approvedAnalyticsEvents = [
  "cta_click",
  "organization_form_start",
  "organization_form_success",
  "talent_form_start",
  "talent_form_success",
] as const;

export type ApprovedAnalyticsEventName = (typeof approvedAnalyticsEvents)[number];
export type IntakeFormType = "organization" | "talent";

export const approvedCtaIds = [
  "start_search",
  "talk_with_team",
  "explore_solutions",
  "explore_direct_hire",
  "explore_contract_staffing",
  "explore_staff_augmentation",
  "find_work",
  "find_opportunities",
  "join_talent_network",
  "contact_provisionii",
] as const;

export type ApprovedCtaId = (typeof approvedCtaIds)[number];

export type AnalyticsEvent =
  | { event: "cta_click"; cta: ApprovedCtaId }
  | {
      event: Exclude<ApprovedAnalyticsEventName, "cta_click">;
    };

/**
 * Emits only an approved event name and, for CTA clicks, an allowlisted CTA ID.
 * Form values, URLs, attribution, field names, and submission IDs cannot enter
 * this deliberately narrow PII-free contract.
 */
export function trackAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  const safeEvent =
    event.event === "cta_click"
      ? { event: event.event, cta: event.cta }
      : { event: event.event };

  window.dispatchEvent(
    new CustomEvent(analyticsEventName, {
      detail: Object.freeze(safeEvent),
    }),
  );
}
