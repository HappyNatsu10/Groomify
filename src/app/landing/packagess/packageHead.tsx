"use client";
import { Package } from 'lucide-react';
import { WandSparkles } from 'lucide-react';
import React, { useState } from 'react';
import Elegance from './elegance';
import Spa from './spa';
import Royal from './royal';


type ViewMode = 'elegance' | 'spa' | 'royal';


export default function PackageHead() {

    const [viewMode, setViewMode] = useState<ViewMode>('elegance')

    return(
        <>
        <div className='my-35 lg:mx-35 mx-6 flex justify-center items-center flex-col'>
            <div className='flex gap-1.5  items-center mb-6 z-10 justify-center p-[3px] border-1 border-[#58655b8e]  shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)]   w-32 rounded-2xl'>
                <Package  color='#58655b' className='w-4' />
                <h3 className='text-[13px]  text-[#58655b] font-extralight'>Packages</h3>
            </div>
            <div className='flex items-center flex-col text-center z-10'>
                    <h1 className='text-[2.5rem] lg:text-[64px] font-medium leading-tight mb-5'>Tailored packages<br />for <b className='text-[#58655b] font-medium'>every pet</b></h1>
                    <p className='text-[#58655b] mb-12 lg:w-[55%] text-[16.5px] lg:text-[17px]'>Whether your pet needs a quick refresh or a full spa day, we’ve got the perfect package to suit their needs.</p>
            </div>
            <div className=' flex justify-between lg:flex-row flex-col items-center p-2  w-full gap-2.5 bg-[#f8f8f8] rounded-[10px]'>
                <div className={` ${viewMode === 'elegance' && ( "border-1 border-[#58655b8e] bg-[#fff]")} flex justify-center gap-2 items-center  cursor-pointer h-[60px] p-3 rounded-2xl w-full` } onClick={() => setViewMode('elegance')}>
                    <WandSparkles color='#58655b '/>
                    <h2 className='text-[#58655b] font-bold'>The Essential Elegance</h2>
                </div>
                <div className={` ${viewMode === 'spa' && ( "border-1 border-[#58655b8e] bg-[#fff]")} flex justify-center gap-2 items-center  cursor-pointer h-[60px] p-3 rounded-2xl w-full` } onClick={() => setViewMode('spa')}>
                    <WandSparkles color='#58655b '/>
                    <h2 className='text-[#58655b] font-bold'>The Signature Spa Day</h2>
                </div>
                <div className={` ${viewMode === 'royal' && ( "border-1 border-[#58655b8e] bg-[#fff]")} flex justify-center gap-2 items-center  cursor-pointer h-[60px] p-3 rounded-2xl w-full` } onClick={() => setViewMode('royal')}>
                    <WandSparkles  color='#58655b '/>
                    <h2 className='text-[#58655b] font-bold'>The Royal Retreat</h2>
                </div>
            </div>
            <div className='my-6'>
                {viewMode === 'elegance' && ( <Elegance />)}

                {viewMode === 'spa' && ( <Spa /> )}

                {viewMode === 'royal' && ( <Royal /> )}
            </div>
        </div>
        </>
    )
}