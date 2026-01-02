import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Truck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            for (let i = 0; i < quantity; i++) addToCart(product);
        }
    };

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Product not found</h2>
                <Link to="/shop" className="text-primary-600 font-bold hover:underline mt-4 inline-block">Back to Shop</Link>
            </div>
        );
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/shop" className="flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors group">
                    <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to results</span>
                </Link>

                {/* Product Info Section */}
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8 lg:p-12 border-r border-gray-100 bg-white">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-inner group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{product.category}</span>
                            <div className="flex items-center text-yellow-500 ml-4">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current text-gray-200" />
                                <span className="text-gray-400 text-sm ml-2">(4.0 / 5)</span>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{product.name}</h1>

                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-4xl font-extrabold text-primary-600">${product.price}</span>
                            {product.oldPrice && (
                                <span className="text-2xl text-gray-300 line-through">${product.oldPrice}</span>
                            )}
                            {product.weight && (
                                <span className="text-gray-500 font-medium ml-4 bg-gray-100 px-3 py-1 rounded-lg">Wt: {product.weight}</span>
                            )}
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {product.nutritionalInfo && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center">
                                        <span className="block text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">{key}</span>
                                        <span className="block text-gray-900 font-bold">{value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                            <div className="flex items-center border-2 border-gray-200 rounded-2xl overflow-hidden h-14 w-full sm:w-auto">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 hover:bg-gray-100 transition-colors"
                                >
                                    <Minus className="h-5 w-5 text-gray-600" />
                                </button>
                                <div className="w-12 text-center font-extrabold text-xl text-gray-900 select-none">{quantity}</div>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 hover:bg-gray-100 transition-colors"
                                >
                                    <Plus className="h-5 w-5 text-gray-600" />
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="btn-primary flex-grow h-14 w-full flex items-center justify-center space-x-3 text-lg"
                            >
                                <ShoppingCart className="h-6 w-6" />
                                <span>Add to Cart</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                            <div className="flex items-center space-x-3 text-gray-600">
                                <Truck className="h-6 w-6 text-primary-500" />
                                <span className="font-medium text-sm">Free Delivery on orders $50+</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600">
                                <CheckCircle2 className="h-6 w-6 text-primary-500" />
                                <span className="font-medium text-sm">100% Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold mb-10 text-gray-900">Similar Products You May Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
