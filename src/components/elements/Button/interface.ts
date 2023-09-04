export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  disabled?: boolean
  icon?: React.ReactNode
  isLoading?: boolean
  small?: boolean
}