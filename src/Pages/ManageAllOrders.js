import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const url = 'https://dry-retreat-90563.herokuapp.com/manageOrders';
            const { data } = await axios.get(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setAllOrders(data);

        }
        getItems();
    }, [])

    const handleMyItemDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `https://dry-retreat-90563.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = allOrders.filter(order => order._id !== id)
                    setAllOrders(remaining);
                })
        }
    }

    return (
        <div>
            <div className="mx-5 overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order Name</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Cancel Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(AllOrder =>
                                <tr key={AllOrder?._id}>
                                    <td>{AllOrder?.displayName}</td>
                                    <td>{AllOrder?.name}</td>
                                    <td>{AllOrder?.email}</td>
                                    <td>{AllOrder?.address}</td>
                                    <td>{AllOrder?.phoneNumber}</td>
                                    <td>{AllOrder?.quantity}</td>
                                    <td>{AllOrder?.price}</td>
                                    <td>

                                        {
                                            !AllOrder.paid ? <>
                                                <h1>unpaid</h1>
                                                <button className="btn btn-outline btn-primary btn-xs" onClick={() => handleMyItemDelete(AllOrder._id)}>Cancel Order</button>
                                            </> :
                                                <h1>pending</h1>
                                        }


                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;