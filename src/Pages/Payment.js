import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from '../CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3iBaIevVn4MQvwlFOyahsuLosrtfVX2RWmiqUvcqOSYxuUfyuyuEdaoCDX2y5vCbEtDiaBtBeMt2S9mpVKeau400K6b2fDDh');

const Payment = () => {
    const { id } = useParams();

    const { data: book, isLoading } = useQuery(['tools', id], () => fetch(`https://dry-retreat-90563.herokuapp.com/booking/${id}`,
        {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res =>
        res.json()
    )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 className='text-3xl text-red-700'>Hello! {book.displayName}</h1>
                <h2 class="card-title">Produc Name: {book.name}</h2>
                <h2 class="card-title">Total price:$ {book.price}</h2>
            </div>
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        book={book}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;