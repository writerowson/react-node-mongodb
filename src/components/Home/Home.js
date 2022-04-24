import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [])

    const hadleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete it');
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const reamaining = users.filter(user => user._id !== id)
                        setusers(reamaining)
                    }
                })
        }
    }


    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name}:: {user.email}
                        <Link to={`/update/${user._id}`}> <button>Update</button> </Link>
                        {/* here we need parameter to specifically delete the element */}
                        < button onClick={() => hadleUserDelete(user._id)}>X</button></li>)
                }

            </ul >
        </div >
    );
};

export default Home;