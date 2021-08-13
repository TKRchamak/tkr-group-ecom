import React from 'react';
import Header from '../../Shared/Header/Header';
import Slider2 from '../Slider2/Slider2';
import './Home.css'

const Home = () => {
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
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;