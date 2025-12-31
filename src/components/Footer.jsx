import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Leaf className="h-8 w-8 text-primary-500" />
                            <span className="text-2xl font-bold tracking-tight">
                                JS<span className="text-primary-500">Mart</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your neighborhood grocery store bringing fresh vegetables, fruits, and essentials directly to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Instagram className="h-5 w-5" /></a>
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
                                <span className="text-gray-400">123 Grocery Lane, Fresh City, FC 12345</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                                <span className="text-gray-400">support@jsmart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} JS Mart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
