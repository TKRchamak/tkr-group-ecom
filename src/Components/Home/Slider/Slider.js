import React, { useContext } from 'react';
import './Slider.css'
import img1 from '../../../images/kunal-shinde--f0YLss50Bs-unsplash.jpg'
import { productContext } from '../../../App';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [products, setProducts] = useContext(productContext);
    const threeProducts = products.slice(0, 8);
    console.log(threeProducts)

    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removePreviousActive(panel)
            panel.classList.add('active');
        })
    })

    const removePreviousActive = (panel) => {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }
    return (
        <div className="mainContainer bg-light">
            <div class="sliderContainer">
                
                {/* <div class="panel active" style={{ backgroundImage: `url(${img1})` }}>
                    <h1>This is fast pic</h1>
                </div> */}
                {
                    threeProducts.map(pd => 
                    <div class="panel position-relative" style={{ backgroundImage: `url(${pd.image})` }}>
                        <h1 className="position-absolute start-50 translate-middle-x "><Link to={`/product/${pd._id}`}>{pd.title}</Link></h1>
                    </div>)
                }

                {/* <div class="panel" style={{ backgroundImage: `url(${img1})` }}>
                    <h1>This is fast pic</h1>
                </div>
                <div class="panel" style={{ backgroundImage: `url(${img1})` }}>
                    <h1>This is fast pic</h1>
                </div>
                <div class="panel" style={{ backgroundImage: `url(${img1})` }}>
                    <h1>This is fast pic</h1>
                </div> */}
            </div>
        </div >
    );
};

export default Slider;