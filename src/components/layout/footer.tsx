import type { SiteSetting } from "@/payload-types";

import RenderBlocks from "@/components/blocks/render-blocks";

export default function Footer({ footer }: { footer: SiteSetting["footer"] }) {
  if (!footer) return null;

  return (
    <footer className="mt-auto px-4 py-8">
      {footer.blocks?.length ? (
        <div className="container grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3 md:grid-cols-4 [&>[data-block-type=content]]:col-span-full [&>[data-block-type=footerIcons]]:col-span-full">
          <RenderBlocks blocks={footer.blocks} />
        </div>
      ) : null}
    </footer>
  );
}
