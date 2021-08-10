import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-meadow-07590.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, []);


    const deleteData = (id) => {
        console.log(id);
        fetch(`https://vast-meadow-07590.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h2 className="p-2">All Product List</h2>
                <div className="pe-5 pt-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(pd =>
                                    <tr key={pd._id}>
                                        <th scope="row">{pd._id}</th>
                                        <td>{pd.title}</td>
                                        <td>${pd.price}</td>
                                        <td>{pd.category}</td>
                                        <td onClick={() => deleteData(pd._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;