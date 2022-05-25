import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }

                return res.json()
            })
            .then(data => {
                setOrders(data)
            });

    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
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
                            orders?.map(order =>
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