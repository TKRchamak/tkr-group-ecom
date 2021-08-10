import React, { useContext } from 'react';
import { userContest } from '../../../App';


const InventoryManage = () => {
    const [user, setUser] = useContext(userContest);
    
    // const addAllProduct = () => {
    //     fetch('http://localhost:5000/addProduct', {
    //         method:'POST',
    //         headers : {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    // }

    //superAdmin
    const superAdmin = () => {
        fetch('http://localhost:5000/superAdmin?email=' + user.email, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(user)
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
    }
    return (
        <div>
            <h2>Add Product</h2>
            <button onClick={superAdmin}>Add Product</button>
        </div>
    );
};

export default InventoryManage;