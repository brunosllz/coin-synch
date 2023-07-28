import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex max-h-12 w-full rounded-md border border-secondary-300 bg-white p-4 text-text-base ring-offset-white placeholder:text-secondary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
