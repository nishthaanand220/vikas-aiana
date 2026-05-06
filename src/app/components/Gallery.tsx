import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import image2 from "../../imports/image copy 2.png";
import image3 from "../../imports/image copy 3.png";
import image4 from "../../imports/image copy 4.png";
import image5 from "../../imports/image copy 5.png";
import image6 from "../../imports/image copy 6.png";

export default function Gallery() {
  const images = [
    { id: 1, alt: "Couple photo 1", src: image2 },
    { id: 2, alt: "Couple photo 2", src: image3 },
    { id: 3, alt: "Couple photo 3", src: image4 },
    { id: 4, alt: "Couple photo 4", src: image5 },
    { id: 5, alt: "Couple photo 5", src: image6 },
    { id: 6, alt: "Couple photo 6", src: image3 },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300 }}>
            Our Moments
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Capturing the beautiful journey of our love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
