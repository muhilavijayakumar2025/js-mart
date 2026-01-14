import React from 'react';
import { Target, Eye, ShieldCheck, Heart, UserCheck, Leaf } from 'lucide-react';
import aboutHero from '../assets/about-us-hero.png';
import aboutShop from '../assets/about-us-shop.png';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src={aboutHero} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full px-12 relative z-10 text-center">
                    <span className="inline-block px-12 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-4 uppercase tracking-[0.2em]">About Us</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">About <span className="text-primary-400">JS Mart</span></h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                        JS Mart is Dubbo's newest supermarket, bringing together the best of multicultural groceries for Australian communities.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-24">
                <div className="w-full px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full -z-10 animate-pulse"></div>
                            <img
                                src={aboutShop}
                                alt="Our Shop"
                                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100">
                                <div className="text-4xl font-black text-primary-600 mb-1">NEW</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Supermarket</div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Dubbo's Newest Multicultural Grocery Store</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                From fresh fruits and vegetables to authentic international food items and daily household essentials, we are committed to offering quality products at affordable prices — all in a clean, friendly shopping environment.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Whether you're looking for traditional ingredients or everyday groceries, JS Mart makes shopping simple and enjoyable. We're excited to serve the Dubbo community with fresh, quality products.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <ShieldCheck className="text-primary-600" />, title: 'Quality Promise', desc: '100% Guaranteed fresh items' },
                                    { icon: <Leaf className="text-primary-600" />, title: 'Local Sourcing', desc: 'Support local farm communities' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-primary-100 group">
                                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50">
                <div className="w-full px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                <Target className="h-32 w-32" />
                            </div>
                            <div className="bg-primary-100 h-16 w-16 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed italic">
                                Our mission is to revolutionize the way people buy groceries by providing a seamless, transparent, and eco-friendly shopping experience that prioritizes health and freshness.
                            </p>
                        </div>

                        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform text-primary-600">
                                <Eye className="h-32 w-32" />
                            </div>
                            <div className="bg-primary-100 h-16 w-16 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-6">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed italic">
                                To become the most trusted name in health-focused grocery retail, inspiring communities to live better through the power of real, sustainable food.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="w-full px-12">
                    <h2 className="text-4xl font-extrabold mb-16">The Values We Live By</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Heart />, title: 'Purity', desc: 'No preservatives, just pure nature' },
                            { icon: <UserCheck />, title: 'Trust', desc: 'Transparent sourcing always' },
                            { icon: <ShieldCheck />, title: 'Quality', desc: 'Strict inspection levels' },
                            { icon: <Target />, title: 'Impact', desc: 'Fair pay for local farmers' },
                        ].map((value, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="bg-primary-50 h-20 w-20 rounded-full flex items-center justify-center text-primary-600 mb-6 border-2 border-primary-100 transition-transform hover:rotate-12">
                                    {React.cloneElement(value.icon, { className: 'h-10 w-10' })}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
