import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Star, ShieldCheck, Truck, BadgeDollarSign, ArrowRight, Sparkles, CheckCircle2, Clock, Award, Mail, MapPin } from 'lucide-react';
import { categories, products, reviews } from '../data';
import ProductCard from '../components/ProductCard';
import ExpandableText from '../components/ExpandableText';
import heroBanner from '../assets/hero-banner.png';
import tastyNibblesPoster from '../assets/tasty-nibbles-poster.png';
import mottaramPoster from '../assets/mottaram-poster.png';

const Home = () => {
    const featuredProducts = products.slice(0, 4);

    // Hero images array - auto-changing carousel
    const heroImages = [
        heroBanner,
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1920&q=80',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-change image every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change every 10 seconds - each image stays longer for better viewing

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="flex flex-col">
            {/* Hero Section - Modern Design with Background Image */}
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image Carousel */}
                <div className="absolute inset-0 z-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-[500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`JS Mart Background ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    {/* Dark Overlay - Reduced opacity for better image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-900/50 z-20"></div>
                    {/* Additional Gradient Overlay for Depth - Lighter */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/30 z-20"></div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20">
                    <div className="flex items-center justify-center">
                        {/* Content */}
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
                                JS Mart is Almost Here!
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
                                Your one-stop destination for premium groceries and authentic international ingredients. Fresh produce, authentic flavours, and everyday essentials - everything you love in one convenient place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                                <a href="#products" className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                                    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                                    <span>Start Shopping</span>
                                </a>
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
                        <ExpandableText
                            text="At JS Mart, we understand that shopping for groceries should be convenient, affordable, and enjoyable. Our commitment to quality, freshness, and customer satisfaction sets us apart as Dubbo's premier multicultural grocery destination. We've built our reputation on providing exceptional value, diverse product selection, and personalized service that makes every shopping experience memorable."
                            maxLength={200}
                            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-center"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: <ShieldCheck className="h-12 w-12 text-white" />,
                                title: 'Wide Range',
                                desc: 'Our extensive selection includes thousands of products from around the world. From fresh Australian produce to authentic Indian, Sri Lankan, Asian, and African ingredients, we stock everything you need for your favorite recipes. Whether you\'re preparing traditional dishes or exploring new cuisines, our diverse inventory ensures you\'ll find exactly what you\'re looking for.',
                                bg: 'bg-gradient-to-br from-green-500 to-green-600'
                            },
                            {
                                icon: <Truck className="h-12 w-12 text-white" />,
                                title: 'Fresh Stock Daily',
                                desc: 'We receive fresh deliveries every single day to ensure our produce section is always stocked with the highest quality fruits and vegetables. Our commitment to freshness means you can trust that every item in our store meets our strict quality standards. We work directly with local farms and trusted suppliers to bring you farm-fresh products that are as nutritious as they are delicious.',
                                bg: 'bg-gradient-to-br from-primary-500 to-primary-600'
                            },
                            {
                                icon: <Star className="h-12 w-12 text-white" />,
                                title: 'Trusted Brands',
                                desc: 'We carefully curate our product selection to include only the most trusted and reputable brands. From well-known Australian manufacturers to authentic international brands, every product on our shelves has been selected for its quality and reliability. Our partnerships with leading suppliers ensure consistent availability of your favorite items.',
                                bg: 'bg-gradient-to-br from-blue-500 to-blue-600'
                            },
                            {
                                icon: <ShieldCheck className="h-12 w-12 text-white" />,
                                title: 'Quality Products',
                                desc: 'Quality is at the heart of everything we do. We conduct regular quality checks and maintain strict standards for all products in our store. Our team is trained to identify and source only the finest items, ensuring that every purchase you make meets our high expectations. When you shop at JS Mart, you can shop with confidence knowing that quality is guaranteed.',
                                bg: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
                            },
                            {
                                icon: <BadgeDollarSign className="h-12 w-12 text-white" />,
                                title: 'Convenient Location',
                                desc: 'Located at 126 Brisbane Street in Dubbo, NSW, JS Mart is easily accessible and offers ample parking for your convenience. Our central location makes it simple to incorporate grocery shopping into your daily routine. We\'re open seven days a week with extended hours to accommodate your busy schedule, making it easy to shop when it\'s most convenient for you.',
                                bg: 'bg-gradient-to-br from-purple-500 to-purple-600'
                            },
                            {
                                icon: <Star className="h-12 w-12 text-white" />,
                                title: 'Friendly Service',
                                desc: 'Our knowledgeable and friendly staff are always ready to help you find what you need. We believe in building lasting relationships with our customers and take pride in providing personalized service that goes above and beyond. Whether you need help locating a specific product or have questions about ingredients, our team is here to assist you with a smile.',
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
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 text-left">{feature.title}</h3>
                                    <ExpandableText
                                        text={feature.desc}
                                        maxLength={120}
                                        className="text-left"
                                    />
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
                        <ExpandableText
                            text="Discover authentic flavors from premium international brands that we're proud to partner with. At JS Mart, we carefully select our brand partners based on their commitment to quality, authenticity, and customer satisfaction. Our featured brands represent the best in international cuisine, from trusted Australian manufacturers to authentic specialty brands from around the world. These partnerships allow us to offer you products that meet the highest standards of quality and authenticity, ensuring that every meal you prepare is as delicious as it is memorable."
                            maxLength={250}
                            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-center"
                        />
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
                            Explore authentic products from leading international brands that will be available at JS Mart
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
                        <ExpandableText
                            text="Discover our wide selection of multicultural groceries carefully curated to meet all your culinary needs. At JS Mart, we pride ourselves on offering an extensive range of products that celebrate the rich diversity of global cuisine while supporting local Australian producers. From farm-fresh produce to authentic international ingredients, specialty items, and everyday essentials, our comprehensive inventory ensures you'll find everything you need for your kitchen. We continuously expand our product range based on customer feedback and seasonal availability, ensuring we stay ahead of culinary trends while maintaining our commitment to quality and affordability."
                            maxLength={250}
                            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-center"
                        />
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
                            <Link key={cat.id} to="/#products" className="group block h-full">
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
                        <ExpandableText
                            text="Visit us in-store to discover our latest offers and exciting new arrivals! Every week, we feature special promotions on popular items, seasonal produce, and newly added products from around the world. Our weekly specials are designed to help you save money while exploring new flavors and stocking up on your favorites. We regularly introduce new products based on customer requests and emerging food trends, ensuring that there's always something new and exciting to discover at JS Mart. Don't miss out on these limited-time offers—visit us regularly to take advantage of the best deals and be among the first to try our newest arrivals."
                            maxLength={250}
                            className="text-base sm:text-lg md:text-xl text-white px-4 max-w-3xl mx-auto text-center"
                            buttonText={{ more: 'Read More', less: 'Read Less' }}
                        />
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
                                desc: 'will be available in stock soon'
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
                        <ExpandableText
                            text="Top selling products this week - Handpicked for you. Our featured products represent the best of what JS Mart has to offer, carefully selected based on quality, freshness, and customer popularity. Each product in this section has been chosen for its exceptional quality and value. From farm-fresh produce to premium international ingredients, these items represent our commitment to bringing you the finest products available. We work directly with trusted suppliers and local farms to ensure that every featured product meets our strict quality standards and provides exceptional value for your money."
                            maxLength={250}
                            className="text-base sm:text-lg md:text-xl text-gray-600 px-4 max-w-3xl mx-auto text-center"
                        />
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
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                                Experience the best quality groceries delivered to your home within hours.
                                <span className="font-bold text-white"> First delivery is on us!</span>
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8 md:mb-10">
                                At JS Mart, we understand that convenience matters. That's why we're committed to making your grocery shopping experience as seamless as possible. Whether you're planning a special meal, stocking up on essentials, or exploring new flavors, we're here to provide you with the highest quality products at competitive prices. Our team is dedicated to ensuring that every item you purchase meets our standards for freshness, quality, and value.
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
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-600 mb-1">NEW</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Supermarket</div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 sm:space-y-8">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-left">Your Trusted Multicultural Grocery Store</h3>
                            <ExpandableText
                                text="From fresh fruits and vegetables to authentic international food items and daily household essentials, we are committed to offering quality products at affordable prices — all in a clean, friendly shopping environment. As Dubbo's newest supermarket, we're excited to serve the community and build lasting relationships with our customers."
                                maxLength={200}
                                className="text-left"
                            />
                            <ExpandableText
                                text="Whether you're looking for traditional ingredients to recreate family recipes, exploring new cuisines, or simply stocking up on everyday essentials, JS Mart makes shopping simple and enjoyable. Our extensive product range includes everything from farm-fresh Australian produce to specialty items from India, Sri Lanka, Asia, Africa, and beyond."
                                maxLength={200}
                                className="text-left"
                            />
                            <ExpandableText
                                text="We understand that food is more than just sustenance—it's a connection to culture, family, and community. That's why we go the extra mile to source authentic products that help you create memorable meals. Our team is passionate about helping you find exactly what you need, whether you're a seasoned cook or just starting your culinary journey."
                                maxLength={200}
                                className="text-left"
                            />
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
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6 text-left">Our Mission</h3>
                            <ExpandableText
                                text="Our mission is to revolutionize the way people buy groceries by providing a seamless, transparent, and eco-friendly shopping experience that prioritizes health and freshness. We believe that everyone deserves access to high-quality, affordable groceries that support both their health and their cultural traditions. We're committed to supporting local Australian farmers and producers while also bringing authentic international products to our community. By maintaining strong relationships with suppliers and continuously improving our operations, we ensure that every customer receives exceptional value and service."
                                maxLength={250}
                                className="text-left"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                            <div className="bg-green-100 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                                <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6 text-left">Our Vision</h3>
                            <ExpandableText
                                text="To become the most trusted name in health-focused grocery retail, inspiring communities to live better through the power of real, sustainable food. We envision a future where shopping for groceries is not just a chore, but an enjoyable experience that brings people together and celebrates the rich diversity of global cuisine. As we continue to grow and evolve, we remain dedicated to maintaining our core values of quality, affordability, and exceptional customer service. We strive to be more than just a grocery store—we aim to be a cornerstone of the community, supporting local families and businesses while bringing the world's flavors to your table."
                                maxLength={250}
                                className="text-left"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shopping Guide Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider">Shopping Guide</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
                            Your Complete <span className="text-primary-600">Shopping Experience</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Shopping at JS Mart is designed to be simple, enjoyable, and efficient. We've created a comprehensive guide to help you make the most of your visit and find everything you need quickly and easily.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                        <div className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 text-left">Store Layout & Navigation</h3>
                            <ExpandableText
                                text="Our store is thoughtfully organized into clearly marked sections, making it easy to find exactly what you're looking for. Fresh produce is prominently displayed near the entrance, followed by our extensive multicultural grocery aisles, dairy and refrigerated sections, and household essentials. Each section is clearly labeled with bilingual signage to help all customers navigate comfortably. Our friendly staff members are always available to assist you in locating specific items or answering questions about products."
                                maxLength={200}
                                className="text-left"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 text-left">Fresh Produce Selection</h3>
                            <ExpandableText
                                text="Our produce section features a rotating selection of seasonal fruits and vegetables sourced from local Australian farms and trusted suppliers. We receive fresh deliveries daily to ensure peak freshness and quality. Look for our 'Fresh Today' labels on items that arrived in the morning, and don't hesitate to ask our produce team for recommendations on the best selections for your recipes. We're committed to helping you choose the freshest, most flavorful produce available."
                                maxLength={200}
                                className="text-left"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 text-left">International Products</h3>
                            <ExpandableText
                                text="Our multicultural grocery section is one of the largest in the region, featuring authentic ingredients from India, Sri Lanka, Asia, Africa, and beyond. From specialty spices and condiments to traditional grains, legumes, and cooking essentials, we stock everything needed for authentic international cuisine. If you're looking for a specific ingredient that we don't currently stock, please let us know. We regularly add new products based on customer requests and are always expanding our international selection to better serve our diverse community."
                                maxLength={200}
                                className="text-left"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 text-left">Weekly Specials & Savings</h3>
                            <ExpandableText
                                text="Every week, we feature special promotions on popular items, seasonal produce, and new arrivals. Our weekly specials are designed to help you save money while trying new products and stocking up on favorites. Visit us regularly to take advantage of these limited-time offers, and follow our updates to stay informed about upcoming promotions. We also offer bulk purchase discounts on select items, making it even more affordable to stock your pantry with quality products."
                                maxLength={200}
                                className="text-left"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider">Frequently Asked Questions</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
                            Common <span className="text-primary-600">Questions</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Find answers to the most commonly asked questions about shopping at JS Mart
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        {[
                            {
                                question: 'What are your store hours?',
                                answer: 'JS Mart is open seven days a week to serve you. Our regular hours are Monday through Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We may have extended hours during special occasions and holidays, so please call ahead or check our updates for any schedule changes.',
                                expandable: true
                            },
                            {
                                question: 'Do you offer delivery services?',
                                answer: 'Currently, we focus on providing an exceptional in-store shopping experience. However, we are continuously evaluating delivery options to better serve our customers. For large orders or special circumstances, please contact us directly at info@jsmart.com.au, and we\'ll do our best to accommodate your needs. Stay tuned for updates on future delivery services.'
                            },
                            {
                                question: 'How do you ensure product freshness?',
                                answer: 'Freshness is our top priority. We receive daily deliveries of fresh produce and regularly rotate our inventory to ensure all products meet our quality standards. Our team conducts regular quality checks, and any items that don\'t meet our freshness criteria are immediately removed. We work directly with local farms and trusted suppliers to minimize the time between harvest and your shopping cart.'
                            },
                            {
                                question: 'Can you help me find specific international ingredients?',
                                answer: 'Absolutely! Our knowledgeable staff is well-versed in our extensive international product selection and can help you locate specific ingredients for your recipes. If we don\'t currently stock an item you\'re looking for, we\'re happy to take note of your request and consider adding it to our inventory. We regularly expand our product range based on customer needs and preferences.'
                            },
                            {
                                question: 'Do you accept special orders or bulk purchases?',
                                answer: 'Yes, we accommodate special orders and bulk purchases whenever possible. Whether you need large quantities for an event, specific products for a recipe, or items we don\'t regularly stock, please contact us in advance at info@jsmart.com.au or speak with our store manager. We\'ll work with you to fulfill your requirements and may offer special pricing for bulk orders.'
                            },
                            {
                                question: 'What payment methods do you accept?',
                                answer: 'We accept all major payment methods including cash, EFTPOS, credit cards (Visa, Mastercard, American Express), and contactless payments. For your convenience, we also support mobile payment options like Apple Pay and Google Pay. All transactions are processed securely, and we maintain competitive pricing across all our products.'
                            },
                            {
                                question: 'Do you have parking available?',
                                answer: 'Yes, we have convenient parking available for our customers. Our location at 126 Brisbane Street, Dubbo, offers easy access and ample parking spaces to make your shopping experience as convenient as possible. We\'re committed to ensuring that visiting JS Mart is hassle-free from the moment you arrive.'
                            },
                            {
                                question: 'How often do you receive new products?',
                                answer: 'We continuously update our inventory with new products based on customer demand, seasonal availability, and emerging food trends. New items arrive regularly, and we make it a point to introduce exciting products from around the world. Follow our updates or visit us frequently to discover the latest additions to our product range.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4 text-left">
                                    {faq.question}
                                </h3>
                                <ExpandableText
                                    text={faq.answer}
                                    maxLength={150}
                                    className="text-left"
                                />
                            </div>
                        ))}
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
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                            Have questions about our fresh produce, product availability, or shopping services? We're here to help you every step of the way. Our friendly and knowledgeable team is always ready to assist you with finding products, answering questions about ingredients, or helping you plan your shopping trip. Whether you're a regular customer or visiting for the first time, we're committed to making your experience at JS Mart exceptional.
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
