import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

import { Input } from './ui/input'
import { Lock } from '@/assets/lock'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from './ui/button'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="flex items-center rounded-md border border-secondary-300 px-4 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-offset-2">
        <Lock />
        <Input
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          placeholder="Password"
          className={cn(
            'border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0',
            className,
          )}
          {...props}
        />
        <Button
          variant="ghost"
          className="hover:bg-secondary-100"
          size="icon"
          type="button"
          onClick={() => setShowPassword((state) => !state)}
        >
          {showPassword ? (
            <EyeOff size={18} className="text-secondary-300" />
          ) : (
            <Eye size={18} className="text-secondary-300" />
          )}
        </Button>
      </div>
    )
  },
)

InputPassword.displayName = 'InputPassword'
