import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { cartContest } from '../../App';

const ProductDetail = () => {
    let { id } = useParams();

    const [product, setProduct] = useState({})
    const [cart, setCart] = useContext(cartContest);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const addToCard = (pd) => {
        let addPd = [...cart, pd];
        setCart(addPd);
        // const count = 1 + (cart.filter((p) => p.id === pd.id)).length;
        // addToDatabaseCart(pd.id, count);
    }



    return (
        <div>
            <div className="card m-3 p-2" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img style={{ maxHeight: "60vh" }} src={product.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><small className="text-muted">Price : ${product.price}</small></p>
                            <br />
                            <div className="text-start">
                                <button className="btn btn-info" onClick={() => addToCard(product)} > <FontAwesomeIcon icon={faCartArrowDown} /> Add To Card</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;