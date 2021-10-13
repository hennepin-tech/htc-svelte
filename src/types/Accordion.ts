import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';

export type AccordianProps = {
  multiselect: boolean,
  data: AccordianContentItem[] 
}

export interface AccordianContentItem {
  _key: string,
  _type: string,
  title: string,
  content: PortableTextBlocks
}