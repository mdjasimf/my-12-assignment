import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const [user] = useAuthState(auth);
    const [orderQuantity, setOrderQuantity] = useState(order.minimumOrderQuantity);

    const handleIncrease = () => {
        const newOrderQuantity = parseInt(orderQuantity) + 1
        setOrderQuantity(newOrderQuantity)
    }
    const handleDecrease = () => {
        const newOrderQuantity = parseInt(orderQuantity) - 1
        setOrderQuantity(newOrderQuantity)

    }

    const handleOrder = (event) => {
        event.preventDefault();
        if (orderQuantity > order.availableQuantity) {
            return toast(``)
        }
        else {
            const orders = {
                name: order.name,
                displayName: user.displayName,
                email: user.email,
                quantity: orderQuantity,
                price: event.target.price.value,
                phoneNumber: event.target.number.value,
                address: event.target.address.value
            }
            const url = 'https://dry-retreat-90563.herokuapp.com/orders';
            fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)

            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    toast.success('successful');
                    event.target.reset();
                })
            setOrder(null);
        }
    }







    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-5">Order For: <span className='text-red-500'>{order.name}</span></h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center'>
                        <h1>Order name</h1>
                        <input type="text" value={order.name} className="input input-bordered input-accent w-full max-w-xs" />
                        <h1>User name</h1>
                        <input type="text" value={user.displayName} className="input input-bordered input-accent w-full max-w-xs" />
                        <h1>Email</h1>
                        <input type="text" value={user.email} className="input input-bordered input-accent w-full max-w-xs" />
                        <h1>Quantity</h1>
                        <input name='quantity' value={orderQuantity} type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        {
                            orderQuantity < order.minimumOrderQuantity && <h1 className='text-red-500'>You can not order less than {order.minimumOrderQuantity} </h1>
                        }
                        {
                            orderQuantity > order.availableQuantity && <h1 className='text-red-500'>you can not order more than {order.availableQuantity}</h1>
                        }
                        <h1>Total Price</h1>
                        <input name='price' value={parseInt(orderQuantity) * parseInt(order.price)} type="text" className="input input-bordered input-accent w-full max-w-xs" />
                        <h1>Your Number</h1>
                        <input type="text" placeholder="Phone Number" name='number' className="input input-bordered input-accent w-full max-w-xs" />
                        <h1>Address</h1>
                        <input type="text" placeholder='Address' name='address' className="input input-bordered input-accent w-full max-w-xs" />
                        {
                            orderQuantity < order.minimumOrderQuantity || orderQuantity > order.availableQuantity ? <input disabled type="submit" value='submit' className="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" /> :
                                <input type="submit" value='submit' className="btn btn-outline btn-primary input input-bordered input-accent w-full hover:rounded-full max-w-xs" />
                        }
                    </form>
                </div>
                <div>
                    <button onClick={handleIncrease} className="btn btn-primary hover:rounded-full btn-xs">Increase Quantity</button>
                    <button onClick={handleDecrease} className="btn btn-primary hover:rounded-full btn-xs">Decrease Quantity</button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;