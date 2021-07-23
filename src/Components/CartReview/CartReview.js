import React, { useContext, useEffect, useState } from 'react';
import { cartContest } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

const CartReview = () => {
    const [cart, setCart] = useContext(cartContest);

    // const [cartData, setCartData] = useState([]);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const datas = getDatabaseCart();
    //     const ids = Object.keys(datas);
    //     console.log(ids)
    //     // const quantity = Object.values(datas);

    //     const selectedPd = ids.map(id => {
    //         fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(JSON.parse(data));
    //         })
    //     })
    //     console.log(selectedPd);
    // }, [])

    return (
        <div className="d-flex justify-content-center">
            <Cart cart={cart}>
                <div>
                    <button className="btn btn-info">Place Orders</button>
                </div>
            </Cart>
        </div>
    );
};

export default CartReview;