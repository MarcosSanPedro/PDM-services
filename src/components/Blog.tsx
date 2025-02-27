import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

const articles = [
  {
    title: "USCIS en Español",
    excerpt: " El Servicio de Ciudadanía e Inmigración de Estados Unidos proporciona información detallada sobre visas, residencia permanente y ciudadanía.",
    image: "images/12.jpg",
    date: "Feb 15, 2025",
    link: "https://www.uscis.gov/es",
    category: "Citizenship",
    featured: true
  },
  {
    title: "Consejos fiscales para nuevos inmigrantes",
    excerpt: "Sepa quiénes deben declarar impuestos (taxes), cómo hacer la declaración, verificar si fue recibida, sacar el ITIN y cómo presentar impuestos si es extranjero no residente o vive fuera de EE. UU.",
    image: "images/13.jpg",
    date: "Feb 12, 2025",
    link: "https://www.usa.gov/es/ayuda-preparar-declaracion-impuestos",
    category: "Tax Services",
    featured: true
  },
  {
    title: "Departamento de Seguridad Nacional ",
    excerpt: "Incluye información sobre políticas de inmigración y seguridad nacional.",
    image: "images/16.png",
    date: "Feb 10, 2025",
    link: "https://www.dhs.gov/es",
    category: "Family Immigration",
    featured: false
  },
  {
    title: "USAGov en Español ",
    excerpt: "Es la guía oficial de información y servicios del Gobierno de los Estados Unidos, ofreciendo recursos sobre visas, pasaportes, Seguro Social, vivienda, empleos y más.",
    image: "images/18.jpg",
    date: "Feb 10, 2025",
    link: "https://www.usa.gov/es",
    category: "Family Immigration",
    featured: false
  }

];


const Blog = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Últimas novedades sobre inmigración
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado con nuestros últimos artículos, guías y noticias sobre inmigración
          </p>
        </motion.div>



        {/* Featured Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {article.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>

                  </div>
                  <a
                    href={article.link}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    Leer más
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3 text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>

                  </div>
                  <a
                    href={article.link}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    Leer más
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;