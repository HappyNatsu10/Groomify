import { TvMinimalPlay } from 'lucide-react';




export default function Work() {
    return(
        <div className=''>
            <div className='relative h-[800px] lg:h-[1200px]  w-[100%] flex items-center justify-center bg-[url("/back.avif")]'>
                <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
                <div className='lg:mx-32 mx-6 my-15 flex justify-center items-center flex-col z-10'>
                    <div className='flex gap-1.5 items-center mb-6 z-10 justify-center p-[3px] border-1 border-[#58655b8e]  shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] w-32 rounded-2xl'>
                        <TvMinimalPlay  color='#58655b' className='w-4' />
                        <h3 className='text-[13px] text-[#58655b] font-extralight'>How We Work</h3>
                    </div>
                    <div className='flex items-center flex-col text-center z-10'>
                        <h1 className='lg:text-[64px] text-[40px] font-medium leading-tight mb-5'>See the <br /> love <b className='text-[#58655b] font-medium'>in action</b></h1>
                        <p className='text-[#58655b] lg:w-[40%] w-[100%] mb-12 lg:text-[17px] text-[16.5px] font-medium'>Watch our groomers work their magic! From gentle brushing to precision cuts, every moment is filled with care and expertise. Your pet’s happiness is our priority.</p>
                    </div>
                    <div className=' z-10 relative w-full h-auto flex  flex-1  overflow-hidden  rounded-[24px]  border-5  border-[#ffffff60]  bg-[#fff]  shadow-md  will-change-transform' style={{ boxShadow: '0 6px 12px #fffff80' }}>
                        <video src="/video.mp4" className='w-full h-full block z-10 rounded-xl object-cover'  />
                    </div>
                </div>
            </div>
        </div>
    )
}