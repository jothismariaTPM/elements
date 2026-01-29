import React, { useRef } from "react";
import { assets } from "../assets/asset";
import { motion, useScroll, useTransform } from "framer-motion";


const Dropback_Images = [
  assets.image1,
  assets.image2,
  assets.image3,
  assets.image4,
  assets.image5,
  assets.image6,
  assets.image7,
  assets.image8,
  assets.image9,
  assets.image10,
  assets.image11,
  assets.image12
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Dropbacks = () => {
  const ref = useRef(null);

  // Scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // VERY subtle parallax (10px movement)
  const yParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto px-4 py-6 mt-10"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-semibold mb-6 tracking-wide font-['Cinzel']"
      >
        Gallery
      </motion.h2>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {Dropback_Images.map((img, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{ y: yParallax }}   // 👈 Parallax applied here
            className="group relative overflow-hidden shadow-md rounded-lg"
          >
            <img
              src={img}
              alt={`dropback-${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-150"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dropbacks;
