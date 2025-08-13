import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, User, Building, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    mail: '',
    nomPrenomSociete: '',
    telephone: '',
    adresse: '',
    ville: '',
    dateDebutTravaux: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.mail) newErrors.mail = 'L\'email est obligatoire';
    else if (!/\S+@\S+\.\S+/.test(formData.mail)) newErrors.mail = 'Format d\'email invalide';
    
    if (!formData.nomPrenomSociete) newErrors.nomPrenomSociete = 'Le nom/prénom ou société est obligatoire';
    if (!formData.telephone) newErrors.telephone = 'Le téléphone est obligatoire';
    if (!formData.adresse) newErrors.adresse = 'L\'adresse est obligatoire';
    if (!formData.ville) newErrors.ville = 'La ville est obligatoire';
    if (!formData.dateDebutTravaux) newErrors.dateDebutTravaux = 'La date de début des travaux est obligatoire';
    if (!formData.message) newErrors.message = 'Le message est obligatoire';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      mail: '',
      nomPrenomSociete: '',
      telephone: '',
      adresse: '',
      ville: '',
      dateDebutTravaux: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Contactez-nous
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90">
              Votre projet, notre expertise
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement pour discuter de votre projet
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Formulaire de contact</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Tous les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
                </p>
              </div>

              {!isSubmitted ? (
                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="mail" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mail <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="email"
                        id="mail"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.mail ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    {errors.mail && <p className="mt-1 text-sm text-red-500">{errors.mail}</p>}
                  </div>

                  {/* Nom Prénom ou société */}
                  <div>
                    <label htmlFor="nomPrenomSociete" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom Prénom ou société <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        id="nomPrenomSociete"
                        name="nomPrenomSociete"
                        value={formData.nomPrenomSociete}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.nomPrenomSociete ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre nom, prénom ou société"
                      />
                    </div>
                    {errors.nomPrenomSociete && <p className="mt-1 text-sm text-red-500">{errors.nomPrenomSociete}</p>}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.telephone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    {errors.telephone && <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>}
                  </div>

                  {/* Adresse */}
                  <div>
                    <label htmlFor="adresse" className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.adresse ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre adresse complète"
                      />
                    </div>
                    {errors.adresse && <p className="mt-1 text-sm text-red-500">{errors.adresse}</p>}
                  </div>

                  {/* Ville */}
                  <div>
                    <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ville <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.ville ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre ville"
                      />
                    </div>
                    {errors.ville && <p className="mt-1 text-sm text-red-500">{errors.ville}</p>}
                  </div>

                  {/* Date début des travaux */}
                  <div>
                    <label htmlFor="dateDebutTravaux" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date début des travaux <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="date"
                        id="dateDebutTravaux"
                        name="dateDebutTravaux"
                        value={formData.dateDebutTravaux}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                          errors.dateDebutTravaux ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.dateDebutTravaux && <p className="mt-1 text-sm text-red-500">{errors.dateDebutTravaux}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full pl-10 pr-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Décrivez votre projet en détail..."
                      />
                    </div>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Envoyer le message
                    </button>
                  </div>
                </div>
              ) : (
                // Success Message
                <div className="text-center py-6 sm:py-8">
                  <div className="mb-4 sm:mb-6">
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Message envoyé avec succès !</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    Merci pour votre message. Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    Envoyer un nouveau message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 h-fit">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Contact direct</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:commercial@gebalu.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
                    >
                      commercial@gebalu.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Téléphone</h4>
                    <a 
                      href="tel:0770606092"
                      className="text-orange-600 hover:text-orange-700 transition-colors text-sm sm:text-base"
                    >
                      07 70 60 60 92
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Localisation</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Algérie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;

