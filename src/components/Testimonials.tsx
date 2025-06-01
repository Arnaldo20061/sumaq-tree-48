
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      quote: "Gracias a Sumaq Tree, logramos reducir en un 20% el uso de agua en nuestras fincas y estamos en proceso de obtener la certificación Rainforest Alliance. Es una inversión que genera impacto y rentabilidad.",
      name: "Rosa Gutiérrez",
      position: "Gerente de Producción",
      company: "Agroexportadora El Bosque",
      initials: "RG",
      stats: {
        water: "20%",
        productivity: "15%",
        accuracy: "95%"
      }
    },
    {
      rating: 5,
      quote: "La implementación de Sumaq Tree transformó completamente nuestra operación. Los datos en tiempo real nos permiten tomar decisiones más inteligentes y hemos mejorado significativamente nuestra sostenibilidad.",
      name: "Carlos Mendoza",
      position: "Director de Operaciones",
      company: "FreshFruit Export S.A.",
      initials: "CM",
      stats: {
        water: "18%",
        productivity: "22%",
        accuracy: "97%"
      }
    },
    {
      rating: 5,
      quote: "Lo que más me impresiona es la facilidad de uso y la precisión de los datos. Sumaq Tree nos ayudó a obtener la certificación orgánica en tiempo récord y nuestros clientes europeos están muy satisfechos.",
      name: "María Elena Vargas",
      position: "Gerente de Calidad",
      company: "Organic Valley Peru",
      initials: "MV",
      stats: {
        water: "25%",
        productivity: "19%",
        accuracy: "96%"
      }
    },
    {
      rating: 5,
      quote: "Desde que usamos Sumaq Tree, nuestros reportes de sostenibilidad son impecables. La plataforma automatiza todo el proceso de documentación y nos da la tranquilidad de cumplir con estándares internacionales.",
      name: "Jorge Ramírez",
      position: "Jefe de Sostenibilidad",
      company: "EcoFarms International",
      initials: "JR",
      stats: {
        water: "16%",
        productivity: "20%",
        accuracy: "98%"
      }
    },
    {
      rating: 5,
      quote: "La inversión en Sumaq Tree se pagó sola en menos de 8 meses. El ahorro en recursos y la eficiencia operativa que logramos es extraordinaria. Ahora somos referente en agricultura sostenible.",
      name: "Ana Sofía Torres",
      position: "CEO",
      company: "Green Harvest Corp",
      initials: "AT",
      stats: {
        water: "23%",
        productivity: "28%",
        accuracy: "94%"
      }
    },
    {
      rating: 5,
      quote: "Sumaq Tree nos permitió digitalizar completamente nuestros procesos. Los sensores IoT y la plataforma de análisis nos dieron una ventaja competitiva enorme en el mercado internacional.",
      name: "Fernando López",
      position: "Director Técnico",
      company: "AgriTech Solutions",
      initials: "FL",
      stats: {
        water: "21%",
        productivity: "17%",
        accuracy: "99%"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-earth-50 to-forest-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Empresas líderes ya están transformando sus operaciones con Sumaq Tree
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-forest-100 hover:bg-forest-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-forest-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-forest-100 hover:bg-forest-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-forest-600" />
              </button>
            </div>

            <div className="pt-6">
              <div className="flex items-center mb-6">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-coffee-800 leading-relaxed mb-8 italic">
                "{currentData.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-200 to-coffee-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-forest-700">{currentData.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-forest-800 text-lg">
                    {currentData.name}
                  </div>
                  <div className="text-coffee-600">
                    {currentData.position}
                  </div>
                  <div className="text-coffee-500 text-sm">
                    {currentData.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas de impacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-earth-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.water}</div>
                <div className="text-coffee-600">Reducción uso de agua</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.productivity}</div>
                <div className="text-coffee-600">Aumento productividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{currentData.stats.accuracy}</div>
                <div className="text-coffee-600">Precisión en datos</div>
              </div>
            </div>

            {/* Indicadores de testimonial */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-forest-600' : 'bg-forest-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
