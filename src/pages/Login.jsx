import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Phone, ArrowLeft, ArrowRight, UserPlus, LogIn } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        login({ name: 'User', email: 'user@example.com' });
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-200 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-200 rounded-full blur-[100px] opacity-30"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link to="/" className="flex justify-center mb-10 group">
                    <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl font-black text-gray-900 leading-none">JS<span className="text-primary-600">Mart</span></span>
                    </div>
                </Link>
                <div className="bg-white py-10 px-6 shadow-2xl rounded-[3rem] border border-gray-100 sm:px-12">
                    <div className="flex justify-center mb-10 p-1 bg-gray-50 rounded-2xl">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-grow py-3 rounded-xl font-bold transition-all ${isLogin ? 'bg-white shadow-lg text-primary-600 scale-105' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-grow py-3 rounded-xl font-bold transition-all ${!isLogin ? 'bg-white shadow-lg text-primary-600 scale-105' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                        {isLogin ? 'Welcome Back!' : 'Create Account'}
                    </h2>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <UserPlus className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input type="text" required className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder-gray-400 font-medium" placeholder="Full name" />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email or Phone</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input type="text" required className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder-gray-400 font-medium" placeholder="mail@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                                {isLogin && <a href="#" className="text-xs font-bold text-primary-600 hover:underline mb-1">Forgot?</a>}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input type="password" required className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder-gray-400 font-medium" placeholder="••••••••" />
                            </div>
                        </div>

                        <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center space-x-3 shadow-2xl">
                            {isLogin ? <LogIn className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
                            <span>{isLogin ? 'Sign In Now' : 'Create Account'}</span>
                        </button>
                    </form>


                </div>

                <div className="mt-8 text-center">
                    <Link to="/" className="text-gray-400 font-bold flex items-center justify-center hover:text-primary-600 transition-colors">
                        <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
