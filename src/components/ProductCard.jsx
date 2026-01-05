import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
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
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-4 hover:text-primary-600 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
            </div>
        </div>
    );
};

export default ProductCard;
