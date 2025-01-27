export const Orders = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
    {
         name: "trackingNo",
         title: "Tracking No",
         type: "string",
    },
    {
         name: "customer",
         title: "Customer",
         type: "reference",
         to: [{ type: "customer" }],
    },
    {
         name: "cartItems",
         title: "Cart Items",
         type: "array",
         of: [{ type: "cartItem" }],
    },
    {
         name: "total",
         type: "np",
         title: "Total Amount",
    },
    ],
  };