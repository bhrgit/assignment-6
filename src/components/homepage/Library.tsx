import { IWorkout } from '@/types/wk.type';
import WorkCard from '../shared/WorkCard';
import fatchData from '@/lib/FatchData';

const Library = async () => {
  const data: IWorkout[] = await fatchData();

  return (
    <div className="my-16">
      <h1 className="text-4xl text-base-100 font-bold">
        THE LIBRARY
      </h1>

      <p className="text-gray-400 mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((workout) => (
          <WorkCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </section>
    </div>
  );
};

export default Library;
