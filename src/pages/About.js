import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', image: '/assets/team/alex.jpg' },
  { name: 'Maria Rodriguez', role: 'Head of Design', image: '/assets/team/maria.jpg' },
  { name: 'David Kim', role: 'Lead Developer', image: '/assets/team/david.jpg' },
  { name: 'Sophia Lee', role: 'Marketing Manager', image: '/assets/team/sophia.jpg' },
];

export default function About() {
  return (
    <PageTransition>
      <motion.div 
        className="p-8 dark:bg-gray-900 dark:text-white min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.section className="max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Us</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            MyStore was founded on the belief that quality products should be accessible to everyone. 
            We started as a small team of passionate individuals who wanted to make a difference in the 
            e-commerce world. Over the years, we’ve grown into a dedicated team serving customers worldwide.
          </p>
        </motion.section>

        <motion.section className="max-w-5xl mx-auto mb-16" variants={itemVariants}>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver quality products at fair prices, ensuring that every shopping experience is memorable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To become a global marketplace known for its integrity, customer satisfaction, and innovation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Customer First</li>
                <li>Quality & Integrity</li>
                <li>Continuous Innovation</li>
                <li>Community & Sustainability</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section className="max-w-5xl mx-auto" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Meet the Team</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="relative bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow transform hover:scale-105 group"
              >
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded mb-4"/>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-300">{member.role}</p>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                  <p className="text-white text-center px-4">Passionate about delivering the best experience for our customers.</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </PageTransition>
  );
}
