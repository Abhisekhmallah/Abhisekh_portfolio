"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Drop me a line", href: "#contact" },
]

export function Navigation() {
  return (
    <motion.nav
      className="flex items-center justify-between w-full px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <h1 className="text-lg font-medium text-foreground">Abhisekh Mallah</h1>
      </motion.div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.nav>
  )
}
