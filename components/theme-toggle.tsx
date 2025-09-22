"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted hover:bg-accent transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </motion.div>
      <span className="text-sm font-medium">{isDark ? "Dark" : "Light"}</span>
    </motion.button>
  )
}
