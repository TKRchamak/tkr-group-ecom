import React, { useContext } from 'react';
import { cartContest } from '../../../App';
// import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import AllProducts from '../AllProducts/AllProducts';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const CartReview = () => {
    const [cart, setCart] = useContext(cartContest);

    // const [cartData, setCartData] = useState([]);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const file = getDatabaseCart();
    //     const ids = Object.keys(file);
    //     console.log(ids)
    //     // const quantity = Object.values(file);

    //     const selectedPd = ids.map(id => {
    //         fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(JSON.parse(data));
    //         })
    //     })
    //     console.log(selectedPd);
    // }, [])
    const removeFromCard = (id) => {
        let recentCart = cart.filter(pd => pd.id !== id);
        setCart(recentCart)
    };
    let history = useHistory();
    const placeOrder = () => {
        setCart([]);
        history.push("/shipping");
    }


    return (
        <div>
            <Header></Header>
            <div className="d-flex justify-content-center">
                <div className="row container m-auto">
                    <div className="col-md-9">
                        {
                            cart.map(product => <AllProducts key={product.id} pd={product}>
                                <div className="text-end">
                                    <button className="btn btn-info" onClick={() => removeFromCard(product.id)}><FontAwesomeIcon icon={faCartArrowDown} /> Remove from Card</button>
                                </div>
                            </AllProducts>)
                        }
                    </div>
                    <div className="col-md-3 border-start pt-5">
                        <Cart cart={cart}>
                            <div>
                                <button className="btn btn-info" onClick={placeOrder} >Place Orders</button>
                            </div>
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartReview;