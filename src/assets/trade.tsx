import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

type TradeProps = SVGProps<SVGSVGElement>

export function Trade({ className, ...props }: TradeProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g className={cn('stroke-secondary-500', className)}>
        <path
          d="M5.333 2.667l-1 1M4.333 1.667l1 1M4 2.667a2 2 0 00-2 2M4 2.667h1.333M10.666 13.334l1-1M11.666 14.334l-1-1M12 13.334a2 2 0 002-2M12 13.333h-1.334"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          clipRule="evenodd"
          d="M6.333 13.333A3.677 3.677 0 0010 9.667 3.677 3.677 0 006.333 6a3.677 3.677 0 00-3.667 3.667c0 .822.279 1.582.74 2.194a3.66 3.66 0 002.927 1.472z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.26 3.74a3.677 3.677 0 010 5.186c-.115.114-.24.21-.365.302M12.26 3.74a3.677 3.677 0 00-5.186 0c-.113.114-.21.237-.305.362"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
