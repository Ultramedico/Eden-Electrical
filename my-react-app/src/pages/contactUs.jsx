import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl text-amber-500" />,
      title: "Phone",
      details: "0902 4780765 | 0815 9341040",
      action: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-3xl text-amber-500" />,
      title: "Email",
      details: "oladapoalli21@gmail.com",
      action: "Send Email"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-amber-500" />,
      title: "Location",
      details: "Lagos, Nigeria",
      action: "Get Directions"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center py-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact <span className="text-amber-500">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Get in touch for inquiries, estimates, or emergency services
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.details}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={method.title === "Phone" ? "tel:09024780765" : method.title === "Email" ? "mailto:oladapoalli21@gmail.com" : "#"}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {method.action}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-8 text-gray-900"
            >
              Send Us a <span className="text-indigo-600">Message</span>
            </motion.h2>
            
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;