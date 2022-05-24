import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);

        }
        getItems();
    }, [user])

    const handleMyItemDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = orders.filter(myItem => myItem._id !== id)
                    setOrders(remaining);
                })
        }
    }


    return (
        <div>
            {
                orders.map(order => <div key={order._id}>
                    <h1>{order.name}</h1><button class="btn btn-outline btn-primary btn-xs" onClick={() => handleMyItemDelete(order._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default MyOrders;