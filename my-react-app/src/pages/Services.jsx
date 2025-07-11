import { FaLightbulb, FaPlug, FaSearch, FaTools, FaTachometerAlt, FaKey, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Residential from "../assets/resident.jpg";
import Residential2 from "../assets/resident2.jpg";
import Industrial from "../assets/industrial.jpg";
import Home from "../assets/home.jpg";
import Prepaid from "../assets/prepaid.jpg";
import Prepaid2 from "../assets/prepaid2.jpg";
import Faulty from "../assets/faulty.jpg";
import Faulty2 from "../assets/faulty2.jpg";
const Services = () => {
  const [activeTab, setActiveTab] = useState('residential');

  const services = {
    residential: [
      {
        icon: <FaLightbulb className="text-4xl text-indigo-600" />,
        title: "Light Solutions & Installations",
        description: "Professional installation of lighting fixtures and systems for your home."
      },
      {
        icon: <FaPlug className="text-4xl text-indigo-600" />,
        title: "Socket & Switch Installation",
        description: "Safe and reliable installation of sockets and switches."
      },
      {
        icon: <FaSearch className="text-4xl text-indigo-600" />,
        title: "Electrical Fault Diagnosis",
        description: "Expert troubleshooting and repair of electrical issues."
      }
    ],
    commercial: [
      {
        icon: <FaTools className="text-4xl text-indigo-600" />,
        title: "Industrial Wiring",
        description: "Heavy-duty electrical solutions for commercial spaces."
      },
      {
        icon: <FaTachometerAlt className="text-4xl text-indigo-600" />,
        title: "Prepaid Meter Services",
        description: "Installation, maintenance, and troubleshooting of prepaid meters."
      },
      {
        icon: <FaKey className="text-4xl text-indigo-600" />,
        title: "Meter Tamper Code Generation",
        description: "Professional solutions for meter issues."
      }
    ],
    emergency: [
      {
        icon: <FaMobileAlt className="text-4xl text-indigo-600" />,
        title: "24/7 Emergency Services",
        description: "Immediate response to electrical emergencies anytime."
      }
    ]
  };

  const galleryImages = [
    { id: 1, category: 'residential', alt: 'Residential wiring' , src: Residential},
    { id: 2, category: 'residential', alt: 'Light installation' ,src: Home },
    { id: 3, category: 'commercial', alt: 'Prepaid meter Installation', src: Prepaid },
    { id: 4, category: 'commercial', alt: 'Industrial electrical work' , src: Faulty2},
    { id: 5, category: 'emergency', alt: 'Emergency repair' , src: Prepaid2 },
    { id: 6, category: 'residential', alt: 'Home electrical system' , src: Residential2 },
    { id: 7, category: 'commercial', alt: 'Office wiring',  src: Industrial  },
    { id: 8, category: 'emergency', alt: 'Fault diagnosis', src: Faulty}
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Services Header */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Our Electrical Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Professional solutions for residential, commercial, and industrial properties
          </motion.p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {['residential', 'commercial', 'emergency'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-md focus:outline-none ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900"
            >
              Our <span className="text-indigo-600">Work Gallery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              See examples of our professional electrical work
            </motion.p>
          </div>


      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {['residential', 'commercial', 'emergency'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-md focus:outline-none ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

  
        
        </div>
  
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter(img => activeTab === 'all' || img.category === activeTab)
              .map((img) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-lg shadow-md bg-white"
                >
                  <div className="h-64 bg-gray-300 items-center justify-center">
                    {/* Replace with actual images */}
                    <img className="text-gray-500 h-56 w-full object-cover" alt={img.alt} src={img.src}/> 
                    <div className="px-4 h-8 bg-indigo-800  ">
                    <h3 className="font-medium text-white">{img.alt}</h3>
                  </div>
                  </div>
                
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;