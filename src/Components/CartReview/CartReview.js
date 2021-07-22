import React, { useContext, useEffect, useState } from 'react';
import { cartContest } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const CartReview = () => {
    const [cart, setCart] = useContext(cartContest);
    console.log(cart)


    // const [cartData, setCartData] = useState([]);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const datas = getDatabaseCart();
    //     const ids = Object.keys(datas);
    //     // const quantity = Object.values(datas);

    //     const selectedPd = ids.map(id => {
    //         fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             return data;
    //         })
    //     })
    //     console.log(selectedPd);
    // }, [])

    return (
        <div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default CartReview;