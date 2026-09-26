import React from 'react';

const fatchData = async () => {
    const res= await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();

    // console.log(data)

    return data;
};

export default fatchData;