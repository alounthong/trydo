import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import About from "../component/HomeLayout/homeOne/About";
import BlogContent from "../elements/blog/BlogContent";
import Helmet from "../component/common/Helmet";

class Services extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment> 
                <Helmet pageTitle="Main Demo" />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                
                {/* Start About Area */}
                <div className="about-area about-position-top pb--120">
                    <About />
                </div>
                {/* End About Area */}

                <div className="service-area ptb--80  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>


                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <div className="bg_color--5">
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Services;