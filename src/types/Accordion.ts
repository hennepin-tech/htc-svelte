import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';

export type AccordionProps = {
  multiselect: boolean,
  data: AccordionContentItem[] 
}

export interface AccordionContentItem {
  _key: string,
  _type: string,
  title: string,
  content: PortableTextBlocks
}