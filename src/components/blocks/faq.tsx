import { HiMinus, HiPlus } from "react-icons/hi2";

import type { FaqBlock as FaqBlockProps } from "@/payload-types";

import { JsonLd } from "@/components/shared/elements-ssr";
import { generateJsonLdFaq } from "@/lib/seo/jsonld";

export default function FaqBlock({ faqs, title }: FaqBlockProps) {
  if (!faqs?.length) return null;

  return (
    <>
      <JsonLd data={generateJsonLdFaq(faqs, title)} />
      <section className="mx-auto w-full max-w-3xl" aria-label={title}>
        <h2 className="mb-8 text-2xl font-medium">{title}</h2>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {faqs.map((item, index) => (
            <details key={item.id ?? index} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                <span className="min-w-0 flex-1 text-base font-medium leading-snug text-neutral-900 dark:text-neutral-100">
                  {item.question}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-colors group-open:bg-neutral-900 dark:bg-neutral-800 dark:group-open:bg-white">
                  <HiPlus className="size-3.5 text-neutral-500 group-open:hidden" />
                  <HiMinus className="hidden size-3.5 text-white group-open:block dark:text-neutral-900" />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-[15px] leading-7 text-neutral-500 dark:text-neutral-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
