import type { PortableTextPayload } from "./PortableText";

export type AccordianProps = AccordianPropItem[]


export interface AccordianPropItem {
  title: string,
  content: PortableTextPayload
}