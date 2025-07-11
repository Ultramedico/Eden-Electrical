import { motion } from "framer-motion";
import { Clock, CheckCircle, Phone, Mail } from "react-feather";
import { Link } from "react-router-dom";
import { BsLightningCharge } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Electric from "../assets/electric.avif";
const Home = () => {
  const services = [
    {
      icon: <BsLightningCharge className="w-8 h-8 text-indigo-600" />,
      title: "Lighting Solutions",
      description:
        "Professional installation of fixtures and lighting systems for homes and businesses.",
    },
    {
      icon: <IoShieldCheckmarkOutline className="w-8 h-8 text-indigo-600" />,
      title: "Electrical Safety",
      description:
        "Comprehensive inspections and repairs to ensure your property meets safety standards.",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Emergency",
      description:
        "Immediate response to electrical emergencies anytime, day or night.",
    },
  ];

  const features = [
    "Licensed & Insured Professionals",
    "Free On-Site Estimates",
    "Quality Materials Guaranteed",
    "Residential, Commercial & Industrial Services",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${Electric})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We Illuminate Your World{" "}
              <span className="text-amber-500">with Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional electrical services for residential, commercial, and
              industrial properties. Licensed, insured, and ready to serve you
              24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09024780765"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:oladapoalli21@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-amber-500 hover:bg-amber-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get a Free Estimate
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Our <span className="text-indigo-600">Electrical Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
              Comprehensive solutions for all your electrical needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold sm:text-4xl"
            >
              Why Choose <span className="text-amber-500">Eden Elite</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"
            >
              We deliver exceptional electrical services with professionalism
              and care
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3" />
                  <h3 className="text-lg font-medium">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-6">
              Ready to Power Your Property Safely?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free on-site estimate or emergency service
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:09024780765"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                0902 4780765
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:08159341040"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-900"
              >
                <Phone className="w-5 h-5 mr-2" />
                0815 9341040
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
