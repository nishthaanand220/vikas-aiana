import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the dress code?",
    answer: "Each event has a specific dress code mentioned in the event details. For the wedding ceremony, traditional Indian attire is recommended. Feel free to embrace vibrant colors and traditional wear!",
  },
  {
    question: "Will transportation be provided?",
    answer: "Complimentary shuttle service will be available from recommended hotels to the venue for all events. Detailed timings will be shared closer to the date.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Please check your invitation for the number of guests allocated to you. If you have any questions, feel free to contact us directly.",
  },
  {
    question: "Are children welcome?",
    answer: "Absolutely! We love having children celebrate with us. Please mention the number of children in your RSVP so we can make appropriate arrangements.",
  },
  {
    question: "What time should I arrive?",
    answer: "We recommend arriving 30 minutes before the scheduled start time for each event. This will give you time to settle in and enjoy the pre-ceremony moments.",
  },
  {
    question: "Will there be vegetarian food options?",
    answer: "Yes, we will have a variety of vegetarian and non-vegetarian options. Please mention any specific dietary requirements in your RSVP.",
  },
  {
    question: "What COVID-19 precautions will be in place?",
    answer: "Your safety is our priority. We will follow all local guidelines and have sanitization stations available throughout the venue.",
  },
  {
    question: "Who can I contact for more information?",
    answer: "For any questions, please contact: Vikas at +91 98765 43210 or Aiana at +91 98765 43211. Our families are also happy to help!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Everything you need to know
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#FAF7F4] rounded-2xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-[#F5E6E0] transition-colors"
              >
                <span className="pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A574] flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 md:px-8 pb-5"
                >
                  <p className="text-[#6B6B6B] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
