import type {
  FooterIconsBlock as FooterIconsBlockProps,
  HeaderIconsBlock as HeaderIconsBlockProps,
} from "@/payload-types";

import CmsLink from "@/components/shared/cms-link";
import { cn } from "@/lib/core/util";

const COLOR_CLASSES = {
  neutral: "border-border bg-background text-foreground hover:bg-muted",
  black:
    "border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200",
  blue: "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  green:
    "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
  rose: "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300",
  amber:
    "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
  violet:
    "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300",
} as const;

export default function FooterIconsBlock({
  title,
  items,
  variant = "footer",
}: (FooterIconsBlockProps | HeaderIconsBlockProps) & {
  variant?: "header" | "footer";
}) {
  if (!items?.length) return null;

  return (
    <div
      data-block-type={variant === "header" ? "headerIcons" : "footerIcons"}
      className="flex min-w-0 flex-col gap-3"
    >
      {title && variant === "footer" ? (
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        {(items ?? []).map((item, index) => {
          if (!item.svg?.viewBox || !item.svg.path || !item.link) return null;

          return (
            <CmsLink
              key={item.id ?? index}
              link={item.link}
              appearance="link"
              className={cn(
                "flex size-10 items-center justify-center rounded-full border transition",
                COLOR_CLASSES[item.color ?? "neutral"],
              )}
            >
              <svg
                aria-hidden="true"
                className="size-5 fill-current"
                viewBox={item.svg.viewBox}
              >
                <path d={item.svg.path} />
              </svg>
            </CmsLink>
          );
        })}
      </div>
    </div>
  );
}
