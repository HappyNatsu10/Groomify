import { WandSparkles } from 'lucide-react';


export default function Gallery(){
    return(
        <>
        <div id='gallery' className='my-35 lg:mx-35 mx-6 flex justify-center items-center flex-col'>
            <div className='flex gap-1.5  items-center mb-6 z-10 justify-center p-[3px] border-1 border-[#58655b8e]  shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] w-33 rounded-2xl'>
                <WandSparkles  color='#58655b' className='w-4' />
                <h3 className='text-[13px] text-[#58655b] font-extralight'>Transformations</h3>
            </div>
            <div className='text-center z-10'>
                <h1 className='text-[40px] lg:text-[64px]  font-medium leading-tight mb-5'>Smiles, styles,<br />and <b className='text-[#58655b] font-medium'>happy tails</b></h1>
                <p className='text-[#58655b] mb-12 text-[17px]'>Take a peek at some of our recent transformations. From <br /> fluffy pups to sleek kitties, every pet leaves looking like a star.</p>
            </div>
            <div className='h-75 w-full border-5 border-[#58655b8e] '>

            </div>
        </div>
        </>
    )
}