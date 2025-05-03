import { PawPrint } from 'lucide-react'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <div>
                <div className="my-8 lg:mx-[auto] mx-6 flex justify-between flex-col lg:flex-row items-center bg-transparent z-100 lg:w-[80%] ">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#58655b] -rotate-45" >
                            <PawPrint color='#ffff' />
                        </div>
                        <h1 className="text-xl font-bold text-[#353535]">Groomify</h1>
                    </div>
                    <nav className='lg:flex justify-between gap-4.5 font-medium text-[#606060] hidden'>
                        <Link href="#About.tsx" >About</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Gallery</Link>
                        <Link href="#">FAQs</Link>
                    </nav>
                </div>
                <div className='my-8 lg:mx-[auto] mx-6 flex justify-between flex-col lg:flex-row items-center'>
                    <p className='font-medium text-[13px] text-[#606060]'>Built in Next.js by Peter © 2025 All rights reserved.</p>
                    <div className='flex gap-2.5 font-medium text-[#606060]'>
                        <a href="">Privacy Policy</a>
                        <a href="">Salon Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}