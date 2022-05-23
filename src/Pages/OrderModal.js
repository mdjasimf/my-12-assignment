import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const [user] = useAuthState(auth);
    console.log(order)
    const [orderQuantity, setOrderQuantity] = useState(order.minimumOrderQuantity);

    const handleIncrease = (event) => {
        event.preventDefault();
        const addQuantity = event.target.name.value;
        const newOrderQuantity = parseInt(orderQuantity) + parseInt(addQuantity);
        setOrderQuantity(newOrderQuantity)
        event.target.name.value = '';

    }
    const handleDecrease = (event) => {
        event.preventDefault();
        const decreaseQuantity = event.target.name.value;
        const newOrderQuantity = parseInt(orderQuantity) - parseInt(decreaseQuantity);
        setOrderQuantity(newOrderQuantity)
        event.target.name.value = '';

    }

    const handleOrder = (event) => {
        if (orderQuantity < order.minimumOrderQuantity) {
            toast(`You can not order less than ${order.minimumOrderQuantity} `)
        }
        if (orderQuantity > order.availableQuantity) {
            toast(`you can not order more than ${order.availableQuantity}`)
        }
        event.preventDefault();
        const orders = {
            name: order.name,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: event.target.number.value,
            address: event.target.address.value
        }
        const url = 'http://localhost:5000/orders';
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
                alert('successfully item added');
                event.target.reset();
            })
        setOrder(null);
    }







    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg my-5">Order for:{order.name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" value={order.name} class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" value={user.displayName} class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" value={user.email} class="input input-bordered input-accent w-full max-w-xs" />
                        <input name='quantity' value={orderQuantity} type="text" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" name='number' class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder='Address' name='address' class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value='submit' class="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" />
                    </form>
                </div>
                <div>
                    <form onSubmit={handleIncrease}>
                        <input type="text" name='name' placeholder="Type number" class="input input-bordered input-accent w-30" />
                        <button class="btn btn-xs">Increase Quantity</button>
                    </form>
                    <form onSubmit={handleDecrease}>
                        <input type="text" name='name' placeholder="Type number" class="input input-bordered input-accent w-30" />
                        <button class="btn btn-xs">Decrease Quantity</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;