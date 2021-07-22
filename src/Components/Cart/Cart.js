import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContest } from '../../App';

const Cart = () => {
    const [cart, setCart] = useContext(cartContest);
    const decimalFix = (num) => {
        return (num.toFixed(2));
    }
    const totalPrice = +decimalFix(cart.reduce((result, pd) => result + pd.price, 0));
    const vat = +decimalFix(totalPrice / 10);
    const superPrice = +decimalFix(totalPrice + vat);

    return (
        <div>
            <h5>Selected Products : {cart.length}</h5>
            <p>All Product Price : ${totalPrice}</p>
            <p>Vat : ${vat}</p>
            {/* <p>Shipping : </p> */}
            <h6>Total Price : ${superPrice}</h6>
            <div>
                <button className="btn btn-info"><Link to="/cart/review">Review Orders</Link> </button>
            </div>
        </div>
    );
};

export default Cart;