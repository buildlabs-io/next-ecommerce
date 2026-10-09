import type { FooterNavBlock as FooterNavBlockProps } from "@/payload-types";

import CmsLink from "@/components/shared/cms-link";

export default function FooterNavBlock({ title, links }: FooterNavBlockProps) {
  return (
    <nav
      data-block-type="footerNav"
      aria-label={title ?? "Footer navigation"}
      className="flex min-w-0 flex-col gap-3"
    >
      {title ? (
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
      ) : null}

      <div className="flex flex-col items-start gap-2">
        {(links ?? []).map(({ link, id }, index) => (
          <CmsLink
            key={id ?? index}
            link={link}
            appearance="link"
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          />
        ))}
      </div>
    </nav>
  );
}
