import React from 'react';
import banner from '../../banner.webp'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: ` url(${banner})`
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to my Website</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;