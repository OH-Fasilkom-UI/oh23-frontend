import { STYLE_GUIDE } from "./constant";
import { ButtonProps } from "./interface";
import { AiOutlineLoading } from "react-icons/ai"

export const Button: React.FC<ButtonProps> = ({
  btnType,
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
        'font-inter font-bold text-white rounded-2xl px-6 py-5 text-center flex items-center justify-center ' +
        (disabled && ' opacity-50 ') +
        (STYLE_GUIDE[btnType]) + ' ' +
        className
      }
    >
      {isLoading ? (
        <AiOutlineLoading className='animate-spin'/>
      ) : (
        <> 
          {children}
        </>
      )}
    </button>
  )
}