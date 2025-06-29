import React from 'react';
import { Crown, Clock, Award, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Crown,
      title: "Experiencia de Lujo",
      description: "Alojamientos cuidadosamente seleccionados con los más altos estándares de lujo y confort."
    },
    {
      icon: Clock,
      title: "Concierge 24/7",
      description: "Servicio personalizado las 24 horas para hacer tu estadía verdaderamente excepcional."
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Solo trabajamos con propiedades que cumplen nuestros estrictos criterios de excelencia."
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Cada huésped recibe un servicio único y personalizado según sus preferencias."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir LuxeStays?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia y la creación de experiencias inolvidables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-amber-200 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;