import type { Block, Field } from "payload";

import { ContentBlock } from "@/lib/blocks/config";
import { linkField } from "@/lib/collections/base-fields";

export const FooterNavBlock: Block = {
  slug: "footerNav",
  interfaceName: "FooterNavBlock",
  labels: { singular: "Nav Block", plural: "Nav Blocks" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "links",
      type: "array",
      maxRows: 10,
      fields: [linkField()],
    },
  ],
};

const iconFields: Field[] = [
  {
    name: "svg",
    type: "group",
    required: true,
    fields: [
      { name: "viewBox", type: "text", required: true },
      { name: "path", type: "textarea", required: true },
    ],
  },
  {
    name: "color",
    type: "select",
    defaultValue: "neutral",
    options: [
      { label: "Neutral", value: "neutral" },
      { label: "Black", value: "black" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" },
      { label: "Rose", value: "rose" },
      { label: "Amber", value: "amber" },
      { label: "Violet", value: "violet" },
    ],
  },
  linkField(),
];

const makeIconsBlock = (
  slug: "footerIcons" | "headerIcons",
  interfaceName: "FooterIconsBlock" | "HeaderIconsBlock",
): Block => ({
  slug,
  interfaceName,
  labels: { singular: "Icons", plural: "Icons" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "items",
      type: "array",
      maxRows: 10,
      fields: iconFields,
    },
  ],
});

export const FooterIconsBlock = makeIconsBlock(
  "footerIcons",
  "FooterIconsBlock",
);
export const HeaderIconsBlock = makeIconsBlock(
  "headerIcons",
  "HeaderIconsBlock",
);

export const footerBlocks = [FooterNavBlock, ContentBlock, FooterIconsBlock];
