import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import React from 'react';
import WorkCard from '../shared/WorkCard';
import fatchData from '@/lib/FatchData';


const Library = async() => {
    const data = await fatchData();
    // console.log(data)
    return (
       <div className='my-16'>
        <h1 className='text-4xl text-base-100 font-bold'>THE LIBRARY</h1>
        <p className='text-gray-400 mb-8'>Twelve lifts covering every major muscle group.</p>
         <section className='grid grid-cols-3 gap-2'>
            <div>
            {data.map((workout: IWorkout, ind: number)=> {
                return  <WorkCard key={ind} workout={workout} />;
            })}            
             </div>
            
        </section>
       </div>
    );
};

export default Library;