import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log('hello', props)

    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 50) {
        shipping = 5.55;
    }
    else if (total > 25) {
        shipping = 10.99;
    }


    const tax = (total / 10);
    const grandTotal = (total + shipping + tax)

    const formatNumber = (num) => {
        const fixed2Decimal = num.toFixed(2);
        return fixed2Decimal;
    }

    return (
        <div>
            <h2><u>Order Summery</u></h2>
            <h3>Items Ordered: {cart.length}</h3>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {Math.round(shipping)}</small></p>
            <p><small>Tax + VAT: {Math.round(tax)}</small></p>
            <h4>Total Price: {formatNumber(grandTotal)}</h4>
        </div>
    );
};

export default Cart;