import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Globe, Heart, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

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
      title: "Compassionate Service",
      description: "We understand the emotional journey of immigration and provide caring support every step of the way."
    },
    {
      icon: Shield,
      title: "Trusted Experience",
      description: "Over 7 years of expertise in immigration law, ensuring your case is handled with precision and care."
    },
    {
      icon: BookOpen,
      title: "Clear Communication",
      description: "We explain complex processes in simple terms, keeping you informed and confident."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Families United',
      description: 'Successfully reunited families across borders'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Proven track record of excellence'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Immigration Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -right-8 -bottom-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-600">Serving clients from over 20 countries with personalized care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              We're More Than Just an Immigration Service
            </h2>
            <p className="text-xl text-gray-600">
              We understand that the immigration process can be overwhelming and costly. That's why we're proud to offer affordable rates, ensuring your translations and services won't cost more than they should.
            </p>
            <p className="text-lg text-gray-600">
              With over 7 years of experience in immigration law and related cases, we've always provided our clients with the highest quality service possible. We offer quick response options because we understand that in these cases, time is money.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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