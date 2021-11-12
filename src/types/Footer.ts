import type { SvelteComponent } from 'svelte/internal'

export interface FooterProps {
  name: string,
  social: FooterSocialItem[],
  quickLinks: FooterQuickLinkItem[],
  footnote: string
}

export interface FooterSocialItem {
  name: string,
  url: string,
  icon?: typeof SvelteComponent | any
}

export interface FooterQuickLinkItem {
  text: string,
  url: string
}