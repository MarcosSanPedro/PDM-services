import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe2, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const easing = [0.6, -0.05, 0.01, 0.99];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 100;
      
      // Determine if we should show or hide the navbar
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setVisible(false);
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
          borderColor: scrolled ? 'rgba(226, 232, 240, 1)' : 'rgba(255, 255, 255, 0.1)',
          y: visible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: easing }}
        className="fixed w-full z-50 backdrop-blur-lg border-b"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <motion.a
                href="#"
                className={`font-bold text-xl flex items-center space-x-2 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: easing }}
              >
                <img src='images/logo1.png' className="h-14 w-14 " />
                <span>PDM IMMIGRATION SERVICES</span>
              </motion.a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`hover:text-yellow-400 transition-colors ${
                      scrolled ? 'text-gray-900' : 'text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: easing }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: easing }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: easing }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <img src='images/logo1.png' className="h-14 w-14 " />
                    <span className="font-bold text-gray-900">PDM IMMIGRATION</span>
                  </motion.div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;  