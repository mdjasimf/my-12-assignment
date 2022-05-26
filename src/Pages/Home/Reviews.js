import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://dry-retreat-90563.herokuapp.com/reviews').then(res =>
        res.json()
    )
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl'>All reviews</h1>
            {
                reviews.map(review => <div key={review._id}>
                    <div className='flex justify-center items-center'>
                        <div class=" card w-50  bg-accent-100 shadow-xl">
                            <div class="card-body">
                                <div class="w-24 flex justify-center rounded-full">
                                    <img src={review.photo} />
                                </div>
                                <h2 class="card-title">{review.name}</h2>
                                <p>{review.description}</p>
                                <p className='text-info'>Rating: {review.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Reviews;