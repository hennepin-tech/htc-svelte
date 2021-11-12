
export interface FooterProps {
  name: string,
  social: FooterSocialItem[],
  quickLinks: FooterQuickLinkItem[],
  footnote: string
}

export interface FooterSocialItem {
  name: string,
  url: string,
  icon: string
}

export interface FooterQuickLinkItem {
  text: string,
  url: string
}