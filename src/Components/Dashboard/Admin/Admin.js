import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { userContest } from '../../../App';

const Admin = () => {
    const [adminList, setAdminList] = useState([]);
    const [user] = useContext(userContest);
    useEffect(() => {
        fetch('http://localhost:5000/adminList?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdminList(data))
            .catch(err => console.log(err))
    }, [user.email]);


    const removeAdmin = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/removeAdmin/${id}`, {
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
                <h2 className="p-2">Admin List</h2>
                <div className="pe-5 pt-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                adminList.map(admin =>
                                    <tr>
                                        <th scope="row">{admin._id}</th>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.age}</td>
                                        <td onClick={() => removeAdmin(admin._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
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

export default Admin;