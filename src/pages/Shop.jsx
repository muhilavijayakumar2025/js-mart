import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Search, ChevronDown } from 'lucide-react';
import { products, categories } from '../data';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryQuery = queryParams.get('category');

    const [selectedCategory, setSelectedCategory] = useState(categoryQuery || 'All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortBy, setSortBy] = useState('featured');

    useEffect(() => {
        let filtered = products;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setSortedProducts([...filtered]);
    }, [selectedCategory, searchQuery, sortBy]);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Fresh Collection</h1>
                    <p className="text-gray-600 text-lg">Pure, organic, and straight from the source</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-1/4 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-2 mb-6">
                                <Search className="h-5 w-5 text-primary-600" />
                                <h3 className="font-bold text-lg text-gray-900">Search Products</h3>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-2 mb-6">
                                <Filter className="h-5 w-5 text-primary-600" />
                                <h3 className="font-bold text-lg text-gray-900">Categories</h3>
                            </div>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${selectedCategory === 'All' ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-primary-50'}`}
                                >
                                    All Categories
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${selectedCategory === cat.name ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-primary-50'}`}
                                    >
                                        <span className="mr-2">{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-8 gap-4 border border-gray-100">
                            <p className="text-gray-500 font-medium">Showing <span className="text-gray-900 font-bold">{sortedProducts.length}</span> products</p>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-500 font-medium">Sort by:</span>
                                <div className="relative">
                                    <select
                                        className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer font-medium text-gray-700"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {sortedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {sortedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                                <div className="bg-gray-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="h-10 w-10 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500">We couldn't find anything matching your filters. Try a different search.</p>
                                <button
                                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                                    className="mt-6 text-primary-600 font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
