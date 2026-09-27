import fatchData from '@/lib/FatchData';
import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import React from 'react';


type TProductDetailsProps = {
  params: {
    id: number;
  };
};

export async function generateStaticParams() {
    const allWorks = await fatchData();

    return allWorks.map((item: IWorkout) => {
        return {id: item.id}
    })    
}


const ProductDetails = async({params}: TProductDetailsProps) => {
    const { id } = await params;
    const 
    return (
        <main>
            {data.map((item) => (
            <div key={item.id} item={item}>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <Image> */}
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
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
           )) }
        </main>
    );
};

export default ProductDetails;