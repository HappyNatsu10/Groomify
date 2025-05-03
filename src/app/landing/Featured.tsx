"use client";
import { Sparkle, Star } from 'lucide-react';

export default function Featured() {
    return(
        <div className='my-15 lg:mx-32 mx-5 flex justify-between items-center lg:flex-row flex-col-reverse gap-15'>
            <div className='z-10 relative w-full lg:h-[510px] h-[350px] flex  flex-1 rounded-[24px]  border-5  border-[#ffffff60]  bg-[#fff]  shadow-md  will-change-transform' style={{ boxShadow: '0 9px 20px #fffff80' }}>
                <div className='bg-[url("/Testi.avif")] rounded-xl block w-full lg:h-full h-[inherit] rounded-inherit bg-cover bg-center'></div>
            </div>
            <div className='lg:w-[50%] w-[100%]'>
                <div className='flex gap-1.5 items-center mb-6 justify-center p-[0px] shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] border-1 border-[#58655b8e] w-[180px] rounded-2xl'>
                    <Sparkle color="#58655b" fill='#58655b8e' strokeWidth={1.5}className='w-4 ' />
                    <h3 className='text-[13px] text-[#58655b] font-extralight'>Featured Testimonal</h3>
                </div>
                <p className='lg:text-[26px] text-[18px] text-[#464646] '>
                    &quot;Jackie used to hate grooming, but ever since we found your salon, she can’t wait for her spa days! The team is so patient and loving - they’ve completely changed her experience. Now she struts out like a little diva every time!&quot;
                </p>
                <div className=' flex gap-1.5 mt-6'>
                    <Star color="#58655b" fill="#58655b" strokeWidth={1.5} />
                    <Star color="#58655b" fill="#58655b" strokeWidth={1.5} />
                    <Star color="#58655b" fill="#58655b" strokeWidth={1.5} />
                    <Star color="#58655b" fill="#58655b" strokeWidth={1.5} />
                    <Star color="#58655b" fill="#58655b" strokeWidth={1.5} />
                </div>
                <div className='mt-6'>
                    <h2 className='mt-2 text-[26px] font-medium'>Naila Porter</h2>
                    <p className='mt-1 text-[16px] text-[#464646]'>Jackie’s Owner</p>
                </div>
            </div>
        </div>
    )
}