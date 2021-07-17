import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row container m-auto">
            <div className="col-md-9">
                {
                    products.map(product => <AllProducts key={product.id} pd={product}></AllProducts>)
                }
            </div>
            <div className="col-md-3 border-start">
                this is card
            </div>
        </div>
    );
};

export default Shop;