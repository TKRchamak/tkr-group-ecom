import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const AllProducts = ({ pd, addToCard }) => {
    return (
        <div className=" mb-3 mt-3 p-3 border-bottom" style={{ maxWidth: "100%", height: "auto" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img style={{ maxWidth: "50%"}} src={pd.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{pd.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Price : {pd.price}</small></p>
                        <div className="text-end">
                            <button className="btn btn-info" onClick={() => addToCard(pd)}><FontAwesomeIcon icon={faCartArrowDown} /> Add To Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;