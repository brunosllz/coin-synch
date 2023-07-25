'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '@/hooks/use-breakpoints'
import { debounce } from 'lodash'

import { CardContentType } from './card-list'
import { Card } from './card'

interface DraggableCardListProps {
  content: CardContentType
}

export function DraggableList({ content }: DraggableCardListProps) {
  const [node, setNode] = useState<HTMLElement>()
  const [dragConstraintLeft, setDragConstraintLeft] = useState(0)
  const { isSm } = useBreakpoint('sm')

  const containerRef = useCallback((node: HTMLElement | null) => {
    if (!node) return

    setNode(node)
  }, [])

  useEffect(() => {
    if (!node) return

    const handleResize = debounce(() => {
      setDragConstraintLeft(node.scrollWidth - node.clientWidth)
    }, 300)

    handleResize()

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(node)

    return () => resizeObserver.disconnect()
  }, [node, isSm])

  return (
    <>
      {content.map((item, index) => {
        return (
          <div key={index} className="visible w-full overflow-hidden sm:hidden">
            <motion.ul
              key={index}
              ref={containerRef}
              className="flex flex-row gap-4"
              drag="x"
              dragConstraints={{
                right: 0,
                left: -dragConstraintLeft,
              }}
            >
              <div className="flex gap-4">
                {item.top.map((item) => {
                  return <Card key={item.id} props={item} />
                })}
              </div>

              <div className="flex gap-4">
                {item.bottom.map((item) => {
                  return <Card key={item.id} props={item} />
                })}
              </div>
            </motion.ul>
          </div>
        )
      })}
    </>
  )
}
