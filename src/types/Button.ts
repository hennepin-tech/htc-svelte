export interface ButtonProps {
  behavior: 'button' | 'link'
  layout?: 'inline' | 'block',
  outline?: boolean,
  size?: 'xs' | 's' | 'm' | 'l',
  style?: string,
  submit?: boolean,
  text: string,
  type?: 'primary' | 'secondary' | 'success' | 'danger',
  url?: string
}