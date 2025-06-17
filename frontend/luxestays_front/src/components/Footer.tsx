import React from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la compañía */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">LuxeStays</h3>
            <p className="text-gray-300 leading-relaxed">
              Tu destino para experiencias de alojamiento de lujo excepcionales.
              Creamos momentos inolvidables en los destinos más exclusivos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/51999888777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Servicios de Lujo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contacto VIP
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+51 999 888 777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">concierge@luxestays.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">
                  Av. Larco 1234, Miraflores
                </span>
              </div>
            </div>
          </div>

          {/* Enlaces Legales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Política de Cancelación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Soporte Premium
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} LuxeStays. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              Experiencias de lujo ✨ Creadas en Perú
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
