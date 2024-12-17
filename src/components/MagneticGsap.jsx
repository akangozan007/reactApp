'use client'
import React, {useEffect, useRef} from 'react'
import gsap from 'gsap-trial'

export default function MagneticGSApp({children}) {
  const magnetic = useRef(null)

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const rotate = gsap.quickTo(magnetic.current, 'rotate', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })

    const handleMouseMove = (e) => {
      const {clientX, clientY} = e
      const {height, width, left, top} =
        magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)

      xTo(x)
      yTo(y)
      rotate(10)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
      rotate(0)
    }

    magnetic.current.addEventListener('mousemove', handleMouseMove)
    magnetic.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      magnetic.current.removeEventListener('mousemove', handleMouseMove)
      magnetic.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return React.cloneElement(children, {ref: magnetic})
}
