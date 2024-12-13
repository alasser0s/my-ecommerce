import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-700 mb-4">The page you're looking for does not exist.</p>
        <Link to="/" className="text-blue-600 underline">Return Home</Link>
      </div>
    </PageTransition>
  );
}
