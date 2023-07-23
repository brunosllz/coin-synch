'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import imageHero from '@/assets/hero-image.png'
import imageHero1 from '@/assets/hero-image-1.png'
import imageHero2 from '@/assets/hero-image-2.png'

export function Slider() {
  const [contentSliderWidth, setContentSliderWidth] = useState(0)

  const sliderContainer = useRef<HTMLDivElement | null>(null)
  const sliderContent = useRef<HTMLImageElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sliderContainer,
    offset: ['start start', 'end start'],
  })

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.42],
    [0, -contentSliderWidth],
    {
      clamp: false,
    },
  )

  const ImageOneOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.5])
  const ImageTwoOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [0.5, 1, 0.5],
  )
  const ImageThreeOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [0.5, 0.5, 1],
  )

  useEffect(() => {
    if (sliderContent.current) {
      setContentSliderWidth(sliderContent.current.offsetWidth)
    }
  }, [])

  return (
    <div ref={sliderContainer} className="flex overflow-hidden">
      <motion.div className="flex gap-10" style={{ x: translateX }}>
        <motion.div
          className="flex h-[499px] w-[464px] items-center justify-center transition-colors"
          style={{ opacity: ImageOneOpacity }}
        >
          <Image
            className="h-full w-full object-cover"
            ref={sliderContent}
            src={imageHero}
            alt=""
            width={464}
            height={499}
          />
        </motion.div>

        <motion.div
          className="flex h-[499px] w-[464px] items-center justify-center transition-colors"
          style={{ opacity: ImageTwoOpacity }}
        >
          <Image
            className="h-full w-full object-cover"
            src={imageHero1}
            alt=""
            width={464}
            height={499}
          />
        </motion.div>

        <motion.div
          className="flex h-[499px] w-[464px] items-center justify-center transition-colors"
          style={{ opacity: ImageThreeOpacity }}
        >
          <Image
            className="h-full w-full object-cover"
            src={imageHero2}
            alt=""
            width={464}
            height={499}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
