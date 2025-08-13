import { useState } from 'react';
import { Building, MapPin, Calendar, Download, Filter, Search, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

interface Project {
  id: number;
  company: string;
  location?: string;
  period: string;
  category: 'government' | 'commercial' | 'industrial' | 'residential' | 'infrastructure';
  description?: string;
}

const RealizationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const projects: Project[] = [
    { id: 1, company: "Secrétariat Général du Gouvernement S.G.G situé à El-Mouradia", period: "2007 - 2017", category: "government" },
    { id: 2, company: "Ambassade de france Hydra Alger", period: "2015-2017", category: "government" },
    { id: 3, company: "Société National des Assurances SAA", period: "2015-2017", category: "commercial" },
    { id: 4, company: "Société des glaces CASA GLACES située dans la zone industrielle de Baraki", period: "2007 - 2014", category: "industrial" },
    { id: 5, company: "SPA WMCSAT partenaire VIZADA (ex France Telecom Satellite)", period: "2006 - 2014", category: "commercial" },
    { id: 6, company: "ACTARIS Algerie", period: "2016-2017", category: "industrial" },
    { id: 7, company: "EGT Centre à El Hamma Belouizda", period: "2016", category: "commercial" },
    { id: 8, company: "ONSM office national de signaliation maritime", period: "2015-2016", category: "government" },
    { id: 9, company: "Tetra pak Algerie", period: "2016", category: "industrial" },
    { id: 10, company: "Agence immobilière Sarl Les Glaieuls, réalisation du Centre des affaires Dar El Madina située dans la zone d'activité de Hydra", period: "2009 - 2013", category: "commercial" },
    { id: 11, company: "DELT bureautique", period: "2007 - 2014", category: "commercial" },
    { id: 12, company: "Société des glaces FLEPPI située dans la zone industrielle de Zeralda", period: "2007 - 2014", category: "industrial" },
    { id: 13, company: "CNAS Mascara", period: "2011", category: "government" },
    { id: 14, company: "Sarl DMA Aménagement du nouveau siège de Cheraga.", period: "2013 - 2014", category: "commercial" },
    { id: 15, company: "EURL ISS située à Sidi Yahia (International Studies Service)", period: "2013 -2014", category: "commercial" },
    { id: 16, company: "METITO Zone d'activité de Hydra Algérie", period: "2012", category: "industrial" },
    { id: 17, company: "S.N.T.P Société National des Travaux Publics situé à El-Hamiz.", period: "2013", category: "infrastructure" },
    { id: 18, company: "Notaire SEDRATI situé dans la zone d'activité de Hydra", period: "2012", category: "commercial" },
    { id: 19, company: "TOSHIBA CLIM Algérie", period: "2008", category: "commercial" },
    { id: 20, company: "Motorola Sarl SALTICO", period: "2008", category: "commercial" },
    { id: 21, company: "Stands LG (Essalem Électronique)", period: "2008", category: "commercial" },
    { id: 22, company: "Show room de la papeterie ERREDHA", period: "", category: "commercial" },
    { id: 23, company: "Concessionnaire Nissan de BARAKI.", period: "", category: "commercial" },
    { id: 24, company: "Salon de glace artisanal LES COQUELECOTS.", period: "", category: "commercial" },
    { id: 25, company: "Ministères PME PMI.", period: "", category: "government" },
    { id: 26, company: "Différentes travaux de bâtiments pour des résidences VTP", period: "", category: "residential" },
    { id: 27, company: "Ministère de l'Enseignement Supérieur", period: "", category: "government" },
    { id: 28, company: "Ambassade Chili", period: "", category: "government" },
    { id: 29, company: "Banque El Baraka", period: "2006", category: "commercial" },
    { id: 30, company: "APC El Mouradia", period: "", category: "government" },
    { id: 31, company: "Ministère de la défence", period: "", category: "government" },
    { id: 32, company: "IBIS Tlemcen", period: "2011", category: "commercial" },
    { id: 33, company: "Maghreb Leasing", period: "2012", category: "commercial" }
  ];

  const categories = {
    all: { label: 'Tous les projets', count: projects.length },
    government: { label: 'Gouvernement', count: projects.filter(p => p.category === 'government').length },
    commercial: { label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    industrial: { label: 'Industriel', count: projects.filter(p => p.category === 'industrial').length },
    residential: { label: 'Résidentiel', count: projects.filter(p => p.category === 'residential').length },
    infrastructure: { label: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      government: 'bg-blue-100 text-blue-800',
      commercial: 'bg-green-100 text-green-800',
      industrial: 'bg-orange-100 text-orange-800',
      residential: 'bg-purple-100 text-purple-800',
      infrastructure: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      government: '🏛️',
      commercial: '🏢',
      industrial: '🏭',
      residential: '🏠',
      infrastructure: '🚧'
    };
    return icons[category as keyof typeof icons] || '🏢';
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Nos Réalisations
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90">
              Plus de 15 ans d'expérience au service de nos clients
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
              Découvrez notre portfolio complet de projets réalisés dans différents secteurs : 
              gouvernement, commercial, industriel et résidentiel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-75">
              <span className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                {projects.length}+ Projets réalisés
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2006 - 2017
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm sm:text-base"
              >
                <Filter className="w-4 h-4" />
                {categories[selectedCategory as keyof typeof categories]?.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-10">
                  {Object.entries(categories).map(([key, { label, count }]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCategory(key);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex justify-between items-center text-sm ${
                        selectedCategory === key ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-xs text-gray-500">({count})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredProjects.length} projet(s) trouvé(s)
            {searchTerm && ` pour "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-4 sm:p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)} {categories[project.category as keyof typeof categories]?.label}
                    </span>
                    {project.period && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {project.company}
                  </h3>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-gray-600">
                    {project.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {project.location}
                      </div>
                    )}
                    {project.description && (
                      <p className="text-gray-600">
                        {project.description}
                      </p>
                    )}
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Building className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-500 text-sm sm:text-base">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Portfolio Complet
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Téléchargez le détails complet de toutes nos réalisations
          </p>
          <a
            href="/REF.pdf"
            download="GEBALU_References.pdf"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base inline-flex"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Télécharger le PDF
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Votre Projet, Notre Expertise
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Rejoignez nos clients satisfaits et confiez-nous votre prochain projet
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Demander un devis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealizationsPage;