import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    name: "Morning Pheras",
    date: "18th October 2026",
    time: "9:00 AM - 1:00 PM",
    venue: "The Grand Palace, Rohtak",
    dress: "Traditional Indian",
    description: "The sacred ceremony where we take our vows and begin our journey together as one.",
    color: "#D4A574",
  },
  {
    name: "Evening Reception",
    date: "18th October 2026",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, The Grand Palace",
    dress: "Formal / Evening Wear",
    description: "Join us for an elegant evening of dinner, dancing, and celebration as newlyweds.",
    color: "#A7C4A0",
  },
];

export default function WeddingEvents() {
  return (
    <section id="events" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Wedding Events
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Join us in celebrating these beautiful traditions and moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FAF7F4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="h-3"
                style={{ backgroundColor: event.color }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#D4A574]" />
                  <h3 className="text-2xl">{event.name}</h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <Calendar className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                    <span className="text-[#3D3D3D]">{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                    <span className="text-[#3D3D3D]">{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                    <span className="text-[#3D3D3D]">{event.venue}</span>
                  </div>
                </div>

                <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-4 border-t border-[#D4A574]/20">
                  <p className="text-xs text-[#6B6B6B] mb-1">Dress Code</p>
                  <p className="text-sm text-[#3D3D3D]">{event.dress}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
