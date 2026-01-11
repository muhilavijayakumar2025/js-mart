import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-gray-50/50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

                <div className="relative w-full px-12 py-24 lg:py-32 text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-6">
                            24/7 Support
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Visit Us Today
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto font-light">
                            Have questions about our fresh produce or delivery services? We're here to help you every step of the way.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative curve */}
                <div className="absolute bottom-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[100px] text-gray-50/50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Contact Details</h2>
                    <p className="text-xl text-gray-600">Get in touch with us through any of these channels</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            icon: <MapPin className="w-6 h-6" />,
                            color: "bg-blue-50 text-blue-600",
                            title: 'Address',
                            value: '126 Brisbane Street',
                            desc: 'Dubbo NSW, Australia',
                            action: "Get directions"
                        },
                        {
                            icon: <Clock className="w-6 h-6" />,
                            color: "bg-orange-50 text-orange-600",
                            title: 'Opening Hours',
                            value: 'Open daily',
                            desc: 'Hours coming soon',
                            action: "View hours"
                        },
                        {
                            icon: <Mail className="w-6 h-6" />,
                            color: "bg-red-50 text-red-600",
                            title: 'Email',
                            value: 'info@jsmart.com.au',
                            desc: 'We reply within 2 hours',
                            action: "Send email"
                        },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`${info.color} p-3 rounded-xl transition-transform group-hover:scale-110 duration-300`}>
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-1">{info.title}</h4>
                                    <p className="text-xl font-bold text-gray-900 mb-1">{info.value}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-xs text-gray-400 font-medium">{info.desc}</p>
                                        <span className="text-xs font-semibold text-primary-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            {info.action} <ArrowRight className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
