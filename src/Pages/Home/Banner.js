import React from 'react';
import banner from '../../banner.webp'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            backgroundRepeat: 'bg-no-repeat	',
            backgroundSize: 'cover',
            background: ` url(${banner})`
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Welcome to my Website</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;