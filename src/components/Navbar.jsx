import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

import logo from '../assets/JS Logo_Au-01.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems } = useCart();
    const navigate = useNavigate();

    return (

        <nav className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 border-b border-gray-100/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center -ml-8 md:-ml-20">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={logo} alt="JS Mart Logo" className="h-16 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-25">
                        <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</Link>
                        <Link to="/shop" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Shop</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-12">
                        <button className="text-gray-700 hover:text-primary-600 transition-colors">
                            <Search className="h-6 w-6" />
                        </button>
                        <button onClick={() => navigate('/login')} className="text-gray-700 hover:text-primary-600 transition-colors">
                            <User className="h-6 w-6" />
                        </button>
                        <Link to="/cart" className="relative group">
                            <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-600"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Home</Link>
                        <Link to="/shop" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Shop</Link>
                        <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">About</Link>
                        <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Contact</Link>
                        <div className="flex items-center space-x-4 px-3 py-2">
                            <button onClick={() => navigate('/login')}><User className="h-6 w-6 text-gray-700" /></button>
                            <Link to="/cart" className="relative">
                                <ShoppingCart className="h-6 w-6 text-gray-700" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
