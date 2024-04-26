export const categories = [
    {
        id: 1,
        name: 'Beverages',
        image: require('../../assets/images/icons8-tropical-drink-96.png'),
    },
    {
        id: 2,
        name: 'Fast Food',
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 3,
        name: 'Desserts',
        image: require('../../assets/images/icons8-cupcake-emoji-96.png'),
    },
    {
        id: 4,
        name: 'Combo Meals',
        image: require('../../assets/images/tải xuống.jpg'),
    },
    // Add more categories as needed
];

export const dishRow = [
    {
        id: 1,
        name: 'Special Burger',
        category: 'Fast Food',
        categoryId: 2,
        price: 10.99,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 2,
        name: 'Ice Cream Sundae',
        category: 'Desserts',
        price: 4.99,
        categoryId: 3,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 3,
        name: 'Lemonade',
        category: 'Beverages',
        price: 2.99,
        categoryId: 1,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 4,
        name: 'Coca Cola',
        category: 'Beverages',
        price: 0.99,
        categoryId: 1,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 5,
        name: 'Plant Burger',
        category: 'Fast Food',
        price: 8.99,
        categoryId: 2,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 6,
        name: 'PanCake',
        category: 'Desserts',
        price: 2.33,
        categoryId: 3,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 7,
        name: 'Fried Chicken',
        category: 'Combo Meals',
        price: 12.99,
        categoryId: 4,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
    {
        id: 8,
        name: 'Pizza',
        category: 'Combo Meals',
        price: 15.99,
        categoryId: 4,
        image: require('../../assets/images/icons8-hamburger-96.png'),
    },
];
export const Payment_Methods = [
    {
        id: 1,
        name: 'QR Pay',
        navigate: 'Pay_QR',
        image: require('../../assets/images/QR_image.png'),
    },
    {
        id: 2,
        name: 'Cash Pay',
        navigate: 'Pay_Cash',
        image: require('../../assets/images/public.avif'),
    },
    // Add more payment methods as needed
];