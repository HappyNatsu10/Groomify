import { Star, CornerUpRight } from 'lucide-react';


export default function Elegance() {
    return (
        <>
            <div className='relative flex justify-between lg:flex-row flex-col w-full  gap-2.5'>
                <div className='bg-[url("/eledog.avif")] lg:h-[419px] h-[350px] lg:w-[512px]  bg-cover bg-center rounded-2xl shadow-[0_7px_14px_0_rgba(0,0,0,0.04)] shadow-md'></div>
                <div className='p-[30px] border-1 border-[#58655b8e] rounded-2xl lg:w-[70%] shadow-[ 0 25px 50px -12px rgba(0,0,0,0.25)]'>
                    <div className='flex gap-1.5 items-center mb-2 z-10 justify-center p-[3px] shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] border-1 border-[#58655b8e] w-10 rounded-[5px]'>
                        <h3 className='text-[13px] text-[#58655b]' >$80</h3>
                    </div>
                    <h2 className='text-[32px]'>The Essential Elegance</h2>
                    <div className='my-4'>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Gentle bath pet-safe shampoo</p>
                        </div>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Nail trimming & filing</p>
                        </div>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Ear cleaning</p>
                        </div>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Paw pad moisturizing </p>
                        </div>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Fluff dry & brush-out</p>
                        </div>
                        <div className='flex gap-2.5 items-center mb-3'>
                            <Star color="#58655b" fill="#676e688e" strokeWidth={1.5} />
                            <p className='text-[#58655b]'>Complimentary bowtie or floral collar</p>
                        </div>
                    </div>
                    <button className='bg-[#58655b] p-2 flex gap-1.5 text-[#fff] rounded-xl '>
                        <CornerUpRight color='#fff' width={16} /> <p className='text-[#fff]'>Book Now</p>
                    </button>
                </div>
            </div>
        </>
    )
}