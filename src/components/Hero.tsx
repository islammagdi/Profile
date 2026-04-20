import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { memo, useCallback } from "react";

export const Hero = memo(() => {
  const scrollToAbout = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  return (
    <section
      id="home"
      data-section="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="relative mb-8">
            <div className="relative overflow-hidden">
              {/* Creative - Modern elegant style */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <span
                  className="block text-4xl md:text-6xl lg:text-7xl font-extralight text-white/90 tracking-[0.2em] mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.15em",
                  }}
                >
                  Creative
                </span>
              </motion.div>

              {/* UI/UX Designer - Bold statement style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="relative mt-4"
              >
                <div className="relative inline-block">
                  <span
                    className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent leading-tight"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    UX/UI Designer
                  </span>

                  {/* Animated accent dots */}
                  <motion.div
                    className="absolute -right-4 top-0 flex flex-col gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating geometric elements */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
                  style={{
                    filter: "blur(1px)",
                  }}
                />
              </motion.div>

              {/* Side decorative elements */}
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-purple-400 to-transparent" />
                  <div className="w-8 h-[1px] bg-gradient-to-r from-pink-400 to-transparent" />
                  <div className="w-6 h-[1px] bg-gradient-to-r from-purple-400 to-transparent" />
                </div>
              </motion.div>

              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/10 to-purple-500/5 blur-3xl -z-10 scale-150" />
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful digital experiences that connect
            brands with their audience through thoughtful design
            and user-centered solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://dribbble.com/imagdi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 40px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
            >
              View My Work
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1c5bDMwjRkYfd3q2kI2W8iW6vjEwGUxSp/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer inline-block"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Simplified Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-50" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-50" />
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/50 hover:text-white/80 transition-colors duration-300" />
      </motion.div>
    </section>
  );
});