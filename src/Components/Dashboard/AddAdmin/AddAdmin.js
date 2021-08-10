import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {

    // const [user, setUser] = useContext(userContest);
    const [admin, setAdmin] = useState({});
    const [file, setFile] = useState(null)
    console.log(admin, file)

    const inputData = (e) => {
        let newProduct = { ...admin };
        newProduct[e.target.name] = e.target.value;
        setAdmin(newProduct)
    }

    const inputFile = (e) => {
        setFile(e.target.files[0])
    }
    const handleFormData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', admin.name);
        formData.append('email', admin.email);
        formData.append('description', admin.description);
        formData.append('age', admin.age);

        fetch('http://localhost:5000/addAdmin', {
            method: 'post',
            body: formData
        })
            .then(response => response.json())
            .then(data => data && alert('Admin is added'))
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
                <h2 className="pt-5">Add Admin</h2>
                <div className="p-5">
                    <form onSubmit={handleFormData}>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                            <input onBlur={inputData} type="text" class="form-control" name="name" aria-describedby="emailHelp" required />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Email</label>
                            <input onBlur={inputData} type="email" class="form-control" name="email" required />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Description</label>
                            <input onBlur={inputData} type="text" class="form-control" name="description" required />
                        </div>
                        <div class="row g-3 align-items-center mb-3">
                            {/* <div class="col-auto">
                                <label htmlFor="inputPassword6" class="col-form-label">Password</label>
                            </div> */}
                            <div class="col-auto">
                                <label htmlFor="exampleInputPassword1" class="form-label">Profile Pic</label>
                                <input onChange={inputFile} type="file" class="form-control" required />
                            </div>
                            <div class="col-auto">
                                <label htmlFor="exampleInputPassword1" class="form-label">Age</label>
                                <input onBlur={inputData} type="number" class="form-control" name="age" required />
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

export default AddAdmin;