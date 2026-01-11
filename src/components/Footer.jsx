import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

import logo from '../assets/JS Logo_Au-01.png';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle smooth scroll to sections (matching navbar behavior)
    const handleSectionClick = (e, section) => {
        e.preventDefault();
        
        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation, then scroll
            setTimeout(() => {
                scrollToSection(section);
            }, 100);
        } else {
            scrollToSection(section);
        }
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = 100; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4 md:mb-6">
                            <a 
                                href="#home" 
                                onClick={(e) => handleSectionClick(e, 'home')}
                                className="cursor-pointer"
                            >
                                <img src={logo} alt="JS Mart Logo" className="h-24 sm:h-28 md:h-32 w-auto object-contain" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
                            Your trusted local supermarket bringing together the best of multicultural groceries for Australian communities.
                        </p>
                        <div className="flex space-x-3 md:space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61585605406324" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Facebook className="h-4 w-4 sm:h-5 sm:w-5" /></a>
                            <a href="https://www.instagram.com/js_mart_26" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"><Instagram className="h-4 w-4 sm:h-5 sm:w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li>
                                <a 
                                    href="#home" 
                                    onClick={(e) => handleSectionClick(e, 'home')}
                                    className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors cursor-pointer"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#products" 
                                    onClick={(e) => handleSectionClick(e, 'products')}
                                    className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors cursor-pointer"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    onClick={(e) => handleSectionClick(e, 'about')}
                                    className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors cursor-pointer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    onClick={(e) => handleSectionClick(e, 'contact')}
                                    className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors cursor-pointer"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Categories</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li><Link to="/shop?category=Vegetables" className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors">Vegetables</Link></li>
                            <li><Link to="/shop?category=Fruits" className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors">Fruits</Link></li>
                            <li><Link to="/shop?category=Dairy" className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors">Dairy & Milk</Link></li>
                            <li><Link to="/shop?category=Bakery" className="text-gray-400 hover:text-primary-500 text-sm sm:text-base transition-colors">Bakery Items</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Contact Info</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm sm:text-base">126 Brisbane Street, Dubbo NSW</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 shrink-0" />
                                <a 
                                    href="mailto:info@jsmart.com.au" 
                                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm sm:text-base break-all"
                                >
                                    info@jsmart.com.au
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-gray-500">
                    <p className="text-xs sm:text-sm text-center md:text-left">&copy; {new Date().getFullYear()} JS Mart Australia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
