import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, ArrowRight } from 'lucide-react';
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

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center text-white">
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
                            Let's Start a Conversation
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            {
                                icon: <Phone className="w-6 h-6" />,
                                color: "bg-blue-50 text-blue-600",
                                title: 'Call Us Directly',
                                value: '+1 (555) 123-4567',
                                desc: 'Mon-Sun, 8am - 10pm EST',
                                action: "Call now"
                            },
                            {
                                icon: <Mail className="w-6 h-6" />,
                                color: "bg-red-50 text-red-600",
                                title: 'Email Support',
                                value: 'hello@jsmart.com',
                                desc: 'We reply within 2 hours',
                                action: "Send email"
                            },
                            {
                                icon: <MessageSquare className="w-6 h-6" />,
                                color: "bg-green-50 text-green-600",
                                title: 'Live Chat',
                                value: 'WhatsApp Support',
                                desc: 'Instant responses 24/7',
                                action: "Start chat"
                            },
                            {
                                icon: <Clock className="w-6 h-6" />,
                                color: "bg-orange-50 text-orange-600",
                                title: 'Working Hours',
                                value: 'Open 24/7',
                                desc: 'Delivery slots available daily',
                                action: "View slots"
                            },
                        ].map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
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

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>

                            <div className="relative">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                                <p className="text-gray-500 mb-10">We'd love to hear from you. Fill out the form below.</p>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all duration-200"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all duration-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all duration-200"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                        <textarea
                                            rows="5"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all duration-200 resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <button className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center space-x-2">
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-[400px]"
                >
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-74.006,40.7128,12,0/800x400?access_token=YOUR_API_KEY')] bg-cover bg-center">
                        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 transform transition-transform hover:scale-105 duration-300">
                            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Store</h3>
                            <p className="text-gray-500 mb-6">123 Grocery Lane, Fresh City, FC 12345</p>
                            <button className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center">
                                Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
