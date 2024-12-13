import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-gray-100 py-6 mt-12 border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} MyStore. All rights reserved. | <a href="/terms" className="underline hover:text-blue-600 dark:hover:text-blue-400">Terms & Conditions</a></p>
      </div>
    </footer>
  );
}
