import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: [] as string[],
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const events = ["Morning Pheras", "Evening Reception"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const toggleEvent = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      attending: prev.attending.includes(event)
        ? prev.attending.filter((e) => e !== event)
        : [...prev.attending, event],
    }));
  };

  return (
    <section id="rsvp" className="py-16 md:py-24 px-4 bg-[#FAF7F4]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            RSVP
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            We would be honored by your presence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-6">
            <div>
              <label className="block mb-2 text-[#3D3D3D]">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-[#D4A574]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] bg-[#FAF7F4]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#3D3D3D]">Number of Guests</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 border border-[#D4A574]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] bg-[#FAF7F4]"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-3 text-[#3D3D3D]">Which events will you attend?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {events.map((event) => (
                  <button
                    key={event}
                    type="button"
                    onClick={() => toggleEvent(event)}
                    className={`px-4 py-3 rounded-xl border-2 transition-all ${
                      formData.attending.includes(event)
                        ? "bg-[#D4A574] border-[#D4A574] text-white"
                        : "border-[#D4A574]/30 text-[#3D3D3D] hover:border-[#D4A574]"
                    }`}
                  >
                    {event}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-[#3D3D3D]">Dietary Preferences</label>
              <textarea
                value={formData.dietary}
                onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                className="w-full px-4 py-3 border border-[#D4A574]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] bg-[#FAF7F4] resize-none"
                rows={3}
                placeholder="Please let us know if you have any dietary restrictions"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#D4A574] text-white rounded-xl hover:bg-[#C49564] transition-colors flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Confirmed!
                </>
              ) : (
                "Confirm Attendance"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
