import React from 'react';

const MyPlanPage = () => {
    return (
        <div>
            <h1 className='mt-8'>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className="flex w-full flex-col lg:flex-row py-4 mx-9">
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
            </div>
                        
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Today's Plan" />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Saved" defaultChecked />
            </div>
            My Plan.......
        </div>
    );
};

export default MyPlanPage;