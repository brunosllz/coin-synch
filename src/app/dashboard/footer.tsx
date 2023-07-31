import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type FooterProps = HTMLAttributes<HTMLElement>

export function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer
      className={cn(
        'hidden w-full shrink-0 items-center justify-center bg-white py-6 shadow-[0_10px_28px_-10px_hsla(206,22%,7%,.35),0_10px_15px_-15px_hsla(206,22%,7%,.2)] xl:flex ',
        className,
      )}
      {...rest}
    >
      <span className="text-sm">Copyright © 2022 - All rights reserved</span>
    </footer>
  )
}
