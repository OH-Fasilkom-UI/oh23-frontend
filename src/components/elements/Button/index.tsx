import { ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({
  btnType,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className=""
    >
      hi
    </button>
  )
}