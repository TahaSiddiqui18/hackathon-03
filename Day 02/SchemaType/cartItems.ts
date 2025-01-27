export const cartItems = {
    name: 'cartItems',
    title: 'Cart Items',
    type: 'object',
    fields: [
        { 
             name: 'name', 
             type: 'string', 
             title: 'Product Name'
        },
        {
             name: 'price', 
             type: 'number',
             title: 'Price' 
        },
        { 
             name: 'quantity',
             type: 'number',
             title: 'Quantity'
        },
    ],
};