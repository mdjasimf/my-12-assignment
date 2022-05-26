import React from 'react';
import { toast } from 'react-toastify';

const AddTools = () => {
    const handleTools = (event) => {
        event.preventDefault();
        const addTools = {
            name: event.target.name.value,
            img: event.target.img.value,
            shortDescription: event.target.shortDescription.value,
            price: event.target.price.value,
            minimumOrderQuantity: event.target.minimumOrderQuantity.value,
            availableQuantity: event.target.availableQuantity.value,
        }
        if (!addTools.name) {
            return alert('please fill up name')
        }
        if (!addTools.shortDescription) {
            return alert('please fill up shortDescription')
        }
        if (!addTools.price) {
            return alert('please fill up price')
        }
        if (!addTools.minimumOrderQuantity) {
            return alert('please fill up minimumOrderQuantity')
        }
        if (!addTools.availableQuantity) {
            return alert('please fill up availableQuantity')
        }
        const url = 'https://dry-retreat-90563.herokuapp.com/addTools';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTools)

        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                toast('successful');
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-center mt-2 text-3xl text-accent'>Rate us</h1>
            <form onSubmit={handleTools} className='grid grid-cols-1 gap-2 justify-items-center'>
                <input type="text" placeholder='Tool Name' name='name' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='ShortDescription' name='shortDescription' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='Photo url' name='img' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='Price' name='price' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='MinimumOrderQuantity' name='minimumOrderQuantity' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='AvailableQuantity' name='availableQuantity' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="submit" value='submit' class="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddTools;