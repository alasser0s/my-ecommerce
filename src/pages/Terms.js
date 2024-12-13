import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Terms() {
  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 mb-4">
          These terms and conditions outline the rules and regulations for the use of MyStore’s Website.
        </p>
        <p className="text-gray-700">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use MyStore if you do not agree to take all of the terms and conditions stated on this page.
        </p>
      </div>
    </PageTransition>
  );
}
