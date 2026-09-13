import type { ComponentProps } from "react";

// Full-document navigation keeps this export independent of Next server routing.
export default function StaticLink(props: ComponentProps<"a">) {
  return <a {...props} />;
}
