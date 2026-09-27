import fatchData from '@/lib/FatchData';
import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


type TProductDetailsProps = {
  params:  {
    id: string;
  };
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
            <div className="hero bg-neutral min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                    src={singWork.image}
                    width={600}
                    height={400}
                    alt={singWork.name}
                    className="rounded-lg"/>

                    <div className=' text-amber-100'>
                    <h1 className="text-5xl font-bold">{singWork.name}</h1>
                    <p className="py-6">
                        {singWork.description}
                    </p>
                    <div className="space-y-2 text-amber-50">
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
                        <p>
                        <strong>Instructions:</strong>{" "}
                        {singWork.instructions}
                        </p>
                    </div>
                    
                    <div className='flex my-6 gap-6'>
                        <button className="btn btn-primary">{`Add to today's plan`}</button>
                        <button className="btn btn-primary">Save for later</button>
                    </div>
                    
                    </div>
                </div>
            </div>
            
            </div>
           
        </main>
);
};

export default ProductDetails;