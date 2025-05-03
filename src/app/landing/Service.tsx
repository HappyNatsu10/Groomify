import { Dog } from 'lucide-react';
import Button from "../components/button";
import { service } from './data'


interface ServiceCardProps {
    id: number;
    heading: string;
    price: string;
    details: string;
}

export default function Services() {
    return (
        <div>
            <div id='service' className='relative lg:h-[1200px]  w-[100%] bg-[url("/back.avif")] flex items-center justify-center flex-col'>
                <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
                <div className='lg:mx-32 mx-6 my-15 flex justify-center items-center flex-col z-10 w-full h-ful'>
                    <div className='flex gap-1.5 z-10 items-center mb-6 justify-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] p-[3px] border-1 border-[#58655b8e] w-39 rounded-2xl'>
                        <Dog color='#58655b' className='w-4' />
                        <h3 className='text-[13px]  text-[#58655b] font-extralight'>À la Carte Services</h3>
                    </div>
                    <div className='text-center flex items-center flex-col z-10'>
                        <h1 className='lg:text-[64px] text-[2.5rem] font-medium leading-tight mb-5'> <b className='text-[#58655b] font-medium'>Customize</b> your<br /> pet’s perfect day</h1>
                        <p className='text-[#58655b] mb-12 lg:text-[17px] w-[80%] lg:w-[60%] text-[15px] font-medium'>Need something specific? Pick and choose from our à la carte services to create a grooming experience tailored just for your pet.</p>
                    </div>
                    <div className='z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                        {service.map(({ id, heading, price, details }: ServiceCardProps) => (
                        <div key={id} className=' rounded-xl p-6 flex flex-col items-center justify-center gap-2.5 max-w-[300px]'>
                            <div className='flex items-center justify-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] border-1 border-[#58655b8e] rounded-full w-12 h-12'>
                                <Dog color='#58655b'/>
                            </div>
                            <div className='flex gap-1.5 items-center'>
                                <h3 className='text-[22px] font-medium'>{heading}</h3>
                                <div className='flex gap-1.5 items-center shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] mb-2 z-10 justify-center p-[3px] border-1 border-[#58655b8e]  w-10 rounded-[5px]'>
                                    <h3 className='text-[13px] text-[#58655b]' >{price}</h3>
                                </div>
                            </div>
                            <div>
                                <p className='text-[15px] text-[#58655b] text-center'>{details}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <Button
                    color="#fff"
                    bgColor="#58655b"
                    hoverBgColor="#58655w"
                    hoverColor="#fff"
                    content="Book Appointment"
                    borderColor='none'
                    to="#"
                    />
                </div>
            </div>
        </div>
    )
}