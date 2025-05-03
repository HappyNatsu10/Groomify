import { Heart } from "lucide-react";
import { testimonal } from "./data";
import Image from "next/image";

interface TestimonalCardProps {
    id: number;
    words: string;
    pfp: string ;
    owner: string;
}

export default function Testimonal() {
    return (
        <>
        <div>
            <div className='relative lg:h-[1200px]  w-[100%] bg-[url("/back.avif")] flex items-center justify-center flex-col'>
                <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

                <div className='my-35 lg:mx-35 mx-6 flex justify-center z-10 items-center flex-col'>
                    <div className='flex gap-1.5  items-center mb-6 z-10 justify-center p-[3px] border-1 border-[#58655b8e]  shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] w-32 rounded-2xl'>
                        <Heart color='#58655b' className='w-4' />
                        <h3 className='text-[13px] text-[#58655b] font-extralight'>Testimonal</h3>
                    </div>
                    <div className='text-center z-10'>
                        <h1 className='lg:text-[64px] text-[40px] font-medium leading-tight mb-5'>Some of our<br /> <b className='text-[#58655b] font-medium'>customers love</b></h1>
                    </div>
                    <div className="z-10">
                        <div className='z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                            {testimonal.map(({ id, words, pfp, owner }: TestimonalCardProps) => (
                                <div key={id} className=' bg-[#ffffff] border-1 border-[#58655b8e] shadow-inner rounded-xl p-6 flex flex-col  gap-2.5 max-w-[360px] '>
                                    <div className="">
                                        <h3 className='text-[16px] text-[#58655b] font-medium'>{words}</h3>
                                    </div>
                                    <div className='flex gap-1.5 '>
                                        <div className='w-8 h-8 border-1 border-[#58655b8e] rounded-[50%] '>
                                            <Image src={pfp} alt="alt" width={50} height={50} />
                                        </div>
                                        <div className='flex gap-1.5 items-center mb-2 z-10 justify-center'>
                                            <h3 className='text-[13px] text-[#58655b]' >{owner}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}