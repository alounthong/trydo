import React from 'react'
import PageHelmet from "../component/common/Helmet";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import TabThree from "../elements/tab/TabThree";
import { slideSlick } from "../page-demo/script";
import { Link } from 'react-router-dom';

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Business.',
        description: 'There are many variations of passages but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--31',
        category: '',
        title: 'Agency.',
        description: 'There are many variations of passages but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    
]


const Portfolio = () => {
    return (
        <>

            <PageHelmet pageTitle='The Units' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="3">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><Link className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</Link></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            {/* End Slider Area   */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                

                {/* Start Designer Portfolio  */}
                <div className="designer-portfolio-area ptb--120 bg_color--1">
                    <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                        <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">All Works</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                        <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
                    </div>
                </div>
                {/* End Designer Portfolio  */}

                

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
}

export default Portfolio;