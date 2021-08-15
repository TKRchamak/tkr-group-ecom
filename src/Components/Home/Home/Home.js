import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Slider2 from '../Slider2/Slider2';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useContext(productContext);
    const fiveProduct = products.slice(0, 5);
    const twoProduct = products.slice(14, 16);
    console.log(twoProduct)

    return (
        <div>
            <Header></Header>
            <Slider2></Slider2>
            <div className="pt-5">
                <div className="d-flex justify-content-center text-center">
                    <div>
                        <h3 className="fs-3 fw-bolder"> OUR PRODUCTS</h3>
                        <p className="fs-6 fw-light">Browse the collection of our best selling and top interesting <br /> products. You’ll definitely find what you are looking for.</p>
                        <div className="product-type pt-3">
                            <ul className="d-flex justify-content-center list-unstyled fs-5 fw-bold">
                                <li className="me-4">Man Collection</li>
                                <li className="me-4">Woman Collection</li>
                                <li className="">Lather Collection</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5 pb-5">
                    <div className="row d-flex justify-content-center">
                        {
                            fiveProduct.map(pd =>
                                <div className="card border-0" key={pd._id} style={{ width: '13rem' }}>
                                    <img src={pd.image} style={{ height: '200px', width: '9rem' }} className="card-img-top " alt="..." />
                                    <div className="card-body">
                                        <small className="card-title fw-bold"><Link className="link-dark" to={`/product/${pd._id}`} >{pd.title}</Link></small>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className="two-pd-bg">
                    <div className="container d-flex justify-content-center align-items-center pt-5 pb-5" style={{height:"auto"}}>
                        <div className="row">
                            {
                                twoProduct.map(pd =>
                                    <div className="col-md me-3 bg-light p-3" key={pd._id}>
                                        <div className="d-lg-flex justify-content-center pd-bg-hover text-center m-2">
                                            <img className="img-fluid" src={pd.image} style={{ maxHeight: "300px" }} alt="" />
                                            <div className="text-end pt-4">
                                                <h6>{pd.category}</h6>
                                                <h1>{pd.title}</h1>
                                                <h4>${pd.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;