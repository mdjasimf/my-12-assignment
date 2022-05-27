import React from 'react';
import feedBack from '../../feedback.ico'
import client from '../../client.jpg'
import country from '../../country.ico'
import revenue from '../../revenue.ico'

const BusinessSummary = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl text-success font-bold my-5'>BUSINESS SUMMARY</h1>
            <h1 className='text-center text-4xl'>MILLION BUSINESS TRUST US</h1>
            <h4 className='text-center text-1xl'>TRY TO UNDERSTAND USER EXPECTATION</h4>
            <div>
                <div className='lg:flex justify-between mx-20 my-20'>
                    <div className='lg:mt-4'>
                        <img className='w-20' src={country} alt="" />
                        <h1 className='text-5xl'>72</h1>
                        <p className='text-2xl'>Countries</p>
                    </div>
                    <div className='lg:mt-4'>
                        <img className='w-20' src={revenue} alt="" />
                        <h1 className='text-5xl'>45m</h1>
                        <p className='text-2xl'>Revenue</p>
                    </div>
                    <div>
                        <div>
                            <img className='w-40' src={client} alt="" />
                        </div>
                        <div className='lg:ml-10'>
                            <h1 className='text-5xl'>273+</h1>
                            <p className='text-2xl'>Happy Clients</p>
                        </div>
                    </div>
                    <div>
                        <img className='w-40' src={feedBack} alt="" />
                        <div className='lg:ml-10'>
                            <h1 className='text-5xl'>432+</h1>
                            <p className='text-2xl'>Feedbacks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" card w-full bg-base-100 shadow-xl">
                <div className='flex'>
                    <div className="card-body">
                        <h2 className="card-title">Have any question about us or get a products request?</h2>
                        <p>Don't hesitate to contact us</p>
                    </div>
                    <div className='lg:mr-20 mt-10'>
                        <button className="btn btn-info lg:mx-20 lg:w-60 hover:rounded-full">Request for quote</button>
                        <button className="btn btn-primary lg:w-40 hover:rounded-full">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;