import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

import logo from '../assets/JS Logo_Au-01.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="w-full px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="JS Mart Logo" className="h-32 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your neighborhood grocery store bringing fresh vegetables, fruits, and essentials directly to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61585605406324" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="https://www.instagram.com/js_mart_26" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-primary-500">Home</Link></li>
                            <li><Link to="/shop" className="text-gray-400 hover:text-primary-500">Shop</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary-500">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary-500">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Categories</h3>
                        <ul className="space-y-4">
                            <li><Link to="/shop?category=Vegetables" className="text-gray-400 hover:text-primary-500">Vegetables</Link></li>
                            <li><Link to="/shop?category=Fruits" className="text-gray-400 hover:text-primary-500">Fruits</Link></li>
                            <li><Link to="/shop?category=Dairy" className="text-gray-400 hover:text-primary-500">Dairy & Milk</Link></li>
                            <li><Link to="/shop?category=Bakery" className="text-gray-400 hover:text-primary-500">Bakery Items</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                                <span className="text-gray-400">126 Brisbane Street, Dubbo NSW</span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                                <span className="text-gray-400">info@jsmart.com.au</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 text-gray-500">
                    <p>&copy; {new Date().getFullYear()} JS Mart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
