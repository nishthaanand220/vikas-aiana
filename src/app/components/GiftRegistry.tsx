import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, X, CreditCard, Landmark, Smartphone } from "lucide-react";
import { useState } from "react";
import eiffelTowerImage from "../../imports/eiffel_tower.png";
import northernLightsImage from "../../imports/northern_lights.png";

interface Gift {
  name: string;
  description: string;
  image: string;
}

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const copyUPI = () => {
    navigator.clipboard.writeText("vikas.aiana@upi");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 1500);
  };

  const closePaymentModal = () => {
    setSelectedGift(null);
    setTimeout(() => {
      setPaymentStatus('idle');
      setPaymentMethod('card');
    }, 300); // Wait for exit animation
  };

  const gifts: Gift[] = [
    {
      name: "Roland V-Drums VAD716",
      description: "Help us build our dream music studio with the VAD716 Electronic Drum Set",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80",
    },
    {
      name: "Dinner at Eiffel Tower",
      description: "Dinner featuring seasonal produce on the first floor of the iconic monument in Paris",
      image: eiffelTowerImage,
    },
    {
      name: "Bali Scuba Diving",
      description: "Beginner scuba diving experience exploring the beautiful marine life in Bali",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    },
    {
      name: "Northern Lights Trip",
      description: "A perfect 7-nights Northern Lights trip package for an unforgettable honeymoon",
      image: northernLightsImage,
    }
  ];

  return (
    <section id="gifts" className="py-16 md:py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Gift Registry
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with a gift, here are some experiences we're dreaming of!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FAF7F4] rounded-2xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 w-full relative">
                <img 
                  src={gift.image} 
                  alt={gift.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl mb-2 text-center">{gift.name}</h3>
                <p className="text-[#6B6B6B] mb-8 text-center text-sm flex-1">
                  {gift.description}
                </p>

                <div className="mt-auto text-center">
                  <button
                    onClick={() => setSelectedGift(gift)}
                    className="inline-block px-8 py-3 bg-[#D4A574] text-white rounded-full hover:bg-[#C49564] transition-colors w-full"
                  >
                    Contribute to Gift
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#F5E6E0] rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-md"
        >
          <div className="w-16 h-16 bg-[#A7C4A0] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
          </div>
          <h3 className="text-2xl mb-3">UPI Transfer</h3>
          <p className="text-[#6B6B6B] mb-4">
            For general monetary blessings
          </p>
          <div className="flex items-center justify-center gap-2 bg-white rounded-xl p-4 mb-4 max-w-sm mx-auto">
            <code className="text-sm">vikas.aiana@upi</code>
            <button
              onClick={copyUPI}
              className="p-2 hover:bg-[#FAF7F4] rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#A7C4A0]" />
              ) : (
                <Copy className="w-4 h-4 text-[#6B6B6B]" />
              )}
            </button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[#6B6B6B] mt-8 italic"
        >
          Your love and blessings mean the world to us
        </motion.p>
      </div>

      {/* Dummy Payment Modal */}
      <AnimatePresence>
        {selectedGift && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePaymentModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#FAF7F4]">
                <h3 className="text-xl font-medium text-[#3D3D3D]">Secure Payment</h3>
                <button 
                  onClick={closePaymentModal}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                {paymentStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-500 mb-8">
                      Thank you for contributing to our <span className="font-medium text-gray-800">{selectedGift.name}</span>. Your gift means the world to us!
                    </p>
                    <button
                      onClick={closePaymentModal}
                      className="w-full py-3 bg-[#D4A574] text-white rounded-xl hover:bg-[#C49564] transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="bg-[#FAF7F4] p-4 rounded-xl border border-[#E8DCCB] mb-6">
                      <p className="text-sm text-[#8A7156] font-medium mb-1">Paying for:</p>
                      <p className="text-lg text-[#3D3D3D] font-medium">{selectedGift.name}</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Contribution Amount (₹)</label>
                      <input 
                        type="number" 
                        required
                        min="100"
                        placeholder="e.g. 5000"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">Payment Method</label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`flex flex-col items-center justify-center p-3 border rounded-xl gap-2 transition-all ${
                            paymentMethod === 'card' 
                              ? 'border-[#D4A574] bg-[#FAF7F4] text-[#D4A574]' 
                              : 'border-gray-200 text-gray-500 hover:border-gray-300'
                          }`}
                        >
                          <CreditCard className="w-6 h-6" />
                          <span className="text-xs font-medium">Card</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('upi')}
                          className={`flex flex-col items-center justify-center p-3 border rounded-xl gap-2 transition-all ${
                            paymentMethod === 'upi' 
                              ? 'border-[#D4A574] bg-[#FAF7F4] text-[#D4A574]' 
                              : 'border-gray-200 text-gray-500 hover:border-gray-300'
                          }`}
                        >
                          <Smartphone className="w-6 h-6" />
                          <span className="text-xs font-medium">UPI</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('netbanking')}
                          className={`flex flex-col items-center justify-center p-3 border rounded-xl gap-2 transition-all ${
                            paymentMethod === 'netbanking' 
                              ? 'border-[#D4A574] bg-[#FAF7F4] text-[#D4A574]' 
                              : 'border-gray-200 text-gray-500 hover:border-gray-300'
                          }`}
                        >
                          <Landmark className="w-6 h-6" />
                          <span className="text-xs font-medium">Bank</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      {paymentMethod === 'card' && (
                        <>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500">Card Number</label>
                            <input type="text" placeholder="0000 0000 0000 0000" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#D4A574] outline-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-xs font-medium text-gray-500">Expiry</label>
                              <input type="text" placeholder="MM/YY" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#D4A574] outline-none" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-medium text-gray-500">CVV</label>
                              <input type="password" placeholder="***" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#D4A574] outline-none" />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {paymentMethod === 'upi' && (
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-gray-500">UPI ID</label>
                          <input type="text" placeholder="username@upi" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#D4A574] outline-none" />
                        </div>
                      )}

                      {paymentMethod === 'netbanking' && (
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-gray-500">Select Bank</label>
                          <select required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#D4A574] outline-none bg-white">
                            <option value="">Select your bank...</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={paymentStatus === 'processing'}
                      className="w-full py-3.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium flex items-center justify-center disabled:opacity-70"
                    >
                      {paymentStatus === 'processing' ? 'Processing...' : 'Pay Now'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
