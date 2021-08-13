import React from 'react';
import img1 from '../../../images/ashim-d-silva-ZmgJiztRHXE-unsplash.jpg'
import img2 from '../../../images/aviv-rachmadian-7F7kEHj72MQ-unsplash.jpg'
import img3 from '../../../images/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import img4 from '../../../images/heather-ford-Tw9iB8TGRGI-unsplash.jpg';

const Slider2 = () => {
    return (
        <div className="pb-5">
            <div id="carouselExampleControls" style={{ maxHeight: "500px" }} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ maxHeight: "500px" }}>
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "500px" }}>
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "500px" }}>
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "500px" }}>
                        <img src={img4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider2;