import Image from 'next/image';
import React from 'react';
import hero from '../../assets/banner.png'

const Banner = () => {
    return (
            <div className="hero bg-gray-900 min-h-screen rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={hero} className='w-auto h-auto' alt="banner"/>
                    <div>
                        <p className='text-lime-300'>WORKOUT LIBRARY</p>
                        <h1 className="text-5xl font-bold text-amber-50 ">TRAIN WITH INTENT. LOG <br></br>EVERY SET.</h1>
                        <p className="text-gray-100 py-6">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br></br>into today's plan, and watch the week's work add up.
                        </p>
                        <button className="btn btn-success">BROWSE WORKOUTS</button>
                    </div>
                </div>
            </div>
        
        
    );
};

export default Banner;