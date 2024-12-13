import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <input type="text" placeholder="Your Name" className="w-full border p-2 mb-4 rounded"/>
        <input type="email" placeholder="Your Email" className="w-full border p-2 mb-4 rounded"/>
        <textarea placeholder="Your Message" className="w-full border p-2 mb-4 rounded h-32"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
      </div>
    </PageTransition>
  );
}
