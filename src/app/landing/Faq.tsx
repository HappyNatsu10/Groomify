import { CircleHelp } from "lucide-react"
import { faq } from "./data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faqs() {
    return (
        <>
            <div id="faq" className="my-35 lg:mx-35 mx-6 flex justify-between lg:flex-row flex-col-reverse gap-10 items-center">
                <div>
                    <div className="relative lg:w-[490px] lg:h-[650px] h-[450px] w-[400px] bg-[url('/faqdog.avif')] bg-cover bg-center rounded-[25px] ">
                        <div className="w-20 h-20 absolute -top-4 -right-2 bg-[#fff] rotate-180 rounded-[50px] flex items-center justify-center">
                            <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[-3rem] absolute top-4  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                            <div className=" flex justify-center items-center w-15 h-15 rounded-[50%] bg-[#57655b] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide rotate-180 w-9 h-9 lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>                            
                            </div>
                            <div style={{ boxShadow: '-24px 24px #fff', aspectRatio: '1 / 1' }} className="w-12 h-12 flex-none right-[24px] absolute bottom-20  shadow-outline z-5 rounded-[50px] overflow-visible bg-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className='mx-6 block w-[100%]'>
                    <div className='flex gap-1.5  items-center mb-6 z-8 justify-center p-[3px] border-1 border-[#58655b8e] shadow-[inset_0_2px_10px_rgba(87,101,91,0.3)] w-20 rounded-2xl'>
                        <CircleHelp color='#58655b' className='w-4' />
                        <h3 className='text-[13px] text-[#58655b] font-extralight'>FAQs</h3>
                    </div>
                    <div className=''>
                        <h1 className='text-[2.5rem] lg:text-[64px] font-medium leading-tight mb-5'>Frequently<br />asked <b className='text-[#57655b] font-medium'>questions</b></h1>
                        <div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faq.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-[#353535] text-[19px] font-semibold[&[data-state=open]]:bg-gray-100">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 py-4 text-[#353535] text-[18px]">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}