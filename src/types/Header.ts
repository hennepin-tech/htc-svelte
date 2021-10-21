export interface HeaderProps {
  banner: {
    bannerProps: {
      message: string,
      link: string
    },
    display: boolean
  },
  data: HeaderData
}

export interface HeaderData {
  name: string,
  subNav: HeaderItem[],
  mainNav: HeaderItem[]
}

export interface HeaderItem {
  label: string,
  links: HeaderItemLink[]
}

export interface HeaderItemLink {
  text: string,
  path: string
}