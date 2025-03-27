import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "https://source.unsplash.com/1600x900/?fashion",
  "https://source.unsplash.com/1600x900/?shoes",
  "https://source.unsplash.com/1600x900/?clothing",
  "https://source.unsplash.com/1600x900/?electronics",
  "https://source.unsplash.com/1600x900/?accessories",
];

export default function ImageScroller() {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        ref={containerRef}
        className="flex w-max"
        animate={{ x: [0, -100, -200, -300, -400, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="scrolling banner"
            className="w-screen h-auto flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
