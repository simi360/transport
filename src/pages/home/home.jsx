import { Fragment } from "react";

import Nav from "../../Components/nav/nav";
import CarouselSlider from "../../Components/carousel/carousel-slider";
import QuickLinks from "../../Components/quicklinks/quicklinks";
import Contact from "../../Components/contact/contact";
import Footer from "../../Components/footer/footer";

const Home = () => {
    return (
        <Fragment>
            <Nav />
            <CarouselSlider />
            <QuickLinks />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Home;