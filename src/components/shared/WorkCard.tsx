import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';
import Link from 'next/link';

type TWorkCardProps = {
  workout: IWorkout;
};

const WorkCard = ({ workout }: TWorkCardProps) => {
  return (
    <div className="card bg-gray-900 text-neutral-content shadow-sm">
      
      <figure>
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
          className="object-cover"
        />
      </figure>

      <div className="card-body">
        <p className="badge badge-secondary">{workout.difficulty}</p>
        <h2 className="card-title">
          {workout.name}
        </h2>

        

        <p>{workout.equipment}</p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            ⏱️{workout.duration}
          </div>
          <div className="badge badge-outline">
            🔥{workout.caloriesBurned}
          </div>

          <div className="badge badge-outline">
            ⭐{workout.rating}
          </div>
        </div>
        
        <Link
          href={`/src/app/${workout.id}`}
          className="mt-5 block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
