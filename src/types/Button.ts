export interface ButtonProps {
  behavior: 'button' | 'link'
  text: string,
  url?: string,
  type: 'primary' | 'secondary' | 'success' | 'danger' 
}