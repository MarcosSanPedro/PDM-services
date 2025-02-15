import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Katherine Ulloa Silva",
    content: "Hey everyone, I just received my SSN and working permit. I am so thankful to God and PDM for guiding me through this process, it's been 6 months and everything is working out. We just have to be patient and have a good lawyer like German. I definitely recommend PDM for you.",
    rating: 5
  },
  {
    name: "Ivania Castellon",
    content: "Super recommended they helped me write my asylum!! And thank God and them I got my asylum.. cheer up my people if you can my people apply that PD IMMIGRATION SERVICE if it complies 😍",
    rating: 5
  },
  {
    name: "Kefren Loasiga",
    content: "Excelente servicio, muy amable, gracias x ayudarme a tramitar mis documentos 🇳🇮 🇺🇲 💯 % recomendado.",
    rating: 5
  },
  {
    name: "Jose Pereira",
    content: "Excelente servicio, lo recomiendo una persona responsable, amable y legal, los nicaragüenses tenemos que apoyarnos entre nosotros.",
    rating: 5
  },
  {
    name: "Sujeilyng Palma",
    content: "Un excelente servicio, rápido, eficacia, el es una gran persona, humilde, respetuoso, responsable. Totalmente recomendado para hacer sus trámites migratorios ❤ Germán zeledon",
    rating: 5
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Historias de éxito de clientes
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experiencias reales de personas que confiaron en nosotros para su proceso de inmigración
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows - Fixed positioning */}
          <div className="absolute inset-0 flex items-center justify-between z-20 px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg text-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg text-blue-900 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          </div>

          <div className="overflow-hidden">
            <div className="relative h-[400px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm">
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center mb-6"
                      >
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </motion.div>
                      <motion.blockquote 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-800 mb-8 font-light italic"
                      >
                        "{testimonials[current].content}"
                      </motion.blockquote>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-semibold text-lg text-blue-900"
                      >
                        {testimonials[current].name}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;