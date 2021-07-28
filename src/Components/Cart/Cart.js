import React, { useContext } from 'react';
import { cartContest } from '../../App';

const Cart = (props) => {
    const [cart] = useContext(cartContest);
    // const [cart, setCart] = useContext(cartContest);
    const decimalFix = (num) => {
        return (num.toFixed(2));
    }
    const totalPrice = +decimalFix(cart.reduce((result, pd) => result + pd.price*pd.quantity, 0));
    // const totalQuantity = +decimalFix(cart.reduce((result, pd) => result + pd.quantity, 0));
    const vat = +decimalFix(totalPrice / 10);
    const superPrice = +decimalFix(totalPrice + vat);

    return (
        <div>
            <h5>Selected Products : {cart.length}</h5>
            <p>All Product Price : ${totalPrice}</p>
            <p>Vat : ${vat}</p>
            {/* <p>Shipping : </p> */}
            <h6>Total Price : ${superPrice}</h6>
            {
                props.children
            }
        </div>
    );
};

export default Cart;