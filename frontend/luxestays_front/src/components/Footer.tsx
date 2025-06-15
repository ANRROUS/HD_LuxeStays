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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
