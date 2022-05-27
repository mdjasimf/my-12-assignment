import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://dry-retreat-90563.herokuapp.com/orders?email=${user.email}`, {
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
            const url = `https://dry-retreat-90563.herokuapp.com/orders/${id}`
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
                        <tr><th>Serial no</th>
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
                            orders?.map((order, index) =>
                                <tr key={order?._id}>
                                    <td>{index + 1}</td>
                                    <td>{user?.displayName}</td>
                                    <td>{order?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.phoneNumber}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.price}</td>
                                    <td>

                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-outline btn-primary btn-xs">pay</button></Link>}
                                        {(order.price && order.paid) && <span>paid <br />Your transaction id: <br />{order.transactionId}</span>}
                                    </td>
                                    <td>

                                        {
                                            !order.paid &&
                                            <button class="btn btn-outline btn-primary btn-xs" onClick={() => handleMyItemDelete(order._id)}>Cancel</button>
                                        }


                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;