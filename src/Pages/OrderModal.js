import React, { useState } from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ order }) => {
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
            toast('You can`t ')
        }
        if (orderQuantity > order.availableQuantity) {
            toast('lsjfk')
        }
        event.preventDefault();
    }







    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Order for:{order.name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" placeholder="" class="input input-bordered input-accent w-full max-w-xs" />
                        <input name='quantity' value={orderQuantity} type="text" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value='submit' placeholder="Type here" class="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" />
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