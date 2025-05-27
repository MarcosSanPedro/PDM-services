import { useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Heart, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mainRef, mainInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px'
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const values = [
    {
      icon: Heart,
      title: "Servicio con empatía",
      description: "Entendemos el viaje emocional de la inmigración y brindamos un apoyo cercano en cada paso del proceso."
    },
    {
      icon: Shield,
      title: "Experiencia confiable",
      description: "Más de 7 años de experiencia en leyes de inmigración, garantizando que tu caso sea manejado con precisión y cuidado."
    },
    {
      icon: BookOpen,
      title: "Comunicación clara",
      description: "Explicamos procesos complejos en términos sencillos, manteniéndote informado y con confianza."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Familias Unidas',
      description: 'Familias reunificadas con éxito a través de fronteras'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Tasa de éxito',
      description: 'Historial comprobado de excelencia'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Soporte',
      description: 'Siempre aquí cuando nos necesites'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div ref={mainRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="images/PDM.jpg"
                alt="Immigration Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>

          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Somos más que un servicio de inmigración
            </h2>
            <p className="text-xl text-gray-600">
              Entendemos que el proceso de inmigración puede ser abrumador y costoso. Por eso, nos enorgullece ofrecer tarifas accesibles, asegurando que tus traducciones y servicios no cuesten más de lo necesario.
            </p>
            <p className="text-lg text-gray-600">
              Con amplios conocimientos de la ley de inmigración y experiencia en el llenado de aplicaciones de inmigración para la comunidad inmigrante, brindando un servicio de calidad, dando respuestas rápidas porque entendemos que en estos casos, el tiempo es dinero.
            </p>
            <a
              href='tel:+1(305) 926-4581'
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hacer una Consulta
            </a>
          </motion.div>
        </div>

        {/* Values Section */}
        <div id='nosotros' ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:translate-y-[-5px] transition-transform"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-blue-600 rounded-xl p-8 text-center text-white hover:scale-105 transition-transform"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;