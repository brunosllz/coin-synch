'use client'

import { useBreakpoint } from '@/hooks/use-breakpoints'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface ResponsiveSideBarProps {
  handleOpenClose: () => void
  isOpen: boolean
}

export const ResponsiveSidebarContext = createContext(
  {} as ResponsiveSideBarProps,
)

export function ResponsiveSidebarProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const { isXl } = useBreakpoint('xl')

  const handleOpenClose = useCallback(() => {
    setIsOpen((state) => !state)
  }, [])

  useEffect(() => {
    if (isXl) {
      setIsOpen(false)
    }
  }, [isXl])

  return (
    <ResponsiveSidebarContext.Provider value={{ handleOpenClose, isOpen }}>
      {children}
    </ResponsiveSidebarContext.Provider>
  )
}
