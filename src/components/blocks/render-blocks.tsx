import { Fragment, type ReactNode } from "react";

import type { ResolvedPageBlock } from "@/lib/core/types/types";
import type { SiteSetting } from "@/payload-types";

import ArchiveBlock from "@/components/blocks/archive";
import CallToActionBlock from "@/components/blocks/call-to-action";
import ContentBlock from "@/components/blocks/content";
import FaqBlock from "@/components/blocks/faq";
import FooterNavBlock from "@/components/blocks/footer-nav";
import GalleryBlock from "@/components/blocks/gallery";
import HtmlEmbedBlock from "@/components/blocks/html-embed";
import IconsBlock from "@/components/blocks/layout-icons";

type HeaderBlock = NonNullable<
  NonNullable<SiteSetting["header"]>["blocks"]
>[number];
type FooterBlock = NonNullable<
  NonNullable<SiteSetting["footer"]>["blocks"]
>[number];
type RenderableBlock = ResolvedPageBlock | HeaderBlock | FooterBlock;
type BlockByType<T extends RenderableBlock["blockType"]> = Extract<
  RenderableBlock,
  { blockType: T }
>;

const blockComponents = {
  archive: (block: BlockByType<"archive">) => <ArchiveBlock {...block} />,
  content: (block: BlockByType<"content">) => <ContentBlock {...block} />,
  cta: (block: BlockByType<"cta">) => <CallToActionBlock {...block} />,
  faq: (block: BlockByType<"faq">) => <FaqBlock {...block} />,
  footerIcons: (block: BlockByType<"footerIcons">) => <IconsBlock {...block} />,
  footerNav: (block: BlockByType<"footerNav">) => <FooterNavBlock {...block} />,
  gallery: (block: BlockByType<"gallery">) => <GalleryBlock {...block} />,
  headerIcons: (block: BlockByType<"headerIcons">) => (
    <IconsBlock {...block} variant="header" />
  ),
  htmlEmbed: (block: BlockByType<"htmlEmbed">) => <HtmlEmbedBlock {...block} />,
} satisfies {
  [T in RenderableBlock["blockType"]]: (block: BlockByType<T>) => ReactNode;
};

export default function RenderBlocks({
  blocks,
}: {
  blocks:
    ResolvedPageBlock[] | HeaderBlock[] | FooterBlock[] | null | undefined;
}) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    if (!block?.blockType || !(block.blockType in blockComponents)) return null;

    const render = blockComponents[block.blockType] as (
      value: RenderableBlock,
    ) => ReactNode;

    return (
      <Fragment key={block.id ?? `${block.blockType}-${index}`}>
        {render(block)}
      </Fragment>
    );
  });
}
