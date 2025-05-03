import About from "./About";
import Gallery from "./Gallery";
import Hero from "./Hero";
import PackageHead from "./packagess/packageHead";
import Services from "./Service";
import Testimonal from "./Testimonals";
import Work from "./Work";
import Featured from "./Featured";
import Faqs from "./Faq";
import Contact from "./Contact";


export default function Landing() {
    return(
        <>
        <Hero />
        <About />
        <Featured />
        <Work />
        <PackageHead />
        <Services/>
        <Gallery />
        <Testimonal />
        <Faqs />
        <Contact />
        </>
    )
}