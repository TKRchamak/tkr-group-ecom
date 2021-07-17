import React from 'react';

const AllProducts = ({ pd }) => {
    return (
        <div class="card mb-3 p-3" style={{maxWidth:"100%", height:"auto"}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={pd.image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 align-middle">
                    <div class="card-body">
                        <h5 class="card-title">{pd.title}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;