import React from 'react';
import { toast } from 'react-toastify';

const Review = () => {





    const handelReviwes = (event) => {
        event.preventDefault();
        const review = {
            description: event.target.description.value,
            photo: event.target.photo.value,
            name: event.target.name.value,
            rating: event.target.ratings.value,
        }
        if (!review.description) {
            return alert('please fill up description')
        }
        if (!review.photo) {
            return alert('please fill up photo')
        }
        if (!review.name) {
            return alert('please fill up name')
        }
        if (!review.rating) {
            return alert('please fill up rating')
        }
        const url = 'https://dry-retreat-90563.herokuapp.com/reviews';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                toast('Thanks for review');
                event.target.reset();
            })

    }


    return (
        <div>
            <h1 className='text-center mt-2 text-3xl text-accent'>Rate us</h1>
            <form onSubmit={handelReviwes} className='grid grid-cols-1 gap-2 justify-items-center'>
                <input type="text" placeholder="Write something" name='description' className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='your photos' name='photo' className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='your name' name='name' className="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='Ratings' name='ratings' className="input input-bordered input-accent w-full max-w-xs" />
                <input type="submit" value='submit' className="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Review;