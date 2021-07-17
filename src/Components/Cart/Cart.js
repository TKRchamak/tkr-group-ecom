import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);

    const decimalFix = (num) => {
        return(num.toFixed(2));
    }

    const totalPrice = +decimalFix(cart.reduce((result, pd) => result + pd.price, 0));
    console.log(totalPrice);

    const vat = +decimalFix(totalPrice / 10);

    const superPrice = +decimalFix(totalPrice + vat);


    return (
        <div>
            <h5>Selected Products : {cart.length}</h5>
            <p>All Product Price : ${totalPrice}</p>
            <p>Vat : ${vat}</p>
            {/* <p>Shipping : </p> */}
            <h6>Total Price : ${superPrice}</h6>
        </div>
    );
};

export default Cart;