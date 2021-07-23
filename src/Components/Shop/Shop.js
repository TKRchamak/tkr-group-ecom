import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cartContest } from '../../App';
// import { addToDatabaseCart, processOrder } from '../../utilities/databaseManager';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    const [cart, setCart] = useContext(cartContest);
    const addToCard = (pd) => {
        let addPd = [...cart, pd];
        setCart(addPd);
        // const count = 1 + (cart.filter((p) => p.id === pd.id)).length;
        // addToDatabaseCart(pd.id, count);
    }
    let history = useHistory();
    function handleClick() {
        history.push("/cart/review");
    }

    return (
        <div className="row container m-auto">
            <div className="col-md-9">
                {
                    products.map(product => <AllProducts key={product.id} pd={product} addToCard={addToCard}></AllProducts>)
                }
            </div>
            <div className="col-md-3 border-start pt-5">
                <Cart>
                    <div>
                        <button className="btn btn-info" onClick={handleClick}>Review Orders</button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;