import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Contact Header */}
            <section className="bg-primary-600 py-20 text-white text-center rounded-b-[4rem] shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-black mb-4">Get in Touch</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                        Have questions about our products or delivery? We're here to help you 24/7!
                    </p>
                </div>
            </section>

            <section className="py-20 -mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: <Phone className="text-blue-500" />, title: 'Call Us Now', value: '+1 (555) 123-4567', desc: 'Mon-Sun, 8am - 10pm' },
                                { icon: <Mail className="text-red-500" />, title: 'Email Address', value: 'hello@jsmart.com', desc: 'Response within 2 hours' },
                                { icon: <MessageSquare className="text-green-500" />, title: 'WhatsApp Chat', value: '+1 (555) 999-0000', desc: 'Instant support' },
                                { icon: <Clock className="text-orange-500" />, title: 'Working Hours', value: '24/7 Service', desc: 'Delivery slots available' },
                            ].map((info, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-5 hover:shadow-md transition-shadow">
                                    <div className="bg-gray-50 p-4 rounded-2xl shadow-inner">{info.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                                        <p className="text-lg font-black text-gray-900 mb-1">{info.value}</p>
                                        <p className="text-sm text-gray-400 italic">{info.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                                <h2 className="text-3xl font-black text-gray-900 mb-8">Send us a Message</h2>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email ID</label>
                                        <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                                        <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all" placeholder="How can we help?" />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea rows="5" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <button className="btn-primary w-full py-5 text-xl flex items-center justify-center space-x-3 shadow-2xl">
                                            <Send className="h-6 w-6" />
                                            <span>Send Message Now</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden h-[450px] relative group">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            {/* Placeholder for Google Map */}
                            <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                <MapPin className="h-16 w-16 text-primary-500 mx-auto mb-4 animate-bounce" />
                                <h3 className="text-2xl font-black text-gray-900">Visit Our Flagship Store</h3>
                                <p className="text-gray-500">123 Grocery Lane, Fresh City, FC 12345</p>
                                <button className="mt-8 bg-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow border border-gray-100">Open in Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
