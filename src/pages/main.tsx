import { Building, Wrench, Sun, Camera, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

// Main Body Component
const MainBody: React.FC = () => {
  // Gallery images
  const galleryImages = [
    "/imgs/im1.png",
    "/imgs/im2.jpg", 
    "/imgs/im3.jpg",
    "/imgs/im4.png",
    "/imgs/im5.png",
    "/imgs/im6.jpg",
    "/imgs/im7.jpg",
    "/imgs/im8.jpg"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-8 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in-up">
              GEBALU
            </h1>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-10 opacity-90 animate-fade-in-up animation-delay-200">
              Votre partenaire de confiance pour l'installation et la maintenance d'équipements solaires
            </p>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-80 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              Spécialisés dans les chauffe-eaux solaires et les installations photovoltaïques, nous vous accompagnons dans votre transition énergétique avec des solutions durables et économiques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up animation-delay-600">
              <Link to="/prestations" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base inline-block">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base inline-block">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
              Nos Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Découvrez notre gamme complète de services pour votre installation solaire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCategory 
              icon={<Building className="w-8 h-8 sm:w-10 sm:h-10" />}
              title="Installation"
              description="Installation professionnelle de chauffe-eaux solaires et panneaux photovoltaïques"
              delay="0"
            />
            <ServiceCategory 
              icon={<Wrench className="w-8 h-8 sm:w-10 sm:h-10" />}
              title="Maintenance"
              description="Service de maintenance préventive et curative pour tous vos équipements solaires"
              delay="200"
            />
            <ServiceCategory 
              icon={<Sun className="w-8 h-8 sm:w-10 sm:h-10" />}
              title="Conseil"
              description="Accompagnement personnalisé pour optimiser votre installation solaire"
              delay="400"
            />
          </div>
        </div>
      </section>

      {/* Solar Energy Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Énergie Solaire
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Profitez de l'énergie solaire gratuite et inépuisable pour réduire vos factures d'énergie et contribuer à la protection de l'environnement.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-200">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Économies d'énergie significatives</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-400">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Installation professionnelle garantie</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Service après-vente réactif</span>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 animate-fade-in-up animation-delay-800">
                <Link to="/solaire-thermique" className="bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base inline-block border-2 border-orange-500">
                  En savoir plus
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <Sun className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Chauffe-eau Solaire</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Économisez jusqu'à 80% sur votre facture d'eau chaude
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">120L-300L</div>
                      <div className="text-sm opacity-80">Capacités disponibles</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-80">Années de garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
              Nos Réalisations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Découvrez quelques-unes de nos installations solaires
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Installation solaire ${index + 1}`}
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up animation-delay-800">
            <Link to="/galerie" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base inline-block">
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Prêt à passer au solaire ?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up animation-delay-400">
            <a href="tel:0770606092" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              07 70 60 60 92
            </a>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// Service Category Component
const ServiceCategory: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-orange-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

// Main Page Component
const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
};

export default MainPage;