import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles, Clock, Bell, Rocket, ArrowLeft, Home, Star } from 'lucide-react';

const ProductDetails = () => {
    // Static "Coming Soon" page for all users
    return (
        <div className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 min-h-screen py-12 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Link to="/shop" className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to Shop</span>
                </Link>

                {/* Coming Soon Content */}
                <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                    {/* Animated Icon */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 p-8 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-500">
                            <Rocket className="h-20 w-20 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                            <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-blue-400 animate-pulse">
                                Coming Soon
                            </h1>
                            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                        <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Product Details Page
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        We're working hard to bring you an amazing product experience!
                        <br />
                        <span className="text-emerald-400 font-bold">Stay tuned for something extraordinary.</span>
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Launching Soon</h3>
                            <p className="text-gray-300 text-sm">Enhanced product details coming your way</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Star className="h-8 w-8 text-white fill-current" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Premium Features</h3>
                            <p className="text-gray-300 text-sm">Advanced filtering and recommendations</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Bell className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Get Notified</h3>
                            <p className="text-gray-300 text-sm">Be the first to know when we launch</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link
                            to="/shop"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            Continue Shopping
                        </Link>
                        <Link
                            to="/"
                            className="bg-white/10 backdrop-blur-lg border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <Home className="h-6 w-6" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-16 max-w-md w-full">
                        <div className="bg-white/10 backdrop-blur-lg rounded-full h-3 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-blue-500 h-full rounded-full animate-pulse" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-3 font-medium">Development Progress: 65%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
