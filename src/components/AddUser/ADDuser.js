import React from 'react';

const ADDuser = () => {
    const handleAdduser = e => {
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
            <h1>Plz Add a new user</h1>
            <form onSubmit={handleAdduser}>
                <input type="name" name='name' placeholder='Name' required /><br />
                <input type="email" name='email' placeholder='Email' required /><br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default ADDuser;