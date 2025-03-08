import { MapPin, Phone, Mail, Globe2, Facebook } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Servicios",
      links: [
        { name: "Servicios de inmigración", href: "#services" },
        { name: "Preparación de impuestos", href: "#services" },
        { name: "Servicios notariales", href: "#services" },
        { name: "Peticiones familiares", href: "#services" },
        { name: "Permisos de trabajo", href: "#services" },
        { name: "Ciudadanía", href: "#services" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "FAQ", href: "#faq" },
        { name: "Éxitos Reales", href: "#testimonials" }
      ]
    },
    {
      title: "Compañía",
      links: [
        { name: "Inicio", href: "#tsparticles" },
        { name: "Acerca de nosotros", href: "#about" },
        { name: "Por qué Nosotros", href: "#nosotros" }
      ]
    }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center space-x-2 mb-6"
            >
              <img src='images/logo.svg' className="h-14 w-14 " />
              <span className="text-2xl font-bold">PDM Immigration SERVICES</span>
            </a>
            <p className="text-blue-100 mb-6">
            Servicios profesionales de inmigración, preparación de impuestos y soluciones notariales adaptadas a tus necesidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-blue-100">14709 NE 7th Ave</p>
                  <p className="text-blue-100"> North Miami, Fl 33161</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+13059264581" className="text-blue-100 hover:text-yellow-400 transition-colors">
                +1 (305) 926-4581
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:contact@pdmimmigration.com" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  contact@pdmimmigration.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Business Hours */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Conéctate con nosotros</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100088402383049" },
                  { icon: TikTokIcon, href: "https://www.tiktok.com/@pdm_immigrationservices" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-blue-800 p-2 rounded-full hover:bg-yellow-400 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Horario de atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-100">Lunes - Viernes</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Sábado</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="lg:text-right">
              <h4 className="text-lg font-semibold mb-4">¿Necesitas ayuda inmediata?</h4>
              <a
                href="https://wa.me/13059264581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Escíbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © {currentYear} PDM IMMIGRATION SERVICES. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="https://mmbytesolutions.com/" className="text-blue-100 hover:text-yellow-400 transition-colors">
              Hecho por MMByte Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;