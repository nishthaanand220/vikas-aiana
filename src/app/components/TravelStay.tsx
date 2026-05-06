import { motion } from "motion/react";
import { Hotel, MapPin, Car, Phone } from "lucide-react";

const hotels = [
  {
    name: "Hotel Grand Residency",
    distance: "2 km from venue",
    phone: "+91 1262 123 456",
    description: "Luxury stay with modern amenities",
  },
  {
    name: "The Heritage Inn",
    distance: "3 km from venue",
    phone: "+91 1262 234 567",
    description: "Traditional hospitality with comfort",
  },
  {
    name: "Park Plaza Rohtak",
    distance: "4 km from venue",
    phone: "+91 1262 345 678",
    description: "Premium rooms and services",
  },
];

export default function TravelStay() {
  return (
    <section id="travel" className="py-16 md:py-24 px-4 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Travel & Stay
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Information for our outstation guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="w-8 h-8 text-[#D4A574]" />
              <h3 className="text-2xl">Recommended Hotels</h3>
            </div>

            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <div key={index} className="p-4 bg-[#FAF7F4] rounded-xl">
                  <h4 className="mb-2">{hotel.name}</h4>
                  <div className="space-y-1 text-sm text-[#6B6B6B]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{hotel.phone}</span>
                    </div>
                    <p className="mt-2">{hotel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-8 h-8 text-[#D4A574]" />
              <h3 className="text-2xl">Getting There</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">✈️</span>
                  By Air
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Nearest airport: Indira Gandhi International Airport, Delhi (70 km)
                  <br />
                  <span className="text-[#D4A574]">~1.5 hours drive to Rohtak</span>
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚂</span>
                  By Train
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Rohtak Junction is well connected to major cities
                  <br />
                  <span className="text-[#D4A574]">Local cabs available from station</span>
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  By Road
                </h4>
                <p className="text-sm text-[#6B6B6B]">
                  Well connected via NH 9 and NH 71
                  <br />
                  <span className="text-[#D4A574]">Ample parking at venue</span>
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4A574]/20">
                <a 
                  href="https://maps.google.com/?q=The+Grand+Palace,+Rohtak,+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#A7C4A0] text-center text-white rounded-xl hover:bg-[#96B38F] transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg aspect-video flex items-center justify-center overflow-hidden"
        >
          <iframe 
            src="https://maps.google.com/maps?q=The%20Grand%20Palace,%20Rohtak,%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
