import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const handleUpdateUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added');
                e.target.reset()
            })
    }

    return (
        <div>
            <h2>Updating user : {id}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="name" name='name' placeholder='Name' required /><br />
                <input type="email" name='email' placeholder='Email' required /><br />
                <input type="submit" value="Update User" />

            </form>
        </div>
    );
};

export default UpdateUser;