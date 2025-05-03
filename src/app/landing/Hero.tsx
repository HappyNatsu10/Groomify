import Button from "../components/button";



export default function Hero() {
    return(
        <>
        <div className="lg:mt-35 lg:mb-25 lg:mx-32 mx-6 my-20 flex lg:flex-row justify-between flex-col items-center gap-10 ')">
            <div className="lg:w-[50%] w-[100%]">
                <h1 className="lg:text-[5rem] text-[3.3rem] font-medium leading-tight">
                Treat your pet to a luxurious
                </h1>
                <h1 className="text-[#58655b] lg:text-[5rem] text-[3.3rem] font-medium leading-tight" >grooming experience</h1>
                <p className="mt-5 text-[#58655b] text-[17px] mb-6">Luxury pet grooming tailored to pamper your <br /> furry companion with care, style, and comfort.</p>
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
            <div className="relative lg:w-[480px] mx-6 lg:h-[650px] h-[500px] w-[380px] bg-[url('/herodog.png')] bg-cover bg-center rounded-[25px] ">
                <div className="w-20 h-20 absolute -top-4 -right-2 bg-[#fff] rotate-180 rounded-[50px] flex items-center justify-center">
                    <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[-3rem] absolute top-4  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                    <div className=" flex justify-center items-center w-15 h-15 rounded-[50%] bg-[#57655b] z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide rotate-180   w-10 h-10 lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </div>
                    <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[24px] absolute bottom-20  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                </div>
                <div className="w-30 h-20 absolute -bottom-4 -left-2 bg-[#fff] rounded-[50px] flex items-center justify-center">
                    <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[-3rem] absolute top-4  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                    <div className=" flex justify-center items-center w-15 h-15 rounded-[50%] bg-[#57655b] z-10">
                        <h1 className=" text-white text-[18px]">APPJ</h1>
                    </div>
                    <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[64px] absolute bottom-20  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                </div>
            </div>
        </div>
        </>
    )
}