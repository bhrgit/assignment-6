import React from 'react';

const getWorkouts = async() => {
    const res= await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};


const Workouts = () => {
    return (
        <div>
            
        </div>
    );
};

export default Workouts;