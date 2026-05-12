import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from 'framer-motion'

const CursorContext = createContext(null)

export const CursorProvider = ({ children, global = false }) => {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef(null)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (global) {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }

    if (global) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [global, mouseX, mouseY])

  const onMouseMove = (e) => {
    if (!global && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <CursorContext.Provider value={{ x, y, mouseX, mouseY, isHovering, setIsHovering }}>
      <div 
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full h-full"
      >
        {children}
      </div>
    </CursorContext.Provider>
  )
}

export const Cursor = () => {
  // Dot removed as per user request
  return null
}

export const CursorFollow = ({ children, side = 'bottom', sideOffset = 15, align = 'end', alignOffset = 5 }) => {
  const context = useContext(CursorContext)
  if (!context) return null
  const { x, y, mouseX, isHovering } = context

  // Wobble effect based on velocity
  const velocityX = useVelocity(mouseX)
  const rotate = useTransform(velocityX, [-1000, 1000], [-15, 15])
  const springRotate = useSpring(rotate, { damping: 15, stiffness: 100 })

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        x,
        y,
        rotate: springRotate,
        pointerEvents: 'none',
        zIndex: 50,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isHovering ? 1 : 0,
        scale: isHovering ? 1 : 0.8
      }}
    >
      <div 
        className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white/70 shadow-2xl whitespace-nowrap"
        style={{
          transform: `translate(${align === 'end' ? alignOffset : -alignOffset}px, ${side === 'bottom' ? sideOffset : -sideOffset}px)`
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
