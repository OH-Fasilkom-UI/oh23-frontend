export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' 
  disabled?: boolean
  icon?: React.ReactNode
  isLoading?: boolean
  small?: boolean
}