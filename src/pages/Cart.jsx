import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            localStorage.setItem('returnPath', '/cart');
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleCheckout = () => {
        if (!isAuthenticated) {
            localStorage.setItem('returnPath', '/checkout');
            navigate('/login');
        } else {
            navigate('/checkout');
        }
    };

    // Don't render cart if not authenticated
    if (!isAuthenticated) {
        return null;
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
                <div className="bg-primary-50 p-10 rounded-full mb-8">
                    <ShoppingBag className="h-20 w-20 text-primary-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm text-center">Looks like you haven't added anything to your cart yet. Let's find some amazing fresh items!</p>
                <Link to="/" className="btn-primary flex items-center space-x-2">
                    <span>Start Shopping</span>
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="w-full px-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Your Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="lg:w-2/3 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6 relative group overflow-hidden">
                                <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden shadow-inner">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="flex-grow text-center sm:text-left">
                                    <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">{item.category}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.name}</h3>
                                    <p className="text-gray-400 font-medium">Unit: {item.weight || 'Each'}</p>
                                </div>

                                <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px]">
                                    <div className="text-2xl font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                                    <div className="flex items-center border-2 border-gray-100 rounded-xl bg-gray-50 px-2 py-1">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-primary-600 transition-colors">
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-primary-600 transition-colors">
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="sm:absolute sm:top-6 sm:right-6 text-gray-300 hover:text-red-500 transition-colors p-2"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Checkout Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-primary-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span className="text-green-600 font-bold">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (Estimated)</span>
                                    <span className="font-bold text-gray-900">$0.00</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between">
                                    <span className="text-xl font-bold text-gray-900">Total</span>
                                    <span className="text-3xl font-black text-primary-600">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full btn-primary py-4 text-xl flex items-center justify-center space-x-3"
                                >
                                    <span>Proceed to Checkout</span>
                                </button>
                                <Link to="/shop" className="block text-center text-gray-500 font-bold hover:text-primary-600 py-2">
                                    Continue Shopping
                                </Link>
                            </div>

                            <div className="mt-8 bg-primary-50 p-4 rounded-2xl flex items-center space-x-3 border border-primary-100">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <ShoppingBag className="h-5 w-5 text-primary-600" />
                                </div>
                                <p className="text-xs text-primary-900 font-medium italic">
                                    Apply coupons at the next step to get extra discounts!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
