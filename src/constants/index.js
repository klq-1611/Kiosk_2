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
        image: require('../../assets/images/combo_meals.png'),
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
        image: require('../../assets/images/special_burger.png'),
    },
    {
        id: 2,
        name: 'Ice Cream Sundae',
        category: 'Desserts',
        price: 4.99,
        categoryId: 3,
        image: require('../../assets/images/ice_cream.png'),
    },
    {
        id: 3,
        name: 'Lemonade',
        category: 'Beverages',
        price: 2.99,
        categoryId: 1,
        image: require('../../assets/images/lemonade.png'),
    },
    {
        id: 4,
        name: 'Coca Cola',
        category: 'Beverages',
        price: 0.99,
        categoryId: 1,
        image: require('../../assets/images/coca.png'),
    },
    {
        id: 5,
        name: 'Vegan Burger',
        category: 'Fast Food',
        price: 8.99,
        categoryId: 2,
        image: require('../../assets/images/vegan_burger.png'),
    },
    {
        id: 6,
        name: 'PanCake',
        category: 'Desserts',
        price: 2.33,
        categoryId: 3,
        image: require('../../assets/images/pan_cake.png'),
    },
    {
        id: 7,
        name: 'Fried Chicken Combo',
        category: 'Combo Meals',
        price: 12.99,
        categoryId: 4,
        image: require('../../assets/images/fried_chicken.png'),
    },
    {
        id: 8,
        name: 'Pizza',
        category: 'Combo Meals',
        price: 15.99,
        categoryId: 4,
        image: require('../../assets/images/pizza.png'),
    },
    {
        id: 9,
        name: 'Culinary Explosion',
        category: 'Combo Meals',
        price: 13.99,
        categoryId: 4,
        image: require('../../assets/images/Combo_meal_1.png'),
    },
];
export const PaymentMethods = [
    {
        id: 1,
        name: 'QR Pay',
        navigate: 'Pay_QR',
        image: require('../../assets/images/QR_payment.png'),
    },
    {
        id: 2,
        name: 'Cash Pay',
        navigate: 'Pay_Cash',
        image: require('../../assets/images/Cash_payment.png'),
    },
    // Add more payment methods as needed
];
export const DiningMethods = [
    {
        id: 1,
        name: 'Dine In',
        navigate: 'Home',
        image: require('../../assets/images/Dine_in.png'),
    },
    {
        id: 2,
        name: 'Take Out',
        navigate: 'Home',
        image: require('../../assets/images/Take_away.png'),
    },
    // Add more dining methods as needed
];