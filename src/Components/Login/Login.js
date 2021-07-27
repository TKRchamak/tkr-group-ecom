import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { newUserContest, userContest } from '../../App';




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
        }
    }
    const submitForm = (e) => {
        // e.preventDefault()
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log(user);
                    alert("this is done");
                    // ...
                    updateProfile(user.name, user.phone)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log("user =", user)
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
        const updateProfile = (name, phone) => {
            const user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: name,
                phoneNumber: phone,
            }).then(() => {
                console.log('Update successful')
                // ...
            }).catch((error) => {
                // An error occurred
                let errorMessage = error.message;
                // ...
                console.log(errorMessage)
            });
        }

    }
    return (
        <div className="container p-5">
            <div className="container pt-4">
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
    );
};

export default LogIn;