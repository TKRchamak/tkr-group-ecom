import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { cartContest } from '../../../App';
import Header from '../Header/Header';

const ProductDetail = () => {
    let { id } = useParams();

    const [product, setProduct] = useState({})
    const [cart, setCart] = useContext(cartContest);

    useEffect(() => {
        fetch(`https://vast-meadow-07590.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProduct(data))
    }, [id])


    const addToCard = (pd) => {
        const count = (cart.filter((p) => p._id === pd._id))
        if (count[0]?.quantity > 0) {
            let index = cart.indexOf(pd);
            cart.splice(index, 1);
            pd.quantity = count[0]?.quantity + 1;
            let addPd = [...cart, pd];
            setCart(addPd);
        } else {
            pd.quantity = 1;
            let addPd = [...cart, pd];
            setCart(addPd);
        }
    }



    return (
        <div>
            <Header></Header>
            <div className="card m-3 p-2" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                    {
                        product.image?.img ? <img style={{ maxWidth: "60vh" }} src={`data:image/png;base64,${product.image.img}`} className="img-fluid rounded-start" alt="..."/>
                        :<img style={{ maxWidth: "60vh" }} src={product.image} className="img-fluid rounded-start" alt="..." />
                    }
                        {/* <img style={{ maxHeight: "60vh" }} src={product.image} className="img-fluid rounded-start" alt="..." /> */}
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