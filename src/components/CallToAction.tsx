import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Zap } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Listo para ahorrar agua y cumplir con los estándares internacionales?
            </h2>
            
            <p className="text-xl text-forest-100 mb-8 leading-relaxed">
              Únete a las agroexportadoras que ya están usando nuestra tecnología y ahorran más de 
              <span className="font-bold text-white"> 15% en recursos</span> cada mes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">+50</div>
                <div className="text-forest-200 text-sm">Empresas activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">23%</div>
                <div className="text-forest-200 text-sm">Ahorro promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">6 meses</div>
                <div className="text-forest-200 text-sm">ROI promedio</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-forest-800 hover:bg-forest-50 font-semibold text-lg px-8 py-4 h-auto group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda una demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-forest-800 font-semibold text-lg px-8 py-4 h-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Quiero ser contactado
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start mt-8 text-forest-200">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm">Implementación en menos de 30 días</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-earth-100 to-coffee-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-coffee-500/20"></div>
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-forest-700 font-semibold text-lg">
                    Sumaq Tree en acción
                  </div>
                  <div className="text-coffee-600 text-sm mt-2">
                    Monitoreo en tiempo real
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-forest-600 font-bold text-sm">-23%</div>
                  <div className="text-coffee-500 text-xs">Agua</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-forest-600 font-bold text-sm">+18%</div>
                  <div className="text-coffee-500 text-xs">Productividad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
