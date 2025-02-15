import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "¿Qué servicios de inmigración ofreces?",
    answer: "Ofrecemos una amplia gama de servicios de inmigración, que incluyen peticiones familiares, permisos de trabajo, solicitudes de asilo, servicios de ciudadanía y asistencia para la residencia permanente. Nuestro equipo brinda orientación personalizada a lo largo de tu proceso de inmigración."
  },
  {
    question: "¿Cuánto tiempo suele durar el proceso de inmigración?",
    answer: "El tiempo de procesamiento varía según el tipo de servicio de inmigración y los tiempos de procesamiento actuales. Durante tu consulta, te proporcionaremos un cronograma detallado basado en tu caso específico y te mantendremos actualizado a lo largo del proceso."
  },
  {
    question: "¿Qué documentos necesito para mi solicitud de inmigración?",
    answer: "Los documentos requeridos varían según el tipo de caso. En general, necesitarás documentos de identificación, prueba de relaciones para peticiones familiares, registros financieros y evidencia de apoyo. Te proporcionaremos una lista detallada de verificación durante tu consulta."
  },
  {
    question: "¿Ofrecen servicios de impuestos para inmigrantes?",
    answer: "Sí, ofrecemos servicios de impuestos especializados para inmigrantes, incluyendo preparación de impuestos para individuos y empresas, planificación fiscal y asistencia en cumplimiento. Nuestros especialistas en impuestos comprenden las necesidades únicas de los contribuyentes inmigrantes."
  },
  {
    question: "¿Cuáles son las tarifas de sus servicios notariales?",
    answer: "Nuestras tarifas de servicios notariales varían según el tipo y la cantidad de documentos. Ofrecemos tarifas competitivas y podemos proporcionar un desglose detallado de tarifas durante tu consulta. Disponemos de paquetes especiales para notarizaciones relacionadas con la inmigración."
  },
  {
    question: "¿Cómo puedo programar una consulta?",
    answer: "Puedes programar una consulta a través de nuestro sitio web, llamando a nuestra oficina o por WhatsApp. Ofrecemos consultas tanto presenciales como virtuales para adaptarnos a tu horario y preferencias."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
          Encuentra respuestas a preguntas frecuentes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
          ¿Aún tienes preguntas? ¡Estamos aquí para ayudarte!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Contáctanos</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;