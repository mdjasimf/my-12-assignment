import React from 'react';

const OrderModal = ({ order }) => {
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Order for:{order.name}</h3>
                    <form>
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="order-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;