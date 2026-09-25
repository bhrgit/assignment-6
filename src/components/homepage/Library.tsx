import Image from 'next/image';
import React from 'react';

const Library = () => {
    return (
       <div className='my-16'>
        <h1 className='text-4xl text-base-100 font-bold'>THE LIBRARY</h1>
        <p className='text-gray-400 mb-8'>Twelve lifts covering every major muscle group.</p>
         <section className='grid grid-cols-3 gap-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                {/* <Image/> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
        </section>
       </div>
    );
};

export default Library;