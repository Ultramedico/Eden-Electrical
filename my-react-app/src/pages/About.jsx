import { FaCheck, FaUsers, FaAward, FaHandshake, FaTools, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl text-amber-500" />,
      title: "Professional Team",
      description: "Our licensed electricians have years of experience in the field."
    },
    {
      icon: <FaAward className="text-4xl text-amber-500" />,
      title: "Quality Assurance",
      description: "We use only the highest quality materials and equipment."
    },
    {
      icon: <FaHandshake className="text-4xl text-amber-500" />,
      title: "Customer Focused",
      description: "Your satisfaction is our top priority."
    }
  ];

  const milestones = [
    { year: "2015", event: "Company Founded" },
    { year: "2017", event: "Expanded to Commercial Services" },
    { year: "2019", event: "Launched 24/7 Emergency Services" },
    { year: "2022", event: "Served 1000+ Happy Clients" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center py-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              About <span className="text-amber-500">Eden Elite</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Illuminating your world with excellence since 2015
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-indigo-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Eden Elite Electrical Solutions was founded in 2015 with a mission to provide reliable, 
                high-quality electrical services to residential and commercial clients across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small team of passionate electricians has grown into a trusted name 
                in the electrical services industry, known for our professionalism, expertise, and 
                commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our services while maintaining the core values that made 
                us successful: integrity, quality, and excellence in every job we undertake.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 h-96 rounded-lg flex items-center justify-center"
            >
              <FaLightbulb className="text-8xl text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900"
            >
              Our <span className="text-indigo-600">Core Values</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Our <span className="text-amber-500">Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Key milestones in our growth and development
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-amber-500 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white text-gray-900 ml-6' : 'bg-amber-500 text-white mr-6'}`}>
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 border-4 border-indigo-700 -left-3"></div>
                    <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                    <p>{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;