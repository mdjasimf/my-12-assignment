import React from 'react';
import feedBack from '../../feedback.ico'
import client from '../../client.jpg'
import country from '../../country.ico'
import revenue from '../../revenue.ico'

const BusinessSummary = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-4xl font-bold my-5'>BUSINESS SUMMARY</h1>
            <h1 className='text-center text-4xl'>MILLION BUSINESS TRUST US</h1>
            <h4 className='text-center text-1xl'>TRY TO UNDERSTAND USER EXPECTATION</h4>
            <div>
                <div className='lg:flex justify-between mx-20 my-20'>
                    <div>
                        <img className='w-20' src={country} alt="" />
                        <h1 className='text-5xl'>72</h1>
                        <p className='text-2xl'>Countries</p>
                    </div>
                    <div>
                        <img className='w-20' src={revenue} alt="" />
                        <h1 className='text-5xl'>45m</h1>
                        <p className='text-2xl'>Revenue</p>
                    </div>
                    <div>
                        <div className='mr-10'>
                            <img className='w-40' src={client} alt="" />
                        </div>
                        <h1 className='text-5xl'>273+</h1>
                        <p className='text-2xl'>Happy Clients</p>
                    </div>
                    <div>
                        <img className='w-40' src={feedBack} alt="" />
                        <h1 className='text-5xl'>432+</h1>
                        <p className='text-2xl'>Feedbacks</p>
                    </div>
                </div>
            </div>
            <div class=" card w-full bg-base-100 shadow-xl">
                <div className='flex'>
                    <div class="card-body">
                        <h2 class="card-title">Have any question about us or get a products request?</h2>
                        <p>Don't hesitate to contact us</p>
                    </div>
                    <div className='lg:mr-20 mt-10'>
                        <button class="btn btn-info lg:mx-20 lg:w-60">Request for quote</button>
                        <button class="btn btn-primary lg:w-40">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;