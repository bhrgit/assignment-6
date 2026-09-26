import Workouts from '@/app/workouts/page';
import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import React from 'react';



type TWorkCardProps = {
  workout: IWorkout;
};


const WorkCard = ({ workout }: TWorkCardProps) => {
    return (
        <div>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image src={workout.image} className='w-4 h-auto' alt='workout image'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {workout.name}                    
                    </h2>
                    <p>{workout.equipment}</p>
                    <div className="card-actions justify-end">
                        {/* <div className="badge badge-outline">{workout.duration}</div>
                        <div className="badge badge-outline">{workout.caloriesBurned}</div>
                        <div className="badge badge-outline">{workout.rating}</div> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default WorkCard;