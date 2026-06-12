import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0e27]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            DK
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === "#home") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-3 text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === "#home") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-center shadow-lg shadow-purple-500/30"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
