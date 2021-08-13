import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cartContest, productContext } from '../../../App';
// import { addToDatabaseCart, processOrder } from '../../utilities/databaseManager';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Shared/Header/Header';
import { addToDatabaseCart } from '../../../utilities/databaseManager';

const Shop = () => {
    const [products, setProducts] = useContext(productContext);

    const [cart, setCart] = useContext(cartContest);

    const addToCard = (pd) => {

        const count = (cart.filter((p) => p._id === pd._id))
        if (count[0]?.quantity > 0) {
            let index = cart.indexOf(pd);
            cart.splice(index, 1);
            pd.quantity = count[0]?.quantity + 1;
            let addPd = [...cart, pd];
            setCart(addPd);
            addToDatabaseCart(pd._id, pd.quantity)
        } else {
            pd.quantity = 1;
            let addPd = [...cart, pd];
            setCart(addPd);
            addToDatabaseCart(pd._id, pd.quantity)
        }

    }

    let history = useHistory();
    function handleClick() {
        history.push("/cart/review");
    }

    return (
        <div>
            <Header></Header>
            <div className="row container m-auto">
                <div className="col-md-9">
                    {
                        products.map(product => <AllProducts key={product._id} pd={product} addToCard={addToCard}>
                            <div className="text-end">
                                <button className="btn btn-info" onClick={() => addToCard(product)}><FontAwesomeIcon icon={faCartArrowDown} /> Add To Card</button>
                            </div>
                        </AllProducts>)
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
        </div>
    );
};

export default Shop;