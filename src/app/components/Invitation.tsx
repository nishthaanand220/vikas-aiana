import { motion } from "motion/react";
import { Download, Share2 } from "lucide-react";
import { useState } from "react";

export default function Invitation() {
  const [shareText, setShareText] = useState("Share Invitation");

  const handleShare = async () => {
    const shareData = {
      title: 'Vikas & Aiana Wedding Invitation',
      text: 'Join us to celebrate the wedding of Vikas and Aiana!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareText("Link Copied!");
        setTimeout(() => setShareText("Share Invitation"), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };
  return (
    <section id="invitation" className="py-16 md:py-24 px-4 bg-[#F5E6E0]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Wedding Invitation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-8 border-[#D4A574]/30"
        >
          <div className="text-center space-y-6">
            <div className="text-6xl mb-6">🕉️</div>

            <p className="text-sm text-[#6B6B6B] tracking-widest uppercase">
              Together with their families
            </p>

            <div className="my-8">
              <h1 className="mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 300, lineHeight: 1.2 }}>
                Vikas
              </h1>
              <p className="text-4xl text-[#D4A574] my-4">&</p>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 300, lineHeight: 1.2 }}>
                Aiana
              </h1>
            </div>

            <p className="text-xl md:text-2xl" style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic' }}>
              Request the honor of your presence<br />
              at their wedding ceremony
            </p>

            <div className="my-8 py-8 border-t border-b border-[#D4A574]/30">
              <p className="text-lg mb-2">
                <strong>18th October, 2026</strong>
              </p>
              <p className="text-base text-[#6B6B6B] mb-4">
                6:00 AM onwards
              </p>
              <p className="text-lg">
                The Grand Palace
              </p>
              <p className="text-base text-[#6B6B6B]">
                Rohtak, Haryana
              </p>
            </div>

            <p className="text-sm text-[#6B6B6B] italic">
              "Two souls, one heart, united in love"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="/invitation.png" 
                download="Vikas_Aiana_Wedding_Invitation.png"
                className="px-6 py-3 bg-[#D4A574] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#C49564] transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Invitation
              </a>
              <button 
                onClick={handleShare}
                className="px-6 py-3 bg-[#A7C4A0] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#96B38F] transition-colors"
              >
                <Share2 className="w-4 h-4" />
                {shareText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
