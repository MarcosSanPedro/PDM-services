import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const articles = [
  {
    title: "Guide to U.S. Citizenship Application Process",
    excerpt: "Everything you need to know about applying for U.S. citizenship, from eligibility requirements to interview preparation.",
    image: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?auto=format&fit=crop&q=80",
    date: "Feb 15, 2025",
    readTime: "8 min",
    category: "Citizenship",
    featured: true
  },
  {
    title: "Tax Tips for New Immigrants",
    excerpt: "Essential tax information and tips for immigrants, including filing requirements, deductions, and important deadlines.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    date: "Feb 12, 2025",
    readTime: "6 min",
    category: "Tax Services",
    featured: true
  },
  {
    title: "Understanding Family-Based Immigration",
    excerpt: "A comprehensive guide to family-based immigration petitions and the reunification process.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    date: "Feb 10, 2025",
    readTime: "10 min",
    category: "Family Immigration",
    featured: false
  },
  {
    title: "Work Permit Application Guide",
    excerpt: "Step-by-step guide to applying for and maintaining work authorization in the United States.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    date: "Feb 8, 2025",
    readTime: "7 min",
    category: "Work Permits",
    featured: false
  }
];

const categories = [
  "All Posts",
  "Citizenship",
  "Tax Services",
  "Family Immigration",
  "Work Permits",
  "Asylum",
  "Notary Services"
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
            Latest Immigration Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles, guides, and immigration news
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

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
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
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
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Immigration News
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest immigration updates, guides, and expert advice
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;