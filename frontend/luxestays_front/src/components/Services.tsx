import React, { useState } from 'react';
import { Home, Building, MapPin, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Home,
      title: "Villas de Lujo",
      description: "Residencias exclusivas con servicios premium y privacidad total para una experiencia única.",
      features: ["4-6 dormitorios", "Piscina privada", "Chef personal", "Mayordomo incluido"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Desde $2,500/noche"
    },
    {
      id: 2,
      icon: Building,
      title: "Suites Ejecutivas",
      description: "Apartamentos de lujo en ubicaciones premium con servicios de hotel cinco estrellas.",
      features: ["1-3 dormitorios", "Spa privado", "Room service 24/7", "Vista panorámica"],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Desde $1,800/noche"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Ubicaciones Exclusivas",
      description: "Propiedades en las zonas más prestigiosas y exclusivas del país.",
      features: ["Zonas VIP", "Acceso privado", "Vistas espectaculares", "Máxima privacidad"],
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Desde $3,000/noche"
    },
    {
      id: 4,
      icon: Star,
      title: "Experiencias Premium",
      description: "Servicios exclusivos y experiencias personalizadas para huéspedes VIP.",
      features: ["Concierge personal", "Transporte de lujo", "Experiencias únicas", "Servicios a medida"],
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Desde $4,000/noche"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios de Lujo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una selección exclusiva de alojamientos premium diseñados para superar tus expectativas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = selectedService === service.id;
            
            return (
              <div 
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features - Always visible but with transition */}
                  <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-24 opacity-70'} overflow-hidden`}>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;