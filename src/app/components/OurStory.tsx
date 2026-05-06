import { motion } from "motion/react";
import { Heart, Plane, Users, MapPin, FileText } from "lucide-react";

const milestones = [
  {
    icon: Heart,
    title: "First Meet",
    date: "July 2025",
    description: "Our paths crossed and what started as a casual conversation turned into hours of laughter and connection.",
  },
  {
    icon: Plane,
    title: "First Trip",
    date: "November 2025",
    description: "Our first adventure together. We discovered our shared love for travel and exploring new places.",
  },
  {
    icon: Users,
    title: "Friends Meeting",
    date: "January 2026",
    description: "Introduced each other to our closest friends. It felt like we had all known each other for years.",
  },
  {
    icon: MapPin,
    title: "2nd Trip",
    date: "February 2026",
    description: "Another beautiful getaway that brought us even closer together, creating memories that will last a lifetime.",
  },
  {
    icon: FileText,
    title: "Registering for Marriage",
    date: "April 2026",
    description: "Making it official! We took the next big step towards forever.",
  },
];

export default function OurStory() {
  return (
    <section id="story" className="py-16 md:py-24 px-4 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Our Love Story
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4A574]/30" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 md:mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-[#F5E6E0] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D4A574]" />
                      </div>
                      <h3 className="text-2xl">{milestone.title}</h3>
                    </div>
                    <p className="text-[#D4A574] mb-3">{milestone.date}</p>
                    <p className="text-[#6B6B6B] leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4A574] border-4 border-white shadow-lg" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
