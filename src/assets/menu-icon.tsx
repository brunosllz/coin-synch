import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

type TradeProps = SVGProps<SVGSVGElement>

export function MenuIcon({ className, ...props }: TradeProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g className={cn('stroke-secondary-500', className)}>
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.25 11.9999H16.75"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.25 15.25H16.75"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.25 8.75H16.75"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}
