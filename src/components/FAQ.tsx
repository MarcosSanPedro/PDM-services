import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What immigration services do you offer?",
    answer: "We offer a comprehensive range of immigration services including family petitions, work permits, asylum applications, citizenship services, and permanent residency assistance. Our team provides personalized guidance throughout your immigration journey."
  },
  {
    question: "How long does the immigration process typically take?",
    answer: "The timeline varies depending on the type of immigration service and current processing times. During your consultation, we'll provide a detailed timeline based on your specific case and keep you updated throughout the process."
  },
  {
    question: "What documents do I need for my immigration application?",
    answer: "Required documents vary by case type. Generally, you'll need identification documents, proof of relationships for family-based petitions, financial records, and supporting evidence. We'll provide a detailed checklist during your consultation."
  },
  {
    question: "Do you offer tax services for immigrants?",
    answer: "Yes, we provide specialized tax services for immigrants, including individual and business tax preparation, tax planning, and compliance assistance. Our tax specialists understand the unique needs of immigrant taxpayers."
  },
  {
    question: "What are your notary service fees?",
    answer: "Our notary service fees vary depending on the type and number of documents. We offer competitive rates and can provide a detailed fee schedule during your consultation. Special packages are available for immigration-related notarizations."
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation through our website, by calling our office, or via WhatsApp. We offer both in-person and virtual consultations to accommodate your schedule and preferences."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
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
            Still have questions? We're here to help!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Contact Us</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;