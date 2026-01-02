import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Star, ShieldCheck, Truck, BadgeDollarSign, ArrowRight } from 'lucide-react';
import { categories, products, reviews } from '../data';
import ProductCard from '../components/ProductCard';
import heroBanner from '../assets/hero-banner.png';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBanner}
                        alt="Fresh Groceries"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full font-bold text-sm mb-4 uppercase tracking-wider">
                            100% Organic & Fresh
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                            Fresh Groceries <br />
                            <span className="text-primary-600 tracking-tight">Delivered to Your Doorstep</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            Daily fresh vegetables, fruits & essentials at best price. Quality products sourced directly from farms.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/shop" className="btn-primary flex items-center space-x-2">
                                <ShoppingCart className="h-5 w-5" />
                                <span>Shop Now</span>
                            </Link>
                            <button className="btn-secondary flex items-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>Call Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <ShieldCheck className="h-10 w-10 text-primary-600" />, title: 'Fresh Products', desc: 'Sourced daily from local farmers' },
                            { icon: <BadgeDollarSign className="h-10 w-10 text-primary-600" />, title: 'Best Price', desc: 'Guaranteed best prices in the market' },
                            { icon: <Truck className="h-10 w-10 text-primary-600" />, title: 'Fast Delivery', desc: 'Get your items in under 2 hours' },
                            { icon: <Star className="h-10 w-10 text-primary-600" />, title: 'Quality Checked', desc: 'Multi-level quality inspection' },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
                            <p className="text-gray-500 text-lg">Browse through our wide range of categories</p>
                        </div>
                        <Link to="/shop" className="text-primary-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                            View All <ArrowRight className="h-5 w-5 ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat) => (
                            <Link key={cat.id} to={`/shop?category=${cat.name}`} className="group block h-full">
                                <div className={`aspect-square rounded-2xl ${cat.color} relative overflow-hidden flex flex-col items-center justify-center p-6 group-hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-primary-500 h-full`}>
                                    <div className="relative z-10 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                        <span className="text-4xl mb-3">{cat.icon}</span>
                                        <span className={`font-bold text-center ${cat.text}`}>{cat.name}</span>
                                    </div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img src={cat.image} className="w-full h-full object-cover" alt={cat.name} />
                                        <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm p-2 text-center">
                                            <span className="text-white font-bold text-sm tracking-wide">{cat.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Today's Offers */}
            <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
                    <ShoppingCart className="h-96 w-96 rotate-[-15deg]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4">Today's Special Offers</h2>
                        <p className="text-primary-200 text-lg">Don't miss out on these limited time deals</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 h-full flex flex-col">
                            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm mb-4 inline-block w-max">Flash Sale</span>
                            <h3 className="text-2xl font-bold mb-2">Up to 50% OFF</h3>
                            <p className="text-primary-100 mb-6 flex-grow">On all seasonal vegetables this weekend only.</p>
                            <button className="bg-white text-primary-900 px-6 py-2 rounded-full font-bold hover:bg-primary-100 transition-colors w-full sm:w-auto">Grab Now</button>
                        </div>
                        <div className="bg-primary-500 p-8 rounded-3xl shadow-2xl md:scale-110 border-4 border-white/20 z-10 h-full flex flex-col bg-gradient-to-br from-primary-500 to-primary-600">
                            <span className="bg-white text-primary-600 font-bold px-3 py-1 rounded-full text-sm mb-4 inline-block">Best Value</span>
                            <h3 className="text-2xl font-bold mb-2">Combo Pack</h3>
                            <p className="text-white mb-6">Family vegetable pack (5kg) for just $19.99</p>
                            <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-bold hover:bg-primary-100 transition-colors">Order Combo</button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                            <span className="bg-green-400 text-black font-bold px-3 py-1 rounded-full text-sm mb-4 inline-block">New arrival</span>
                            <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
                            <p className="text-primary-100 mb-6">On your first 3 orders above $30. Use code: FRESH</p>
                            <button className="bg-white text-primary-900 px-6 py-2 rounded-full font-bold hover:bg-primary-100 transition-colors">Start Shopping</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Fresh From Farm</h2>
                            <p className="text-gray-500 text-lg">Top selling products this week</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                                <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-primary-100" />
                                <div className="flex justify-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                                <h4 className="font-bold text-lg">{review.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Order Now & Get Fresh Items Today!</h2>
                        <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto relative z-10">Experience the best quality groceries delivered to your home within hours. First delivery is on us!</p>
                        <Link to="/shop" className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-xl inline-block relative z-10">
                            Start Shopping Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
