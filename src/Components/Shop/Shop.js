import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCard = (pd) => {
        let addPd = [...cart, pd];
        setCart(addPd)
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row container m-auto">
            <div className="col-md-9">
                {
                    products.map(product => <AllProducts key={product.id} pd={product} addToCard={addToCard}></AllProducts>)
                }
            </div>
            <div className="col-md-3 border-start pt-5">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;