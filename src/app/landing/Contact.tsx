import { Handshake } from 'lucide-react';
import { CornerUpRight } from 'lucide-react';
// import MapComponent from './googleMap'



export default function Contact() {
    return (
        <>
            <div>
                <div className='relative lg:h-[1200px] flex items-center justify-center  w-[100%] bg-[url("/back.avif")] '>
                    <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
                    <div className='lg:mx-32 mx-6 my-20 h-[inherit] flex items-center gap-10 flex-col lg:flex-row'>
                        <div className=' flex justify-center  flex-col z-10 lg:w-[50%] w-full h-full'>
                            <div className='flex gap-1.5 z-10 items-center mb-6 justify-center p-[3px] shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] border-1 border-[#92929275] w-39 rounded-2xl'>
                                <Handshake color='#58655b' className='w-4' />
                                <h3 className='text-[13px]'>Contact Us</h3>
                            </div>
                            <div className='z-10'>
                                <h1 className='lg:text-[64px] text-[2.5rem] font-medium leading-tight mb-5'>How to<b className='text-[#58655b] font-medium'> get in</b><br /> <b className='text-[#58655b] font-medium'>touch</b> with us</h1>
                                <p className='text-[#58655b] lg:text-[17px] text-[18px] font-medium'>Have a question? We&apos;re always here to help.</p>
                            </div>
                            <div className='lg:h-[450px] h-[250px] w-full lg:w-[80%] mt-12 flex justify-center items-center rounded-[24px]  border-5  border-[#ffffff60]  bg-[#fff]  shadow-md  will-change-transform' style={{ boxShadow: '0 6px 12px #fffff80' }}>
                                <h1 className='text-center text-[45px] text-[#353535]'>Map</h1>
                            </div>
                        </div>
                        <div className='z-10'>
                            <div className=' flex flex-col gap-3.5'>
                                <div className='bg-[#fff] p-[30px] border-1 border-[#58655b8e] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 lg:w-[550px] w-full'>
                                    <div className='flex gap-1.5 items-center mb-6 z-10 justify-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] p-[3px] border-1 border-[#92929275] w-15 h-15 rounded-[50%]'>
                                        <h3 className='text-[13px] text-[#58655b]' >$80</h3>
                                    </div>
                                    <h2 className='text-[32px] text-[#353535]'>Book Online</h2>
                                    <p className='text-[#58655b] mb-6'>Choose your date and book online now.</p>
                                    <button className='bg-[#58655b] p-1.5 flex items-center gap-1.5 z-10 text-[#fff] text-[14px] rounded-xl '>
                                        <CornerUpRight color='#fff' width={12} /> <p className='text-[#fff]'>Book Now</p>
                                    </button>
                                </div>

                                <div className='bg-[#fff] p-[30px] border-1 border-[#58655b8e] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 lg:w-[550px] w-full'>
                                    <div className='flex gap-1.5 items-center mb-6 z-10 justify-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] p-[3px] border-1 border-[#92929275] w-15 h-15 rounded-[50%]'>
                                        <h3 className='text-[13px] text-[#58655b]' >$80</h3>
                                    </div>
                                    <h2 className='text-[32px] text-[#353535]'>Book Online</h2>
                                    <p className='text-[#58655b] mb-6'>Choose your date and book online now.</p>
                                    <button className='bg-[#58655b] p-1.5 flex items-center gap-1.5 z-10 text-[#fff] text-[14px] rounded-xl '>
                                        <CornerUpRight color='#fff' width={12} /> <p className='text-[#fff]'>Book Now</p>
                                    </button>
                                </div>

                                <div className='bg-[#fff] p-[30px] border-1 border-[#58655b8e] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 lg:w-[550px] w-full'>
                                    <div className='flex gap-1.5 items-center mb-6 z-10 justify-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] p-[3px] border-1 border-[#92929275] w-15 h-15 rounded-[50%]'>
                                        <h3 className='text-[13px] text-[#58655b]' >$80</h3>
                                    </div>
                                    <h2 className='text-[32px] text-[#353535]'>Book Online</h2>
                                    <p className='text-[#58655b] mb-6'>Choose your date and book online now.</p>
                                    <button className='bg-[#58655b] p-1.5 flex items-center gap-1.5 z-10 text-[#fff] text-[14px] rounded-xl '>
                                        <CornerUpRight color='#fff' width={12} /> <p className='text-[#fff]'>Book Now</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}