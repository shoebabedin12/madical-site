import React from 'react';

const Dashboard = () => {
    return (
        <div className='flex items-center justify-around pt-[83px]'>
            <div className='py-5 px-6 border border-black/50'>
                <h4 className='font-bold text-2xl leading-6 -tracking-[0.015em] text-black/80 mb-[32px]'>Number of Sent Reports</h4>
                <p className='font-bold text-[32px] leading-6 -tracking-[0.015em] text-black/80 text-center'>115</p>
            </div>
            <div className='py-5 px-6 border border-black/50'>
                <h4 className='font-bold text-2xl leading-6 -tracking-[0.015em] text-black/80 mb-[32px]'>Number of Completed Reports</h4>
                <p className='font-bold text-[32px] leading-6 -tracking-[0.015em] text-black/80 text-center'>100</p>
            </div>
            <div className='py-5 px-6 border border-black/50'>
                <h4 className='font-bold text-2xl leading-6 -tracking-[0.015em] text-black/80 mb-[32px]'>Number of Total Reports</h4>
                <p className='font-bold text-[32px] leading-6 -tracking-[0.015em] text-black/80 text-center'>200</p>
            </div>
        </div>
    );
};

export default Dashboard;