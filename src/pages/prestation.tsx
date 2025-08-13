import { useState } from 'react';
import { Home, Wrench, Settings, Truck, Hammer, Palette, Zap, Shield, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

// Service Category Component
const ServiceCategory: React.FC<{
  icon: React.ReactNode;
  title: string;
  services: Array<{ name: string; description: string }>;
  gradient: string;
}> = ({ icon, title, services, gradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className={`${gradient} p-4 sm:p-6 text-white`}>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {services.slice(0, isExpanded ? services.length : 3).map((service, index) => (
            <div key={index} className="border-l-4 border-blue-200 pl-3 sm:pl-4 py-2">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{service.name}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        
        {services.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
          >
            <span>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
  );
};

// Main Services Body Component
const ServicesBody: React.FC = () => {
  const serviceCategories = [
    {
      icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Bâtiment",
      gradient: "bg-gradient-to-r from-blue-600 to-blue-700",
      services: [
        {
          name: "Maçonnerie",
          description: "Construction et rénovation"
        },
        {
          name: "Etanchéité",
          description: "Etanchéité classique pour terrasse et intérieure, Résine, ..."
        },
        {
          name: "Traitement des façades",
          description: "Mur rideau, façade ventilée, panneaux composite"
        },
        {
          name: "Peinture",
          description: "Peintures du simple au moderne"
        },
        {
          name: "Traitement des sols",
          description: "Parquet, moquette, époxy, résine alimentaire et industriel"
        },
        {
          name: "Electricité et réseau informatique",
          description: "Tous travaux d'électricité et réseaux informatique"
        },
        {
          name: "Plomberie et climatisation",
          description: "Chauffage et froid"
        },
        {
          name: "Automatisme",
          description: "Porte automatique tout genre, rideaux, ..."
        },
        {
          name: "Détection incendie et alarme",
          description: "Installation des systèmes de sécurité"
        }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Menuiserie & Verre",
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
      services: [
        {
          name: "Menuiserie aluminium",
          description: "Fenêtre et porte, Cloison amovible, Volet Roulant manuel et automatique"
        },
        {
          name: "Mur rideaux",
          description: "Panneaux composite (alucobond), Enseigne lumineuse"
        },
        {
          name: "Menuiserie bois",
          description: "Boiserie en général (fenêtre, porte, placard, ...), Dressing"
        },
        {
          name: "Menuiserie PVC",
          description: "Fenêtre et porte"
        },
        {
          name: "Ferronnerie",
          description: "Barreaudage, porte, portails, rideaux, clôture"
        },
        {
          name: "Faux plafonds et Placo plâtre",
          description: "Faux plafonds démontable, en BA13, en PVC, Séparations avec Placoplatre"
        },
        {
          name: "Verre du 3mm au 30mm",
          description: "Verre: sécurité, feuilleté, blindé, simple et double vitrage"
        }
      ]
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Stands & Show-room",
      gradient: "bg-gradient-to-r from-purple-600 to-purple-700",
      services: [
        {
          name: "Stands et Show-room",
          description: "Conceptions et réalisations des stands et show-room"
        },
        {
          name: "Fourniture de mobilier",
          description: "Tout genre de mobilier"
        }
      ]
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Autres Services",
      gradient: "bg-gradient-to-r from-green-600 to-green-700",
      services: [
        {
          name: "Travaux public et hydraulique",
          description: "Infrastructure et gestion des eaux"
        },
        {
          name: "Société de nettoyage",
          description: "Services de nettoyage professionnel"
        },
        {
          name: "Aménagement des espaces verts",
          description: "Création et entretien d'espaces paysagers"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Nos Prestations
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 opacity-90">
              Une gamme complète de services pour tous vos projets
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-80 px-4">
              De la construction traditionnelle aux technologies les plus modernes, 
              GEBALU vous accompagne dans tous vos projets avec expertise et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCategory
                key={index}
                icon={category.icon}
                title={category.title}
                services={category.services}
                gradient={category.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Notre Expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Des compétences diversifiées pour répondre à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <Hammer className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Construction", desc: "Expertise complète en bâtiment" },
              { icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Design", desc: "Solutions esthétiques modernes" },
              { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Technologie", desc: "Équipements de pointe" },
              { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Sécurité", desc: "Normes strictes respectées" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-blue-600 mb-3 sm:mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Contactez nos experts pour discuter de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              07 70 60 60 92
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

// Prestation Page Component
const PrestationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesBody />
      <Footer />
    </div>
  );
};

export default PrestationPage;