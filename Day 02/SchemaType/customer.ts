export const Customer = {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
        {
             name: 'name', 
             type: 'string',
             title: 'Name' 
        },
        { 
             name: 'email',
             type: 'string', 
             title: 'Email' 
        },
        { 
             name: 'phone',
             type: 'string', 
             title: 'Phone No'
        },
        { 
             name: 'address',  
             type: 'string', 
             title: 'Home Address'
        },
    ],
};