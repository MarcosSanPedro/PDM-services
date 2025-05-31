import { motion } from 'motion/react';
import { FileText, Users, Scale, Landmark, Calculator, FileCheck2, MessageCircle, IdCard, HeartHandshake } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Users,
    title: 'Peticiones Familiares',
    description: 'Reúnete con tus seres queridos a través de nuestros completos servicios de inmigración familiar.',
    image: 'images/6.jpg',
    whatsappMessage: '¡Hola! Me gustaría hacer una consulta sobre los servicios de Petición Familiar.'
  },
  {
    icon: Scale,
    title: 'Asilo Político',
    description: 'Apoyo en el correcto llenado de la solicitud de asilo político.',
    image: 'images/3.jpg',
    whatsappMessage: '¡Hola! Necesito información sobre los servicios de Asilo.'
  },
  {
    icon: Landmark,
    title: 'Ciudadanía',
    description: 'Navega el camino hacia la ciudadanía estadounidense con nuestro equipo experimentado.',
    image: 'images/2.jpg',
    whatsappMessage: '¡Hola! Me gustaría aprender más sobre el proceso de Ciudadanía.'
  },
  {
    icon: Calculator,
    title: 'Servicios de Impuestos',
    description: 'Preparación y planificación profesional de impuestos para individuos y empresas.',
    image: 'images/7.jpg',
    whatsappMessage: '¡Hola! Necesito ayuda con los servicios de impuestos.'
  },
  {
    icon: FileCheck2,
    title: 'Notary Public Services',
    description: 'Servicios de Certified Notary para todas tus necesidades de documentación.',
    image: 'images/4.jpg',
    whatsappMessage: '¡Hola! Necesito Notary Public Services.'
  },
  {
    icon: FileText,
    title: 'Permisos de Trabajo',
    description: 'Procesamiento simplificado de autorizaciones de trabajo y visas de empleo.',
    image: 'images/1.jpg',
    whatsappMessage: '¡Hola! Me gustaría obtener información sobre el procesamiento de permisos de trabajo.'
  },
  {
    icon: HeartHandshake,
    title: 'Ajuste de Estatus',
    description: 'Cambia tu estatus migratorio y avanza hacia la residencia legal sin salir de EE.UU.',
    image: 'images/19.jpg',
    whatsappMessage: '¡Hola! Estoy interesado(a) en el proceso de Ajuste de Estatus.'
  },
  {
    icon: IdCard,
    title: 'Residencia Legal',
    description: 'Te guiamos en cada paso para obtener y mantener tu residencia permanente en Estados Unidos.',
    image: 'images/20.jpg',
    whatsappMessage: '¡Hola! Quiero saber más sobre cómo obtener la residencia legal. '
  },
  
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easing }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Soluciones integrales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Orientación experta en cada paso de tu proceso de inmigración
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/70 to-blue-900/40" />
              </div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex-1">
                  <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </div>

                {/* WhatsApp Button with Floating Message */}
                <div className="relative mt-6">
                  <motion.a
                    href={`https://wa.me/13059264581?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg group/button overflow-hidden"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-green-500 origin-left"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1 },
                        tap: { scaleX: 0.95 }
                      }}
                      transition={{ duration: 0.3, ease: easing }}
                    />
                    
                    <motion.span 
                      className="relative flex items-center text-white font-medium"
                      variants={{
                        hover: { x: 0 },
                        initial: { x: 0 }
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                     Escríbenos
                    </motion.span>

                    <motion.div
                      className="relative flex items-center"
                      initial={{ opacity: 0, x: 10 }}
                      variants={{
                        hover: { opacity: 1, x: 0 },
                        tap: { x: -2 }
                      }}
                      transition={{ duration: 0.3, ease: easing }}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </motion.div>
                  </motion.a>

                  {/* Floating Message Preview */}
                  <motion.div
                    className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-white rounded-lg shadow-lg pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    variants={{
                      hover: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.2, ease: easing }}
                  >
                    <div className="text-sm text-gray-600">{service.whatsappMessage}</div>
                    <div className="absolute bottom-0 left-4 w-2 h-2 -mb-2 rotate-45 bg-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;