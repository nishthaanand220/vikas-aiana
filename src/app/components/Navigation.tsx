import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Our Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Travel", href: "#travel" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#")}
            className={`text-xl md:text-2xl transition-colors ${
              isScrolled ? "text-[#8B3A3A]" : "text-white"
            }`}
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}
          >
            V & A
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm hover:text-[#D4A574] transition-colors ${
                  isScrolled ? "text-[#3D3D3D]" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-[#3D3D3D]" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl text-[#3D3D3D] hover:text-[#D4A574] transition-colors"
                  style={{ fontFamily: 'Cormorant, serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
