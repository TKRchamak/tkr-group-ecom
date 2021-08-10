import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { userContest } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../LoginAll/LogIn/FirebaseConfig';




if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}



const Sidebar = () => {
    const [user, setUser] = useContext(userContest);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    console.log(isSuperAdmin, isAdmin)

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: user.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));
    // }, [])


    //Admin
    useEffect(() => {
        fetch('https://vast-meadow-07590.herokuapp.com/admin?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [user.email]);

    //superAdmin
    useEffect(() => {
        fetch('https://vast-meadow-07590.herokuapp.com/superAdmin?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsSuperAdmin(data))
    }, [user.email])


    //Logout
    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            sessionStorage.clear()
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 ps-5 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isSuperAdmin &&
                    <div>
                        <li>
                            <Link to="/admin" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Admins</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                    </div>
                }
                {
                    (isAdmin || isSuperAdmin) &&
                    <div>
                        <li>
                            <Link to="/productList" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Product List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addProduct" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                            </Link>
                        </li>
                    </div>
                }

            </ul>
            <div>
                <Link to="/" className="text-white" onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;