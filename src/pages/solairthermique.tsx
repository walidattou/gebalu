import { useState } from 'react';
import { Sun, Droplets, Thermometer, Battery, Gauge, Users, Settings, CheckCircle, Zap, Leaf, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

// Solar System Models Component
const SolarModels: React.FC = () => {
  const models = [
    { capacity: '120 litres', users: 3, icon: '120L' },
    { capacity: '160 litres', users: 5, icon: '160L' },
    { capacity: '200 litres', users: 6, icon: '200L' },
    { capacity: '300 litres', users: 10, icon: '300L' }
  ];

  return (
    <section id="solar-models" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-8 sm:mb-12">
           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Modèles</h2>
           <p className="text-base sm:text-lg text-gray-600 px-4">
            Nous disposons actuellement de plusieurs capacités de chauffe-eau solaire de 120 à 300 litres
          </p>
        </div>
        

         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {models.map((model, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Solar Panel Image */}
               <div className="h-32 sm:h-48 bg-white relative overflow-hidden">
                <img 
                  src={`data:image/svg+xml;base64,${btoa(`
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Tank -->
                      <rect x="50" y="20" width="200" height="40" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2" rx="4"/>
                      <rect x="55" y="25" width="190" height="30" fill="#f3f4f6"/>
                      
                      <!-- Solar Panel -->
                      <rect x="60" y="80" width="180" height="100" fill="url(#panel)" stroke="#1f2937" stroke-width="2" rx="4"/>
                      
                      <!-- Grid lines on panel -->
                      ${Array.from({length: 8}, (_, i) => `<line x1="${70 + i * 20}" y1="85" x2="${70 + i * 20}" y2="175" stroke="#1e40af" stroke-width="1" opacity="0.7"/>`).join('')}
                      
                      <!-- Support legs -->
                      <line x1="70" y1="180" x2="60" y2="190" stroke="#6b7280" stroke-width="3"/>
                      <line x1="230" y1="180" x2="240" y2="190" stroke="#6b7280" stroke-width="3"/>
                      
                      <!-- User icons for ${model.users} users -->
                      ${Array.from({length: Math.min(model.users, 10)}, (_, i) => `
                        <g transform="translate(${60 + i * 18}, 5)">
                          <circle cx="9" cy="6" r="3" fill="#374151"/>
                          <rect x="6" y="9" width="6" height="8" fill="#374151"/>
                        </g>
                      `).join('')}
                    </svg>
                  `)}`}
                  alt="${model.capacity} Solar Water Heater"
                  className="w-full h-full object-contain"
                />
              </div>
              
               <div className="p-4 sm:p-6 text-center">
                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{model.capacity}</h3>
                 <p className="text-gray-600 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Users className="w-4 h-4" />
                  <span>Pour {model.users} personnes</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Components Breakdown
const ComponentsBreakdown: React.FC = () => {
  const components = [
    {
      number: "1",
      title: "Le réservoir d'eau",
      icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
      details: [
        "Capacité du ballon : 120L et 300L",
        "Revêtement extérieur : Aluminium anodisé",
        "Isolation : Polyuréthanne, épaisseur 40-60 mm",
        "Matériel : Acier à basse teneur en charbon",
        "Matériel de l'échangeur : Acier à basse teneur en charbon, de chaleur",
        "Protection interne du réservoir : émaillage de verre"
      ]
    },
    {
      number: "2",
      title: "Le panneau solaire",
      icon: <Sun className="w-5 h-5 sm:w-6 sm:h-6" />,
      details: [
        "Surface : 2.60 m² optimisé selon la capacité de stockage",
        "Cadre extérieur : Profilé d'aluminium anodisé",
        "Dos du capteur : Tôle galvanisée de 0.4 mm",
        "Isolation arrière : Laine de roche, 35 mm",
        "Isolation latérale : Laine de verre, 20 mm",
        "Absorbeur : Feuille unique à traitement sélectif en titane",
        "Tuyaux de l'absorbeur : Tuyaux en cuivre, ø10 & ø22",
        "Couverture : Verre Trempé",
        "Matériel d'étanchéité : EPDM et Silicone"
      ]
    },
    {
      number: "3",
      title: "Le support",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      details: [
        "Structure en acier réglable selon la latitude"
      ]
    },
    {
      number: "4",
      title: "Résistance thermique",
      icon: <Thermometer className="w-5 h-5 sm:w-6 sm:h-6" />,
      details: [
        "Protection supplémentaire : Anode en magnésium",
        "Résistance électrique : Cuivre de 0.8 kW à 4 kW",
        "Thermostat : Bipolaire à quatre contacts"
      ]
    },
    {
      number: "5",
      title: "Les accessoires",
      icon: <Gauge className="w-5 h-5 sm:w-6 sm:h-6" />,
      details: [
        "Vis, écrous et chevilles",
        "Coude (en croix) en cuivre",
        "Raccords de connexions et bouchons pour capteurs",
        "Vanne de purge des capteurs",
        "Glycol utilisé pour éviter le gel dans le circuit fermé des capteurs solaires"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Contenu minimal de la fourniture</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Découvrez tous les composants inclus dans nos installations solaires
          </p>
        </div>
        
        {/* Main Components Image */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
            <img 
              src="/solair thermique/fournitures.png"
              alt="Composants du chauffe-eau solaire"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
              Vue d'ensemble de tous les composants fournis avec votre installation
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {components.map((component, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {component.number}
                </div>
                <div className="text-orange-600">
                  {component.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{component.title}</h3>
              </div>
              
              <ul className="space-y-1 sm:space-y-2">
                {component.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-xs sm:text-sm text-gray-600 flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Fonctionnement d'un chauffe-eau solaire à thermosiphon</h2>
          <p className="text-base sm:text-lg opacity-90 max-w-4xl mx-auto px-4">
            Le liquide caloporteur, permettant de chauffer l'eau, relie les capteurs au ballon. Sa circulation d'un élément à l'autre se fait sans aide : c'est le principe du « thermosiphon ».
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Principe de fonctionnement</h3>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                Dans cette installation, le ballon doit surplomber les capteurs, ce qui permet à l'eau de circuler dans les tuyaux sans pompe. Si vous ne pouvez pas placer le ballon au-dessus des capteurs, le système ne fonctionnera pas. Vous devrez alors vous tourner vers un autre système de chauffe-eau solaire.
              </p>
              
                             {/* System Diagram */}
               <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
                 <img 
                   src="/solair thermique/fonctionnement.png"
                   alt="Diagramme de fonctionnement du chauffe-eau solaire"
                   className="w-full h-auto rounded-lg shadow-lg"
                 />
                 <p className="text-center text-sm sm:text-base opacity-80 mt-4">
                   Principe de fonctionnement du système thermosiphon
                 </p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Avantages</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "L'eau peut circuler dans les tuyaux sans pompe",
                  "Les capteurs peuvent être placés sur le sol ou le toit",
                  "Le fonctionnement de l'installation est très simple",
                  "Production gratuite de l'eau chaude tout le long de l'année",
                  "Indépendance énergétique et économique sur plus de 15 ans",
                  "L'installation n'implique pas d'importants entretiens",
                  "Moins de risque par rapport aux installations classiques (gaz, électricité)",
                  "Installation à l'extérieur de la base (moins de risque et plus d'espace à gagner)",
                  "Durée de vie plus élevée par rapport aux installations classiques"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm opacity-90">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Solar Body Component
const SolarBody: React.FC = () => {
  const scrollToModels = () => {
    const element = document.getElementById('solar-models');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Chauffe-eau solaire
              </h1>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
                GEBALU met à votre disposition des chauffe-eaux solaires fabriqués selon les normes internationales en vigueur.
              </p>
              <p className="mb-6 sm:mb-8 opacity-80 text-sm sm:text-base">
                Nos chauffe-eau sont à circuit fermé à thermosiphon. Ils sont alimentés d'une résistance électrique d'appoint qui se déclenche automatiquement afin de garder une température constante de l'eau pendant les jours non ensoleillés.
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                  Solution économique
                </h3>
                <p className="opacity-90 text-sm sm:text-base">
                  Le chauffe-eau solaire se substitue aux chauffe-eau électriques et chauffe-eau à gaz pour permettre aux occupants d'un logement de couvrir un large part de leurs consommations d'eau chaude sanitaire, grâce à l'énergie solaire. Le système fonctionne pratiquement à <strong>100% tout le long de l'année</strong>, et il fonctionne en complément avec un appoint conventionnel (résistance électrique).
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Demander un devis
                  </button>
                </Link>
                <button 
                  onClick={scrollToModels}
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base"
                >
                  En savoir plus
                </button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Main circle with gradient */}
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                  {/* Inner circle */}
                  <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {/* Solar panel representation */}
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-lg relative overflow-hidden">
                      {/* Grid lines */}
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px p-2">
                        {Array.from({length: 16}, (_, i) => (
                          <div key={i} className="bg-blue-600 opacity-30"></div>
                        ))}
                      </div>
                      {/* Center highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400 to-transparent opacity-20"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-red-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Models */}
      <SolarModels />

      {/* Components Breakdown */}
      <ComponentsBreakdown />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Prêt à passer au solaire ?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Contactez nos experts pour une installation sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="tel:0770606092" className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              07 70 60 60 92
            </a>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Consultation gratuite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// Solar Thermique Page Component
const SolarThermiquePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SolarBody />
      <Footer />
    </div>
  );
};

export default SolarThermiquePage;