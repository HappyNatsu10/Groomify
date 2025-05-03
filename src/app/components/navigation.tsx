import Button from './button'
import { PawPrint } from 'lucide-react'

export default function Navigation() {
    return(
        <div className='top-0 left-0 right-0 fixed bg-white/80 backdrop-blur-[7px] z-100 w-full'>
            <div className="my-3 lg:mx-[auto] mx-6 flex justify-between items-center   z-100 lg:w-[80%]  w-[100%] ">
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#58655b] -rotate-45" >
                        <PawPrint color='#ffff' />
                    </div>
                    <h1 className="text-xl font-bold text-[#353535]">Groomify</h1>
                </div>
                <nav className='lg:flex justify-between gap-4.5 font-medium text-[#606060] hidden'>
                    <a href="#about" >About</a>
                    <a href="#service">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#faq">FAQs</a>
                </nav>
                <div className='lg:block hidden'>
                    <Button
                    color="#fff"
                    bgColor="#58655b"
                    hoverBgColor="#58655w"
                    hoverColor="#fff"
                    content="Book Appointment"
                    borderColor='none'
                    />
                </div>
            </div>
        </div>
    )
}