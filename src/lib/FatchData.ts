import React from 'react';

const fatchData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog', {
    next: { revalidate: 300 },
    });

//     if (res.status === 429) return [];


//     if (!res.ok) {
//     throw new Error(`Workout API returned HTTP ${res.status}`);
// }

// if (!res.headers.get('content-type')?.includes('application/json')) {
//     throw new Error('Workout API returned HTML instead of JSON');
// }


    const data = await res.json();

    // console.log(data)

    return data;
};

export default fatchData;