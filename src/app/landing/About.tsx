import { House } from 'lucide-react';

export default function About() {
    return(
        <div id='about' className='relative my-35 h-[38rem]  flex items-center justify-center w-[100%] '>
            <div className='relative my-35 h-[100%]  w-[100%] flex items-center justify-center bg-[url("/back.avif")]'>
                <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
                <div className="mx-6 lg:mx-32  relative flex justify-between items-center gap-3.5 z-10 lg:flex-row flex-col w-full">
                    <div className='w-[100%] lg:w-[100%]'>
                        <div className='flex gap-1.5 items-center mb-6 justify-center p-[3px] border-1 border-[#58655b8e]  shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] w-26 rounded-2xl'>
                            <House color='#58655b' className='w-4 ' />
                            <h3 className='text-[13px] text-[#58655b] font-extralight'>About Us</h3>
                        </div>
                        <div className="z-10 text-[#353535]">
                            <h1 className='lg:text-[3.8rem] text-[2.5rem] leading-tight'><b className='text-[#58655b] font-medium'>Groomify </b>pet</h1>
                            <h1 className='lg:text-[3.8rem] text-[2.5rem] leading-tight'>grooming salon</h1>
                        </div>
                        <p className="mt-5 text-[#58655b] lg:text-[17px] text-[15px] lg:w-[60%] font-light mb-6 leading-normal">
                            For over 12 years, we’ve been dedicated to making pets look fabulous and feel loved. Because to us, your pet isn’t just a client – they’re family.
                        </p>
                    </div>
                    <div className='flex lg:w-[60%] w-[100%] justify-between items-center '>
                        <div>
                            <div className='text-[#58655b] text-left mb-5'>
                                <h1 className='text-[2.5rem] leading-tight'>12+</h1>
                                <p>Years experience</p>
                            </div>
                            <div className='text-[#58655b] text-left'>
                                <h1 className='text-[2.5rem] leading-tight'>100%</h1>
                                <p>Positive reviews</p>
                            </div>
                        </div>
                        <div>
                            <div className='text-[#58655b] text-left mb-5'>
                                <h1 className='text-[2.5rem] leading-tight'>456+</h1>
                                <p>Pampered pets</p>
                            </div>
                            <div className='text-[#58655b] text-left'>
                                <h1 className='text-[2.5rem] leading-tight'>1899L+</h1>
                                <p>Of shampoo used</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}