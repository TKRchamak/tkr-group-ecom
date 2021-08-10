import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState(null)
    console.log(product, file)

    const inputData = (e) => {
        let newProduct = { ...product };
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct)
    }

    const inputFile = (e) => {
        setFile(e.target.files[0])
    }
    const handleFormData = (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', product.title);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('category', product.category);

        fetch('https://vast-meadow-07590.herokuapp.com/addProduct', {
          method: 'post',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
              alert('product is added')
          }
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h2 className="pt-5">Add Product</h2>
                <div className="p-5">
                    <form onSubmit={handleFormData}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Title</label>
                            <input onBlur={inputData} type="text" class="form-control" name="title" aria-describedby="emailHelp" required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Price</label>
                            <input onBlur={inputData} type="number" class="form-control" name="price" required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <input onBlur={inputData} type="text" class="form-control" name="description" required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Category</label>
                            <input onBlur={inputData} type="text" class="form-control" name="category" required />
                        </div>
                        <div class="row g-3 align-items-center mb-3">
                            {/* <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Password</label>
                        </div> */}
                            <div class="col-auto">
                                <input onChange={inputFile} type="file" id="inputPassword6" class="form-control" required />
                            </div>
                            {/* <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div> */}
                        </div>
                        {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;