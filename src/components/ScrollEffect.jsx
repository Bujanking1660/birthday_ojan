import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

export default function ScrollEffect() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [400, -750]);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // jalankan efek 300ms setelah page load
    const timer = setTimeout(() => setShowTitle(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
        h-[400vh] text-white relative overflow-hidden
        bg-gray-900               /* default desktop */
        bg-[url('/awan.jpg')]     /* tambahkan gambar background */
        bg-no-repeat bg-cover bg-center
        md:bg-none                /* hilangkan gambar di layar >= md */
      "
    >
      <Navbar />
      {/* SECTION 1 */}
      <section className="h-screen flex justify-center items-center text-5xl font-bold">
        <motion.div
          style={{ y: y1 }}
          className="relative text-center flex justify-center items-center h-dvh"
        >
          <h1
            className={`
                text-4xl font-extrabold text-yellow-400
                transition-all duration-1000 ease-out
                text-center leading-tight whitespace-pre-line
                ${
                  showTitle
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
          >
            {"Today is\nAurel's Day!!!"}
          </h1>
        </motion.div>
      </section>
      {/* SECTION 2 */}
      <section className="h-screen flex justify-center items-center relative">
        <motion.h1
          className="text-6xl font-extrabold text-yellow-400 absolute"
          style={{ x: x2 }}
        >
          Bergerak saat scroll 😎
        </motion.h1>
      </section>
    </div>
  );
}
