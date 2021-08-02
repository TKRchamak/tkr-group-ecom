import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { newUserContest, userContest } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const LogIn = () => {
    const [newUser, setNewUser] = useContext(newUserContest)
    // const [newUser, setNewUser] = useState(false)
    // const [user, setUser] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     password: '',
    //     img: ''
    // })
    const [user, setUser] = useContext(userContest)
    console.log(user)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const takeFormData = e => {
        let isFormValid;
        // console.log(e.target.name, e.target.value)
        if (e.target.name === "name") {
            isFormValid = e.target.value.length > 5;
        }
        if (e.target.name === "phone") {
            isFormValid = true;
        }
        if (e.target.name === "email") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isFormValid = re.test(String(e.target.value).toLowerCase());
        }
        if (e.target.name === "password") {
            isFormValid = e.target.value.length > 6;
        }
        if (isFormValid) {
            let newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
            // console.log(e.target.name, e.target.value)

        }
    }
    const submitForm = (e) => {
        e.preventDefault()

        //signIn
        if (newUser && user) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    var user1 = userCredential.user;
                    console.log(user1);
                    alert("this is done");
                    updatePro(user.name, user.phone)
                    console.log(user.name, user.phone)

                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }

        //login
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    console.log("user =", user);
                    const recentUser = {
                        isUser: true,
                        name: user.displayName,
                        phone: '',
                        email: user.email,
                        password: '',
                        img: user.photoURL
                    }
                    setUser(recentUser);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }

        //update
        const updatePro = (name, phone) => {
            const user = firebase.auth().currentUser;
            console.log(name, phone)
            user.updateProfile({
                displayName: name,
                phoneNumber: phone,
            }).then((res) => {
                console.log('Update successful');
                signInUser();
                history.replace(from);
            }).catch((error) => {
                let errorMessage = error.message;
                console.log(errorMessage)
            });
        }

        //current user
        const signInUser = () => {
            const user = firebase.auth().currentUser;
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL;
                const emailVerified = user.emailVerified;

                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                const uid = user.uid;
                console.log(displayName, email, photoURL, emailVerified, uid)
                const recentUser = {
                    isUser: true,
                    name: displayName,
                    phone: '',
                    email: email,
                    password: '',
                    img: photoURL
                }
                setUser(recentUser);
            }
        }

    }

    const getJWTToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
        }).catch(function (error) {
            // Handle error
        });
    }


    //Sign Out 
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }



    return (
        <div className="container p-5">
            <div className="container pt-4">
                {
                    user.isUser ?
                        <div>
                            <div className="card p-1" style={{ maxWidth: "100%" }}>
                                <div className="row g-0">
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <img style={{ maxHeight: "60vh" }} src={user.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <div className="card-body" style={{ maxWidth: "100%" }}>
                                            <h3 className="card-title">{user.name}</h3>
                                            <p className="card-text">{user.email}</p>
                                            <p className="card-text"><small className="text-muted">Price : ${user.phone}</small></p>
                                            <br />
                                            <div className="text-start">
                                                <button className="btn btn-info" onClick={handleSignOut} >Log Out</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="d-flex justify-content-center">
                            <div >
                                <form onSubmit={submitForm}>
                                    {
                                        newUser &&
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                                            <input onBlur={takeFormData} type="text" name="name" className="form-control" id="exampleInputName" required />
                                        </div>

                                    }
                                    {
                                        newUser &&
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPhone" className="form-label">Phone / Mobile Number</label>
                                            <input onBlur={takeFormData} type="number" name="phone" className="form-control" id="exampleInputPhone" />
                                        </div>
                                    }
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={takeFormData} type="email" name="email" className="form-control" id="exampleInputEmail1" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={takeFormData} type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input onChange={() => setNewUser(!newUser)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Create New User</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{newUser ? "Sign In" : "Login"}</button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default LogIn;