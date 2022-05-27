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
            <h1 className='text-center text-3xl text-success font-bold my-5'>All reviews</h1>
            {
                reviews.map(review => <div key={review._id}>
                    <div className='flex justify-center items-center'>
                        <div className="hover:scale-110 hover:ease-in duration-300 card w-50  bg-accent-100 shadow-xl">
                            <div className="card-body">
                                <div className="w-24 flex justify-center rounded-full">
                                    <img src={review.photo} />
                                </div>
                                <h2 className="card-title">{review.name}</h2>
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