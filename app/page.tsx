"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { SpinningText } from "@/components/magicui/spinning-text"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity"
import { AuroraText } from "@/components/magicui/aurora-text"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="px-6 pt-32 md:pt-40 lg:pt-48 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh] lg:min-h-[50vh]">
            {/* Main Title */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Hello I am a
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <AuroraText> FullStack Developer</AuroraText>
                  </motion.span>
                </motion.h1>
              </motion.div>
            </div>

            {/* Description */}
            <div className="lg:col-span-4">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Specialized in Web Design,
                  <br />
                  UX / UI, Webflow, and Front
                  <br />
                  End Development.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-40 space-y-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {/* Scroll Velocity Section */}
            <section className="relative w-full">
              <ScrollVelocityContainer className="text-4xl md:text-7xl font-bold tracking-[-0.02em]">
                <ScrollVelocityRow baseVelocity={20} direction={1}>
                  Welcome To My Portfolio
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={20} direction={-1}>
                  Let's Build Something Great Together
                </ScrollVelocityRow>
              </ScrollVelocityContainer>
              {/* gradient masks left/right */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </section>

            {/* About Section */}
            <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate fullstack developer with expertise in modern web technologies. I create seamless
                  digital experiences that combine beautiful design with robust functionality.
                </p>
              </motion.div>

              {/* Right box with spinning text in top-right corner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-muted rounded-lg p-8 h-64 relative"
              >
                <div className="absolute top-4 right-4">
                  <SpinningText className="text-primary text-sm sm:text-base md:text-lg">
                    Let's Connect • And • Work Together •
                  </SpinningText>
                </div>
              </motion.div>
            </section>

            {/* Work Section */}
            <section id="work" className="space-y-8">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Work
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item, index) => (
                  <motion.div
                    key={item}
                    className="bg-muted rounded-lg p-8 h-64 hover:bg-accent transition-colors duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center text-muted-foreground">Project {item}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="space-y-8">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Process
              </motion.h2>
              <motion.div
                className="bg-muted rounded-lg p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center text-muted-foreground">Development process overview</div>
              </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center space-y-8 pb-24">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Drop me a line
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="mailto:abhisekhmallah9@gmail.com"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                </motion.a>
              </motion.div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
