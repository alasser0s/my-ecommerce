import React, { useState } from 'react';
import { products } from '../data/products';
import PageTransition from '../components/PageTransition';
import ProductGrid from '../components/ProductGrid';

const categories = ['all', 'footwear', 'outerwear', 'electronics', 'accessories', 'apparel'];

export default function Shop() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(200); // assume highest price is around 200
  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => selectedCategory === 'all' ? true : p.category === selectedCategory)
    .filter(p => p.price <= maxPrice);

  return (
    <PageTransition>
      <div className="px-8 py-12 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Shop All Products</h1>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded mb-4 md:mb-0 dark:border-gray-700 dark:bg-gray-800"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded dark:border-gray-700 dark:bg-gray-800"
          >
            {categories.map(cat => (
              <option value={cat} key={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
          <div className="flex flex-col mb-4 md:mb-0">
            <label className="mb-1">Max Price: ${maxPrice}</label>
            <input
              type="range"
              min="0"
              max="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        {filtered.length === 0 ? (
          <p>No products found. Try adjusting your filters.</p>
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </PageTransition>
  );
}
