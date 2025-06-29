import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Cuál es el proceso para reservar un alojamiento de lujo?",
      answer: "El proceso es personalizado: explora nuestras propiedades exclusivas, contacta a nuestro concierge y te ayudaremos a crear la experiencia perfecta según tus preferencias y necesidades específicas."
    },
    {
      question: "¿Qué servicios están incluidos en las estadías premium?",
      answer: "Nuestros alojamientos incluyen servicios de concierge 24/7, limpieza diaria, amenities de lujo, acceso a experiencias exclusivas y atención personalizada durante toda tu estadía."
    },
    {
      question: "¿Ofrecen servicios de transporte y traslados?",
      answer: "Sí, proporcionamos servicios de transporte de lujo incluyendo traslados al aeropuerto, vehículos con chofer y acceso a experiencias exclusivas en la ciudad."
    },
    {
      question: "¿Puedo personalizar mi experiencia de estadía?",
      answer: "Absolutamente. Nuestro equipo de concierge trabaja contigo para personalizar cada aspecto de tu estadía, desde preferencias gastronómicas hasta experiencias culturales únicas."
    },
    {
      question: "¿Qué medidas de seguridad y privacidad ofrecen?",
      answer: "Todas nuestras propiedades cuentan con sistemas de seguridad de última generación, acceso controlado y personal de confianza para garantizar tu privacidad y tranquilidad absoluta."
    },
    {
      question: "¿Hay descuentos para estadías prolongadas?",
      answer: "Ofrecemos tarifas preferenciales para estadías de una semana o más, además de paquetes exclusivos que incluyen experiencias adicionales. Consulta con nuestro equipo para opciones personalizadas."
    },
    {
      question: "¿Qué incluye el servicio de concierge?",
      answer: "Nuestro concierge premium incluye reservas en restaurantes exclusivos, organización de experiencias culturales, servicios de spa, compras personales y cualquier solicitud especial que tengas."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de alojamiento de lujo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openItem === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;