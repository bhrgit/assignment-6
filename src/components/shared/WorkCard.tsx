import { IWorkout } from '@/types/wk.type';
import Image from 'next/image';

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
      </div>
    </div>
  );
};

export default WorkCard;
