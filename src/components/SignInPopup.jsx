import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LogIn, ShoppingCart } from 'lucide-react';

const SignInPopup = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSignIn = () => {
        // Store the current location so we can redirect back after login
        const currentPath = window.location.pathname;
        localStorage.setItem('returnPath', currentPath);
        onClose();
        navigate('/login');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            
            {/* Popup */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-full">
                        <ShoppingCart className="h-12 w-12 text-primary-600" />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Sign In Required
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Please sign in to add items to your cart
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleSignIn}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        <LogIn className="h-5 w-5" />
                        <span>Go to Sign In</span>
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPopup;

