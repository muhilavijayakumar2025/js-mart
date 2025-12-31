import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        deliveryDate: '',
        paymentMethod: 'cod',
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            clearCart();
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl text-center border-b-8 border-primary-500">
                    <div className="bg-primary-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle2 className="h-12 w-12 text-primary-600" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Order Confirmed!</h2>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        Thank you for shopping with JS Mart. Your fresh items are on their way!
                    </p>
                    <div className="bg-gray-50 p-6 rounded-3xl mb-10 text-left border border-gray-100">
                        <p className="font-bold text-gray-900 mb-2">Order ID: #JSM-882234</p>
                        <p className="text-sm text-gray-500">Estimated delivery: Within 2 hours</p>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="btn-primary w-full py-4 text-xl"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Complete Your Purchase</h1>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
                    {/* Form Content */}
                    <div className="lg:w-2/3 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="bg-primary-100 p-2 rounded-lg">
                                    <Truck className="h-6 w-6 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold">Delivery Essentials</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                        placeholder="+1 (234) 567-890"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Delivery Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                        placeholder="House No, Street, Landmark"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="bg-primary-100 p-2 rounded-lg">
                                    <CreditCard className="h-6 w-6 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold">Payment Method</h2>
                            </div>

                            <div className="space-y-4">
                                <label className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-primary-500 bg-primary-50' : 'border-gray-100 grayscale opacity-60'}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={formData.paymentMethod === 'cod'}
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                                        <Truck className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="block font-bold text-lg">Cash on Delivery</span>
                                        <span className="text-sm text-gray-500 font-medium italic">Pay when you receive your fresh items</span>
                                    </div>
                                </label>

                                <label className={`flex items-center p-5 rounded-2xl border-2 cursor-not-allowed transition-all opacity-40 grayscale border-gray-100`}>
                                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                                        <CreditCard className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="block font-bold text-lg">Online Payment</span>
                                        <span className="text-sm text-gray-500">Coming soon...</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-primary-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Total Amount</h2>
                            <div className="text-5xl font-black text-primary-600 mb-8">${totalPrice.toFixed(2)}</div>

                            <div className="space-y-4 mb-10 overflow-auto max-h-[300px] pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                                            <div>
                                                <span className="block text-sm font-bold text-gray-900 line-clamp-1">{item.name}</span>
                                                <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                        <span className="font-bold text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-5 text-xl shadow-2xl"
                            >
                                Place My Order
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-6 italic">
                                By placing the order, you agree to our Terms & Conditions
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
