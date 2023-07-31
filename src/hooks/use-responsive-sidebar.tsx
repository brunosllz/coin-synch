import { ResponsiveSidebarContext } from '@/contexts/responsive-sidebar'
import { useContext } from 'react'

export function useSidebarResponsive() {
  const context = useContext(ResponsiveSidebarContext)

  return context
}
