import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Green Card Recipient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "PDM Immigration Services made my dream of living in America a reality. Their dedication and expertise guided me through every step of the process.",
    rating: 5
  },
  {
    name: "Carlos Mendoza",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    content: "Their tax services are exceptional. They understand the unique needs of immigrant business owners and provide invaluable guidance.",
    rating: 5
  },
  {
    name: "Ana Sofia Perez",
    role: "Citizenship Applicant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "The citizenship process seemed daunting, but PDM's team made it smooth and stress-free. Their attention to detail is remarkable.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real experiences from people who trusted us with their immigration journey
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === current ? 1 : 0,
                    x: index === current ? 0 : 100,
                    position: index === current ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-800 mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="text-center md:text-left">
                        <div className="font-semibold text-lg text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;