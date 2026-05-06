import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-10-20T06:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#8B3A3A] to-[#6B2A2A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
            Counting Down to Forever
          </h2>

          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <div className="text-3xl md:text-5xl mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Quick Links</h3>
            <div className="space-y-2 text-sm opacity-90">
              <button onClick={() => scrollToSection("story")} className="block hover:text-[#D4A574] transition-colors">Our Story</button>
              <button onClick={() => scrollToSection("events")} className="block hover:text-[#D4A574] transition-colors">Events</button>
              <button onClick={() => scrollToSection("gallery")} className="block hover:text-[#D4A574] transition-colors">Gallery</button>
              <button onClick={() => scrollToSection("rsvp")} className="block hover:text-[#D4A574] transition-colors">RSVP</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Contact</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>Vikas: +91 88828 11899</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>Aiana: +91 91381 77648</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <span>vikas.aiana@wedding.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#D4A574] fill-[#D4A574]" />
            <span>for Vikas & Aiana</span>
          </div>
          <p className="mt-2 text-xs opacity-60">© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
