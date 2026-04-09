"use client"

import { useEffect, useState } from "react"

const words = ["Cell", "Internet", "Power"]

export function AnimatedHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[currentIndex]

    if (isTyping) {
      if (charIndex < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 120)
        return () => clearTimeout(typingTimeout)
      } else {
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(pauseTimeout)
      }
    } else {
      if (charIndex > 0) {
        const erasingTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 80)
        return () => clearTimeout(erasingTimeout)
      } else {
        const nextWordTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length)
          setIsTyping(true)
        }, 500)
        return () => clearTimeout(nextWordTimeout)
      }
    }
  }, [charIndex, isTyping, currentIndex])

  return (
    <div className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-mw-light-gray mb-8 flex flex-wrap items-center justify-center">
      <span>No&nbsp;</span>
      <span className="relative inline-block">
        <span
          className="inline-block text-mw-cyan"
          style={{
            textShadow: "1px 1px 0px #00d4ff, 0 0 5px #00d4ff",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {displayedText}
          <span className="animate-pulse ml-1">|</span>
        </span>
      </span>
      <span>&nbsp;Needed</span>
    </div>
  )
}
