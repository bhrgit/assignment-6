import fatchData from '@/lib/FatchData';
import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


type TProductDetailsProps = {
  params:  Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
    const allWorks = await fatchData();

    return allWorks.map((item: IWorkout) => ({
    id: item.id.toString(),
  }));
}



const ProductDetails = async({params}: TProductDetailsProps) => {
    const { id } = await params;
    const allWorks = await fatchData();

    const singWork = allWorks.find(
        (workout: IWorkout) => workout.id === Number(id)
  );

     if (!singWork) {
        notFound();
     }

    return (
        <main>
            
            <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                    src={singWork.image}
                    width={600}
                    height={400}
                    alt={singWork.name}
                    className="rounded-lg"/>

                    <div>
                    <h1 className="text-5xl font-bold">{singWork.name}</h1>
                    <p className="py-6">
                        {singWork.description}
                    </p>
                    <div className="space-y-2">
                        <p>
                        <strong>Equipment:</strong>{" "}
                        {singWork.equipment}
                        </p>

                        <p>
                        <strong>Difficulty:</strong>{" "}
                        {singWork.difficulty}
                        </p>

                        <p>
                        <strong>Duration:</strong>{" "}
                        {singWork.duration} minutes
                        </p>

                        <p>
                        <strong>Calories:</strong>{" "}
                        {singWork.caloriesBurned}
                        </p>

                        <p>
                        <strong>Sets:</strong>{" "}
                        {singWork.sets}
                        </p>

                        <p>
                        <strong>Reps:</strong>{" "}
                        {singWork.reps}
                        </p>

                        <p>
                        <strong>Rating:</strong>{" "}
                        {singWork.rating}
                        </p>
                    </div>
                    <div className="badge badge-secondary">NEW</div>
                    <div className="badge badge-secondary">NEW</div>

                    <ul className="list-col-grow bg-base-100 rounded-box shadow-md">
  
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>  
                        <li className="list-col-grow">
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </li>

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>  
                        <li className="list-col-grow">
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </li>
                    
                    </ul>
                    <h1></h1>
                    <p></p>

                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            
            </div>
           
        </main>
);
};

export default ProductDetails;