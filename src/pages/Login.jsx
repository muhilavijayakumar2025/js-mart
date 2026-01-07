import { Link } from 'react-router-dom';
import { UserCircle, Sparkles, Shield, Users, Zap, ArrowLeft, Home } from 'lucide-react';

const Login = () => {
    return (
        <div className="bg-white min-h-screen py-12 relative overflow-hidden">
            <div className="w-full px-12 relative z-10">
                <Link to="/" className="flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors group">
                    <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to Home</span>
                </Link>

                {/* Coming Soon Content */}
                <div className="flex flex-col items-center justify-center min-h-[70vh]">
                    {/* Animated Icon */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 p-8 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-500">
                            <UserCircle className="h-20 w-20 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                            <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 animate-pulse">
                                Coming Soon
                            </h1>
                            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Sign In / Sign Up
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
                        We're building a secure and seamless authentication experience!
                        <br />
                        <span className="text-green-600 font-bold">Your account features are on the way.</span>
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-gray-900 font-bold text-lg mb-2">Secure Login</h3>
                            <p className="text-gray-600 text-sm">Advanced security for your account</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-gray-900 font-bold text-lg mb-2">User Profiles</h3>
                            <p className="text-gray-600 text-sm">Personalized shopping experience</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="bg-gradient-to-br from-lime-500 to-lime-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                <Zap className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-gray-900 font-bold text-lg mb-2">Quick Access</h3>
                            <p className="text-gray-600 text-sm">One-click login and checkout</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link
                            to="/"
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <Home className="h-6 w-6" />
                            Back to Home
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-green-100 hover:bg-green-200 border border-green-300 text-green-700 font-bold px-12 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <Sparkles className="h-6 w-6" />
                            Get Updates
                        </Link>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-16 max-w-md w-full">
                        <div className="bg-white/10 backdrop-blur-lg rounded-full h-3 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 h-full rounded-full animate-pulse" style={{ width: '60%' }}></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-3 font-medium">Development Progress: 60%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
