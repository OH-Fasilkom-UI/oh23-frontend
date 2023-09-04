export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'primary' | 'secondary'
  disabled?: boolean
  isLoading?: boolean
}