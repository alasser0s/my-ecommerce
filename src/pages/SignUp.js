import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <PageTransition>
      <div className="p-8 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <input type="text" placeholder="Name" className="w-full border p-2 mb-4 rounded"/>
        <input type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded"/>
        <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded"/>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full mb-4">Sign Up</button>
        <p className="text-gray-700">
          Already have an account? <Link to="/signin" className="text-blue-600 underline">Sign In</Link>
        </p>
      </div>
    </PageTransition>
  );
}
