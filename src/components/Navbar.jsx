import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import logo from '../assets/JS Logo_Au-01.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    // Close mobile menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Handle smooth scroll and active section
    const handleNavClick = (e, section) => {
        e.preventDefault();
        closeMenu();
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
        setActiveSection(section);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled
            setIsScrolled(window.scrollY > 50);

            // Close mobile menu on scroll
            if (isOpen) {
                setIsOpen(false);
            }

            // Update active section
            const sections = ['home', 'products', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Close menu on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
            return () => window.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen]);

    const navLinks = [
        { href: '#home', label: 'Home', id: 'home' },
        { href: '#products', label: 'Products', id: 'products' },
        { href: '#about', label: 'About Us', id: 'about' },
        { href: '#contact', label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-300 ${
                    isScrolled ? 'h-20' : 'h-24'
                }`}>
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className={`flex items-center space-x-2 transition-all duration-300 ${
                                isScrolled ? 'scale-100' : 'scale-110'
                            }`}
                        >
                            <img
                                src={logo}
                                alt="JS Mart Logo"
                                className={`object-contain transition-all duration-300 ${
                                    isScrolled ? 'h-14' : 'h-16'
                                }`}
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                                    isScrolled
                                        ? activeSection === link.id
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                        : activeSection === link.id
                                            ? 'text-white bg-white/20'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                                {isScrolled && activeSection === link.id && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></span>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Sign In Button - Desktop */}
                    <div className="hidden md:flex items-center">
                        {isScrolled ? (
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Sign In
                            </button>
                        ) : (
                            <a
                                href="mailto:info@jsmart.com.au"
                                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold text-sm border border-white/30"
                            >
                                <Mail className="h-4 w-4" />
                                info@jsmart.com.au
                            </a>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors z-50 relative ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                                    : 'text-white hover:text-primary-400 hover:bg-white/10'
                            }`}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-2xl z-50 transition-all duration-300 ease-out ${
                    isOpen 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}
                style={{ top: isScrolled ? '80px' : '96px' }}
            >
                <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                                activeSection === link.id
                                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600 scale-[1.02]'
                                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50 hover:scale-[1.01]'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-gray-200">
                        <button
                            onClick={() => {
                                closeMenu();
                                navigate('/login');
                            }}
                            className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-center shadow-lg transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
