import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Star, ShieldCheck, Truck, BadgeDollarSign, ArrowRight, Sparkles, CheckCircle2, Clock, Award, Mail, MapPin } from 'lucide-react';
import { categories, products, reviews } from '../data';
import ProductCard from '../components/ProductCard';
import heroBanner from '../assets/hero-banner.png';
import tastyNibblesPoster from '../assets/tasty-nibbles-poster.png';
import mottaramPoster from '../assets/mottaram-poster.png';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="flex flex-col">
            {/* Hero Section - Modern Design */}
            <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
                                JS Mart is Almost Here!
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Your one-stop destination for
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Fresh produce. Authentic flavours. Everyday essentials.
                                <br />
                                <span className="text-primary-600 font-bold">Everything you love, in one convenient place 💚</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                                <a href="#products" className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                                    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                                    <span>Start Shopping</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src={heroBanner}
                                    alt="Fresh Groceries"
                                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 border-2 sm:border-4 border-primary-100">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="bg-primary-100 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                                        <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary-600" />
                                    </div>
                                    <div>
                                        <div className="font-black text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900">Best Price</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Guaranteed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced */}
            <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                            Why Shop at <span className="text-primary-600">JS Mart</span>?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Shop smarter with JS Mart!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: <ShieldCheck className="h-12 w-12 text-white" />,
                                title: 'Wide Range',
                                desc: 'Wide range of multicultural groceries',
                                bg: 'bg-gradient-to-br from-green-500 to-green-600'
                            },
                            {
                                icon: <Truck className="h-12 w-12 text-white" />,
                                title: 'Fresh Stock Daily',
                                desc: 'Fresh stock available daily',
                                bg: 'bg-gradient-to-br from-primary-500 to-primary-600'
                            },
                            {
                                icon: <Star className="h-12 w-12 text-white" />,
                                title: 'Trusted Brands',
                                desc: 'Trusted Australian brands',
                                bg: 'bg-gradient-to-br from-blue-500 to-blue-600'
                            },
                            {
                                icon: <ShieldCheck className="h-12 w-12 text-white" />,
                                title: 'Quality Products',
                                desc: 'Quality products you can rely on',
                                bg: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
                            },
                            {
                                icon: <BadgeDollarSign className="h-12 w-12 text-white" />,
                                title: 'Convenient Location',
                                desc: 'Convenient local shopping',
                                bg: 'bg-gradient-to-br from-purple-500 to-purple-600'
                            },
                            {
                                icon: <Star className="h-12 w-12 text-white" />,
                                title: 'Friendly Service',
                                desc: 'Friendly customer service',
                                bg: 'bg-gradient-to-br from-pink-500 to-pink-600'
                            },
                        ].map((feature, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-200 transform hover:-translate-y-2 h-full">
                                    <div className={`${feature.bg} w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="scale-75 sm:scale-90 md:scale-100">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Brands Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full mb-4 sm:mb-6">
                            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                            <span className="text-primary-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Trusted Partners</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                            Featured <span className="text-primary-600">Brands</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">Discover authentic flavors from premium international brands</p>
                    </div>

                    {/* Posters Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Tasty Nibbles Poster */}
                        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                            <img
                                src={tastyNibblesPoster}
                                alt="Tasty Nibbles - Deliciously Easy... Anytime, Anywhere"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Mottaram Poster */}
                        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                            <img
                                src={mottaramPoster}
                                alt="Mottaram - One World, One Recipe for Love"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <p className="text-base sm:text-lg text-gray-600 mb-6 px-4">
                            Explore authentic products from leading international brands available at JS Mart
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Preview - Enhanced */}
            <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                            Our <span className="text-primary-600">Product Range</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">Discover our wide selection of multicultural groceries</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { id: 1, name: 'Fresh Fruits & Vegetables', icon: '🥦', color: 'bg-green-100', text: 'text-green-600', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=500&q=60' },
                            { id: 2, name: 'Indian, Sri Lankan & Asian Groceries', icon: '🍚', color: 'bg-orange-100', text: 'text-orange-600', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=500&q=60' },
                            { id: 3, name: 'African & International Food', icon: '🌍', color: 'bg-blue-100', text: 'text-blue-600', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=60' },
                            { id: 4, name: 'Dairy Products', icon: '🥛', color: 'bg-blue-100', text: 'text-blue-600', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=60' },
                            { id: 5, name: 'Bakery & Bread', icon: '🍞', color: 'bg-yellow-100', text: 'text-yellow-600', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60' },
                            { id: 6, name: 'Pantry & Frozen Foods', icon: '🥫', color: 'bg-red-100', text: 'text-red-600', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=60' },
                            { id: 7, name: 'Household Essentials', icon: '🧼', color: 'bg-purple-100', text: 'text-purple-600', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=60' },
                            { id: 8, name: 'Beverages & Snacks', icon: '🥤', color: 'bg-pink-100', text: 'text-pink-600', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=60' },
                        ].map((cat) => (
                            <Link key={cat.id} to={`/shop?category=${cat.name}`} className="group block h-full">
                                <div className="aspect-square rounded-2xl sm:rounded-3xl relative overflow-hidden group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-primary-500 h-full transform group-hover:scale-105">
                                    <img src={cat.image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" alt={cat.name} />
                                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 md:p-4 text-center bg-black/50 backdrop-blur-sm">
                                        <span className="text-white font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-wide leading-tight">{cat.name}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Weekly Offers - Enhanced */}
            <section id="offers" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-green-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary-700 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-green-700 rounded-full blur-3xl opacity-20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6">
                            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                            <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">Weekly Specials</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
                            Weekly Specials & New Arrivals
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-primary-200 px-4">
                            Visit us in-store to discover our latest offers!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { 
                                icon: '🛒', 
                                title: 'Farm-fresh fruits & vegetables', 
                                desc: 'at great prices' 
                            },
                            { 
                                icon: '🥛', 
                                title: 'Daily essentials', 
                                desc: 'always in stock' 
                            },
                            { 
                                icon: '🇦🇺', 
                                title: 'Katoomba Foods products', 
                                desc: 'arriving soon' 
                            },
                            { 
                                icon: '✨', 
                                title: 'Fresh stock', 
                                desc: 'added regularly' 
                            },
                        ].map((offer, index) => (
                            <div 
                                key={index} 
                                className="bg-white/10 backdrop-blur-lg p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border-2 border-white/20 h-full flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:border-white/30"
                            >
                                <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">{offer.icon}</div>
                                <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">
                                    {offer.title}
                                </h3>
                                <p className="text-primary-100 text-sm sm:text-base mt-auto">
                                    {offer.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products - Enhanced */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full mb-4 sm:mb-6">
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                            <span className="text-primary-700 font-bold text-xs sm:text-sm uppercase tracking-wider">Premium Quality</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                            Fresh From <span className="text-primary-600">Farm</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Top selling products this week - Handpicked for you</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Call to Action - Enhanced */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </div>

                        {/* Animated Circles */}
                        <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                        <div className="relative z-10 text-center">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">Limited Time</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
                                Order Now & Get<br />
                                <span className="text-yellow-300">Fresh Items Today!</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                                Experience the best quality groceries delivered to your home within hours.
                                <span className="font-bold text-white"> First delivery is on us!</span>
                            </p>
                            <a href="#products" className="inline-flex items-center gap-2 sm:gap-3 bg-white text-primary-600 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-primary-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
                                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                                <span className="whitespace-nowrap">Start Shopping Now</span>
                                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider">About Us</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">About <span className="text-primary-600">JS Mart</span></h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            JS Mart is your trusted local supermarket bringing together the best of multicultural groceries for Australian communities.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
                        <div className="lg:w-1/2 relative w-full">
                            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-primary-100 rounded-full -z-10 animate-pulse"></div>
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                                    alt="Our Shop"
                                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-10 md:-right-10 bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl z-20 border border-gray-100">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-600 mb-1">15+</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Years Experience</div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 sm:space-y-8">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Your Trusted Multicultural Grocery Store</h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                From fresh fruits and vegetables to authentic international food items and daily household essentials, we are committed to offering quality products at affordable prices — all in a clean, friendly shopping environment.
                            </p>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Whether you're looking for traditional ingredients or everyday groceries, JS Mart makes shopping simple and enjoyable.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {[
                                    { icon: <ShieldCheck className="text-primary-600" />, title: 'Quality Promise', desc: '100% Guaranteed fresh items' },
                                    { icon: <Star className="text-primary-600" />, title: 'Local Sourcing', desc: 'Support local farm communities' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-primary-100 group">
                                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                            <div className="bg-primary-100 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                                <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Our mission is to revolutionize the way people buy groceries by providing a seamless, transparent, and eco-friendly shopping experience that prioritizes health and freshness.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                            <div className="bg-green-100 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                                <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Our Vision</h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                To become the most trusted name in health-focused grocery retail, inspiring communities to live better through the power of real, sustainable food.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="inline-block py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-primary-100 text-primary-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                            24/7 Support
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">Visit Us Today</h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Have questions about our fresh produce or delivery services? We're here to help you every step of the way.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12">
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 sm:mb-4">Contact Details</h3>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Get in touch with us through any of these channels</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                {
                                    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                                    color: "bg-blue-50 text-blue-600",
                                    title: 'Address',
                                    value: '126 Brisbane Street',
                                    desc: 'Dubbo NSW, Australia',
                                },
                                {
                                    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                                    color: "bg-red-50 text-red-600",
                                    title: 'Email',
                                    value: 'info@jsmart.com.au',
                                    desc: 'We reply within 2 hours',
                                },
                            ].map((info, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className={`${info.color} p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-transform group-hover:scale-110 duration-300`}>
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-gray-500 font-medium text-xs sm:text-sm uppercase tracking-wide mb-1">{info.title}</h4>
                                            <p className="text-lg sm:text-xl font-bold text-gray-900 mb-1 break-words">{info.value}</p>
                                            <p className="text-xs text-gray-400 font-medium mt-2 sm:mt-3">{info.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
