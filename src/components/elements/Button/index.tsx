import { STYLE_GUIDE } from "./constant";
import { ButtonProps } from "./interface";
import { AiOutlineLoading } from "react-icons/ai"

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  disabled = false,
  isLoading = false,
  small = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={
        `bg-clip-border transition-all duration-200 rounded-xl px-8 py-4 text-center gap-2 flex items-center justify-center disabled:opacity-50 font-bold 
        ${(STYLE_GUIDE[variant])}
        ${className}`
      }
    >
      {isLoading ? (
        <AiOutlineLoading className='animate-spin' />
      ) : (
        <>
          {children}
        </>
      )}
    </button>
  )
}