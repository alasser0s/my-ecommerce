import React from 'react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  // Example: New arrivals = first 4 products, best deals = products under $60
  const newArrivals = products.slice(0, 4);
  const bestDeals = products.filter(p => p.price < 60).slice(0,4);

  return (
    <PageTransition>
      <Hero />
      <section className="px-8 py-12 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">New Arrivals</h2>
        <ProductGrid products={newArrivals} />
      </section>
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Best Deals</h2>
        <ProductGrid products={bestDeals} />
      </section>
      <section className="px-8 py-12 bg-blue-50 dark:bg-blue-900 dark:text-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-200">Get the latest updates and offers.</p>
        <div className="inline-flex">
          <input type="email" placeholder="Your Email" className="border p-2 rounded-l dark:bg-gray-800 dark:border-gray-700" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Subscribe</button>
        </div>
      </section>
    </PageTransition>
  );
}
