import React from 'react';

const Commitment = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl font-bold text-success my-5'>COMMITMENT</h1>
            <div className='lg:flex lg:justify-center lg:items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Best
                            Quality</h2>
                        <p>Great choice for you</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Secured
                            Payment</h2>
                        <p>All your payment information
                            is safe</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Money Back
                            Guarantee</h2>
                        <p>Free 100% refund for
                            30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commitment;