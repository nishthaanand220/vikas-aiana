import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import coupleImage from "../../imports/image copy.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${coupleImage})`,
        }}
      />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl mb-4 tracking-widest opacity-90">We're Getting Married</p>
          <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 300, lineHeight: 1.2 }}>
            Vikas <span className="opacity-70">&</span> Aiana
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-base md:text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>October 2026</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/40" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Rohtak, Haryana</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90" style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic' }}>
            Celebrating Love & Togetherness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("invitation")}
              className="px-8 py-4 bg-white text-[#8B3A3A] rounded-full hover:bg-opacity-90 transition-all"
            >
              View Invitation
            </button>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#8B3A3A] transition-all"
            >
              RSVP Now
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
