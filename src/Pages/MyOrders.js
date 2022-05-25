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
    console.log(orders)
    const handleMyItemDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                })
        }
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order Name</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pay</th>
                            <th>Cancel Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order?._id}>
                                    <td>{user?.displayName}</td>
                                    <td>{order?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.phoneNumber}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.price}</td>
                                    <td><button class="btn btn-outline btn-primary btn-xs">pay</button></td>
                                    <td><button class="btn btn-outline btn-primary btn-xs" onClick={() => handleMyItemDelete(order._id)}>Cancel</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;