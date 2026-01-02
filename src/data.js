export const categories = [
    { id: 1, name: 'Vegetables', icon: '🥦', color: 'bg-green-100', text: 'text-green-600', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Fruits', icon: '🍎', color: 'bg-red-100', text: 'text-red-600', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-blue-100', text: 'text-blue-600', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Bakery', icon: '🍞', color: 'bg-yellow-100', text: 'text-yellow-600', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Spices', icon: '🧂', color: 'bg-orange-100', text: 'text-orange-600', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Beverages', icon: '🥤', color: 'bg-purple-100', text: 'text-purple-600', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=60' },
];

export const products = [
    {
        id: 1,
        name: 'Fresh Organic Spinach',
        category: 'Vegetables',
        price: 3.99,
        oldPrice: 4.99,
        weight: '250g',
        discount: 20,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=60',
        description: 'Fresh organic spinach leaves, rich in iron and vitamins. Perfect for salads and smoothies.',
        nutritionalInfo: { calories: '23 kcal', protein: '2.9g', carbs: '3.6g', fiber: '2.2g' }
    },
    {
        id: 2,
        name: 'Red Gala Apples',
        category: 'Fruits',
        price: 5.49,
        weight: '1kg',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=60',
        description: 'Sweet and crunchy Red Gala apples. Sourced from local orchards.',
        nutritionalInfo: { calories: '52 kcal', protein: '0.3g', carbs: '14g', fiber: '2.4g' }
    },
    {
        id: 3,
        name: 'Whole Milk',
        category: 'Dairy',
        price: 2.99,
        weight: '1L',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=60',
        description: 'Farm fresh whole milk, pasteurized and homogenized.',
        nutritionalInfo: { calories: '42 kcal', protein: '3.4g', carbs: '5g', fat: '1g' }
    },
    {
        id: 4,
        name: 'Brown Bread',
        category: 'Bakery',
        price: 1.99,
        oldPrice: 2.49,
        weight: '400g',
        discount: 20,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60',
        description: 'Whole wheat brown bread, freshly baked every morning.',
        nutritionalInfo: { calories: '265 kcal', protein: '9g', carbs: '49g', fiber: '7g' }
    },
    {
        id: 5,
        name: 'Organic Broccoli',
        category: 'Vegetables',
        price: 4.29,
        weight: '500g',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=60',
        description: 'Crispy organic broccoli florets. Great for steaming or stir-frying.',
        nutritionalInfo: { calories: '34 kcal', protein: '2.8g', carbs: '6.6g', fiber: '2.6g' }
    },
    {
        id: 6,
        name: 'Yellow Bananas',
        category: 'Fruits',
        price: 1.49,
        weight: '1kg',
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=60',
        description: 'Fresh ripe bananas, perfect for a quick snack or breakfast.',
        nutritionalInfo: { calories: '89 kcal', protein: '1.1g', carbs: '23g', fiber: '2.6g' }
    },
    {
        id: 7,
        name: 'Greek Yogurt',
        category: 'Dairy',
        price: 4.99,
        oldPrice: 5.99,
        weight: '500g',
        discount: 15,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=60',
        description: 'Thick and creamy Greek yogurt, high in protein.',
        nutritionalInfo: { calories: '59 kcal', protein: '10g', fat: '0.4g' }
    },
    {
        id: 8,
        name: 'Croissants',
        category: 'Bakery',
        price: 3.49,
        weight: 'Pack of 4',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=60',
        description: 'Buttery, flaky croissants made with real butter.',
        nutritionalInfo: { calories: '406 kcal', protein: '8g', carbs: '46g', fat: '21g' }
    }
];

export const reviews = [
    { id: 1, name: 'John Doe', rating: 5, comment: 'Very fresh vegetables and fast delivery. Highly recommended!', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    { id: 2, name: 'Sarah Wilson', rating: 5, comment: 'The dairy products are high quality. Ordering every week now.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
    { id: 3, name: 'Michael Brown', rating: 4, comment: 'Great service and prices. Good variety of products.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
];
