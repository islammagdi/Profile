import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.location.hash = targetId;
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300"
      style={{
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        width: '100%',
        maxWidth: '100vw',
        right: 'auto'
      }}
    >
      <div className="w-[848px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
            style={{ fontFamily: 'Russo One, sans-serif' }}
            title="Back to Top"
          >
            Islam Magdi
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop Hire Me Button */}
          <motion.a
            href="https://wa.me/201140187813?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B%0A%D8%A3%D9%86%D8%A7%20%D9%85%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A3%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D9%85%D8%B5%D9%85%D9%85%20UI%2FUX%20%D9%81%D9%8A%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9.%0A%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A3%D9%83%D8%AA%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%20%D9%88%D9%83%D9%8A%D9%81%20%D9%86%D8%A8%D8%AF%D8%A3%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-black/30 backdrop-blur-2xl border-b border-white/20 shadow-lg z-40"
            style={{
              maxWidth: '100vw',
              right: 'auto',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-8 transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* Mobile Hire Me Button */}
              <motion.a
                href="https://wa.me/201140187813?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B%0A%D8%A3%D9%86%D8%A7%20%D9%85%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A3%D8%B4%D8%AA%D8%BA%D9%84%20%D9%85%D8%B9%20%D9%85%D8%B5%D9%85%D9%85%20UI%2FUX%20%D9%81%D9%8A%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9.%0A%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A3%D9%83%D8%AA%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%20%D9%88%D9%83%D9%8A%D9%81%20%D9%86%D8%A8%D8%AF%D8%A3%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={closeMenu}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center mt-6"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});