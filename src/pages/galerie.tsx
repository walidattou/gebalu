import { useState } from 'react';
import { Camera, Grid3X3, Grid2X2, X, ZoomIn, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [gridSize, setGridSize] = useState<'small' | 'medium' | 'large'>('medium');

  // Real gallery images from the gallerie folder
  const galleryImages = [
    "/gallerie/p6.jpg",
    "/gallerie/p7.jpg",
    "/gallerie/p8.jpg",
    "/gallerie/p11.jpg",
    "/gallerie/p12.jpg",
    "/gallerie/p13.jpg",
    "/gallerie/p14.jpg",
    "/gallerie/p15.jpg",
    "/gallerie/p16.jpg",
    "/gallerie/p17.jpg",
    "/gallerie/p18.jpg",
    "/gallerie/p19.jpg",
    "/gallerie/p20.jpg",
    "/gallerie/p21.jpg",
    "/gallerie/p22.jpg",
    "/gallerie/p25.jpg",
    "/gallerie/p26.jpg",
    "/gallerie/p27.jpg",
    "/gallerie/p28.jpg",
    "/gallerie/p29.jpg",
    "/gallerie/p30.jpg",
    "/gallerie/p31.jpg",
    "/gallerie/p32.jpg",
    "/gallerie/p33.jpg",
    "/gallerie/p34.png",
    "/gallerie/p35.png",
    "/gallerie/p36.jpg",
    "/gallerie/p37.jpg",
    "/gallerie/p38.jpg",
    "/gallerie/p39.jpg",
    "/gallerie/p40.jpg",
    "/gallerie/p41.jpg",
    "/gallerie/p42.jpg",
    "/gallerie/p43.jpg",
    "/gallerie/p44.jpg",
    "/gallerie/p45.jpg",
    "/gallerie/p46.png",
    "/gallerie/p47.jpg",
    "/gallerie/p48.jpg",
    "/gallerie/p49.jpg",
    "/gallerie/p50.jpg",
    "/gallerie/p51.jpg",
    "/gallerie/p52.jpg",
    "/gallerie/p53.jpg",
    "/gallerie/p54.jpg",
    "/gallerie/p55.jpg",
    "/gallerie/p56.jpg",
    "/gallerie/p57.jpg",
    "/gallerie/p58.jpg",
    "/gallerie/p59.jpg",
    "/gallerie/p60.jpg",
    "/gallerie/p61.jpg",
    "/gallerie/p62.jpg",
    "/gallerie/p63.jpg",
    "/gallerie/p64.jpg",
    "/gallerie/p65.jpg",
    "/gallerie/p66.jpg",
    "/gallerie/p67.jpg",
    "/gallerie/p68.jpg",
    "/gallerie/p69.jpg",
    "/gallerie/p70.jpg",
    "/gallerie/p71.jpg",
    "/gallerie/p72.jpg",
    "/gallerie/p73.jpg",
    "/gallerie/p74.jpg",
    "/gallerie/p75.jpg",
    "/gallerie/p76.jpg",
    "/gallerie/p77.jpg",
    "/gallerie/p78.jpg",
    "/gallerie/p79.jpg",
    "/gallerie/p80.jpg",
    "/gallerie/p81.jpg",
    "/gallerie/p82.jpg",
    "/gallerie/p83.jpg",
    "/gallerie/p84.jpg",
    "/gallerie/p85.jpg",
    "/gallerie/p86.jpg",
    "/gallerie/p87.jpg"
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % galleryImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const getGridClasses = () => {
    switch (gridSize) {
      case 'small':
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2';
      case 'medium':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
      case 'large':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Galerie Photos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up animation-delay-200">
              Découvrez nos réalisations en images
            </p>
            <div className="flex items-center justify-center gap-4 text-sm opacity-75 animate-fade-in-up animation-delay-400">
              <span className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <Camera className="w-4 h-4" />
                {galleryImages.length} Photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm sm:text-base">
              {galleryImages.length} photos disponibles
            </div>
            
            {/* Grid Size Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">Taille:</span>
              <button
                onClick={() => setGridSize('small')}
                className={`p-2 rounded-lg transition-colors ${
                  gridSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridSize('medium')}
                className={`p-2 rounded-lg transition-colors ${
                  gridSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridSize('large')}
                className={`p-2 rounded-lg transition-colors ${
                  gridSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid ${getGridClasses()}`}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square transform hover:scale-105 animate-fade-in-up"
                onClick={() => openModal(image, index)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Projet GEBALU ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Projet GEBALU détail"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Impressionné par nos réalisations ?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Contactez-nous pour votre prochain projet
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Demander un devis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              07 70 60 60 92
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;