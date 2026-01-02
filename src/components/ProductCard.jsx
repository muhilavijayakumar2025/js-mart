import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="card group relative">
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-col space-y-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-primary-500 hover:text-white transition-colors">
                        <Heart className="h-5 w-5" />
                    </button>
                    <Link to={`/product/${product.id}`} className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-primary-500 hover:text-white transition-colors">
                        <Eye className="h-5 w-5" />
                    </Link>
                </div>
                {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                    </div>
                )}
            </div>

            <div className="p-4 text-center">
                <span className="text-sm text-gray-500 uppercase tracking-widest">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 hover:text-primary-600 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex justify-center items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-primary-600">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                    )}
                </div>
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary-100 hover:bg-primary-500 text-primary-700 hover:text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
