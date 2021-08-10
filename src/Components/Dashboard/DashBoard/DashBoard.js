import React, { useContext, useEffect, useState } from 'react';
import { userContest } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    // const [user, setUser] = useContext(userContest);
    // const [isAdmin, setIsAdmin] = useState(false)
    // const [isSuperAdmin, setIsSuperAdmin] = useState(false)

    // //Admin
    // useEffect(() => {
    //     fetch('https://vast-meadow-07590.herokuapp.com/admin?email=' + user.email, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             authorization: `Bearer ${sessionStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data))
    // }, [user.email]);

    // //superAdmin
    // useEffect(() => {
    //     fetch('https://vast-meadow-07590.herokuapp.com/superAdmin?email=' + user.email, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             authorization: `Bearer ${sessionStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsSuperAdmin(data))
    // }, [user.email])

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h2>this is dashboard of</h2>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;