import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const contactItems = [
    { icon: <FaPhone className="text-amber-500" />, text: '0902 4780765 | 0815 9341040' },
    { icon: <FaEnvelope className="text-amber-500" />, text: 'oladapoalli21@gmail.com' },
    { icon: <FaMapMarkerAlt className="text-amber-500" />, text: 'Lagos, Nigeria' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedin />, url: '#' }
  ];

  const footerLinks = [
    { title: 'Services', links: ['Wiring', 'Rewiring', 'Safety Inspection', 'Meter Services'] },
    { title: 'Company', links: ['About Us', 'Testimonials', 'Gallery', 'Contact'] }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">
              Eden Elite <span className="text-amber-500">Electrical</span>
            </h3>
            <p className="text-gray-400">
              We Illuminate Your World with Excellence. Professional electrical services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, color: '#f59e0b' }}
                  href={social.url}
                  className="text-gray-400 hover:text-amber-500 text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Eden Elite Electrical Solutions. All rights reserved.</p>
          <a className='mt-8 hover:text-blue-500' href="https://wa.me/2347063564619">Developed by Oracle.</a>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

 