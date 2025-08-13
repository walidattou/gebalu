import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">GEBALU</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Votre partenaire de confiance pour l'installation et la maintenance d'équipements solaires.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:0770606092" 
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Prestations', href: '/prestations' },
                { name: 'Solaire thermique', href: '/solaire-thermique' },
                { name: 'Réalisations', href: '/realisations' },
                { name: 'Galerie', href: '/galerie' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-1 hover:scale-105 inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-lg font-semibold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              {[
                'Installation solaire',
                'Maintenance préventive',
                'Conseil énergétique',
                'Chauffe-eau solaire',
                'Panneaux photovoltaïques',
                'Service après-vente'
              ].map((service, index) => (
                <li key={service} className="text-gray-300 text-sm sm:text-base">
                  <span className="inline-block transform hover:translate-x-1 hover:scale-105 transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="tel:0770606092" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  07 70 60 60 92
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="mailto:contact@gebalu.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  contact@gebalu.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">
                  Algérie
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 animate-fade-in-up animation-delay-800">
          <p>
            &copy; 2024 GEBALU. Tous droits réservés. | Développé par{' '}
            <a 
              href="https://walidattou.github.io/Portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-105 hover:underline"
            >
              Attou Walid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
