import React, { Component, useState, useEffect } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import w5 from '../src/assets/w5.png'
import pimg from '../src/assets/p-img.jpeg'
import devimg from '../src/assets/dev-img.png'
import desimg from '../src/assets/pen-design.png'
import desimg2 from '../src/assets/expertise-des.webp'
import despro from '../src/assets/recent-work-design.png'
import proj1 from '../src/assets/comforty.png'
import proj2 from '../src/assets/nabil-masala-mart.png'
import proj3 from '../src/assets/kaimganj-perfumes.png'
import proj4 from '../src/assets/opt-care.png'
import proj5 from '../src/assets/movie-world.png'
import proj6 from '../src/assets/weather-app.png'
import bgabtimg from '../src/assets/bg-abt-img.png'
import abtimg from '../src/assets/port-img.png'
import bellimg from '../src/assets/bell-abt-me.png'
import contactimg from '../src/assets/contact-human-img.png'
import { FaHtml5 } from "react-icons/fa"; import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";
import { CiHeadphones } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import des1 from '../src/assets/expertise-des.webp'
import resume from '../src/assets/files/Resume.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Meghani_Hamza_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>
            <Header />
            <Container className='d-flex align-items-center height-name-sec' id='home' >
                <Row className='w-100'>
                    <Col lg="6" className='d-flex flex-column justify-content-center'>
                        <h1 className='tit-welcome'>WELCOME</h1>
                        <p className='hey-name'>Hey I'm👋Meghani Hamza</p>
                        <p className='position-text'>I am a </p>
                        <Button href='#resume' variant="outline-success rounded-pill resume-btn">My Resume</Button>{' '}

                    </Col>

                    <Col lg="6" className='d-flex justify-content-center align-items-center text-center'>
                        <img src={w5} className='img-fluid bg-img-1' />
                        <img src={pimg} className='img-fluid port-img-1' />

                    </Col>
                </Row>
            </Container>
            <Container className='expertise-sec p-xxl-5 p-3 pb-1 rounded-5' data-aos="fade-up">
                <h1 className='expertise-title'>MY EXPERTISE</h1>
                <h1 className='expertise-tit-2 text-center'>What I Do</h1>
                <p className='text-center sec-break-expertise'>___ __________</p>
                <Row className='p-xxl-5 p-3'>
                    <Col lg="6" className='desc-web-dev'>
                        <img src={devimg} className='img-fluid web-dev-img' />
                        <h1 className='tit-web-dev-expertise'>Website Development</h1>
                        <p className='desc-web-dev-text'>"A dedicated web developer with expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, and React. Proficient in ES6, I write clean and efficient code. I specialize in building responsive and dynamic web applications, blending technical skills with creative design for visually appealing and highly functional websites. Committed to staying current with industry trends and continuously improving my skill set to deliver top-notch web solutions."
                        </p>
                    </Col>
                    <Col lg="6" className='mx-0'>
                        <img src={desimg} className='img-fluid web-dev-img' />
                        <h1 className='tit-web-des-expertise'>Website Design</h1>
                        <p className='desc-web-dev-text'>"Specializing in web design with a focus on responsive design, I combine expertise in HTML, CSS, and JavaScript with frameworks like Bootstrap and React. I craft dynamic, visually engaging websites that adapt seamlessly to all devices. My approach prioritizes optimal functionality and accessibility, using strategic color combinations to enhance aesthetics and usability for a visually appealing, user-friendly experience. Committed to staying current with design trends."</p>
                    </Col>

                </Row>
            </Container>

            <Container className='projects-sec mt-4' id='projects' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={despro} className='img-fluid proj-des-img' />
                <h1 className='projects-title'>MY PROJECTS</h1>
                <p className='tagline-projects'>Explore My Portfolio: <br /> Showcasing Innovative Digital Creations</p>
                <Row>
                    <Col lg='4' className='mt-xxl-0 mt-3' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='image-proj-container'>
                            <img src={proj1} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> COMFORTY </p>
                                    <p className='desc-project'>Comforty is a responsive website built with HTML, CSS, JavaScript, jQuery, and Bootstrap. It features smooth slideshows using Owl Carousel and provides a seamless experience across all devices. The design emphasizes user-friendliness and modern aesthetics.</p>
                                    <Button href='https://dev-hamza7977.github.io/Comforty-proj/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/Comforty-proj' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-xxl-0 mt-3' data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='image-proj-container'>
                            <img src={proj2} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> NABIL MASALA MART </p>
                                    <p className='desc-project'>Nabil Masala Mart is a sleek, responsive website crafted using HTML, CSS, JavaScript, jQuery, and Bootstrap. It showcases a diverse array of spices and culinary products with smooth navigation, engaging Owl Carousel displays.</p>
                                    <Button href='https://www.nabilmasalamart.in/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/nabil-masala-mart' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-xxl-0 mt-3' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='image-proj-container'>
                            <img src={proj3} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> KAIMGANJ PERFUMES </p>
                                    <p className='desc-project'>Kaimganj Perfumes offers a sleek, multilingual website with HTML, CSS, JavaScript, jQuery, and Bootstrap. It elegantly showcases perfumes in both English and Arabic, enabling seamless browsing, searching, and filtering for a user-friendly shopping experience.</p>
                                    <Button href='https://kaimganjperfumes.in/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/kaimganj-perfumes' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-3'>
                        <div className='image-proj-container' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={proj4} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> OPT-CARE </p>
                                    <p className='desc-project'>
                                        Opt Care is a modern website built with HTML, CSS, JavaScript, jQuery, Bootstrap, the data-aos library, and Owl Carousel. It features smooth animations and transitions, a responsive design for all devices, and dynamic content display with Owl Carousel.
                                    </p>
                                    <Button href='https://dev-hamza7977.github.io/opt-care/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/opt-care' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-3'>
                        <div className='image-proj-container' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={proj5} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> MOVIE WORLD </p>
                                    <p className='desc-project'>Movie World is a dynamic web application developed using React.js, JSX, CSS, and APIs. It seamlessly integrates multiple APIs to fetch and display comprehensive movie information, ensuring a responsive and engaging user experience.</p>
                                    <Button href='https://moviesworld-ww.netlify.app/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/movies-world' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-3'>
                        <div className='image-proj-container' data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={proj6} className='img-fluid p-3 proj-img' />
                            <div className="middle">
                                <div class="overlay">
                                    <p className='text-center overlay-title'> WEATHER APP </p>
                                    <p className='desc-project'>The Weather App is a user-friendly application created with React.js, JSX, CSS, and APIs like OpenWeatherMap. It provides real-time weather updates based on user location or input. The app features a clean interface. </p>
                                    <Button href='https://weather-app-ww.netlify.app/' variant="outline-success">LIVE LINK</Button>{' '}
                                    <Button href='https://github.com/dev-hamza7977/weather-app' variant="outline-success">GITHUB</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >

            <Container className='abt-me-sec' id='abtme' data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <Row className='px-xxl-5'>
                    <Col lg='6' className='px-xxl-5'>
                        <img src={bgabtimg} className='img-fluid abt-bg-img p-3' />
                        <img src={abtimg} className='img-fluid abt-img p-3' />
                    </Col>
                    <Col lg='6' className='px-xxl-5' >
                        <h1 className='abt-me-title'>ABOUT ME</h1>
                        <h1 className='sub-title-abt'>Turning Ideas into Reality with Code and Creativity</h1>
                        <p className='desc-abt-me'>Hey, my name is Meghani Hamza. As a frontend developer, I specialize in crafting engaging user interfaces and seamless experiences using a robust skill set. Proficient in HTML, CSS, JavaScript, and jQuery, I leverage these core technologies to build responsive and visually appealing websites. My expertise extends to frameworks like Bootstrap for rapid development and React.js for building interactive and dynamic web applications, ensuring scalable and efficient solutions.</p>
                        <div className='d-flex justify-content-between' >
                            <FaHtml5 className='fa-abt-me  fa-html' />
                            <IoLogoCss3 className='fa-abt-me fa-css' />
                            <TbBrandJavascript className='fa-abt-me fa-js' />
                            <DiBootstrap className='fa-abt-me fa-bootstrap' />
                            <IoLogoReact className='fa-abt-me fa-react' />
                        </div>
                        <img src={bellimg} className='img-fluid bell-img' />
                    </Col>
                </Row>
            </Container>

            <Container className='resume-sec mt-4 mt-xxl-0 px-xxl-5' id='resume' data-aos="fade-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3 px-xxl-3 px-5 btn-panel-resume border-none"
                    fill
                >
                    <Tab eventKey="home" className='' title="BIOGRAPHY - 01"
                    >
                        <Row className='px-xxl-5'>
                            <Col lg='6'>
                                <h1 className='name-resume-tit'><MdDriveFileRenameOutline className='fa-resume-1' />
                                    <span className='name-resume-txt'> MEGHANI HAMZA </span> </h1>
                                <h1 className='number-resume-tit'><FaMobile className='fa-resume-1' />
                                    <span className='number-resume-txt'> +91 7977027359 </span> </h1>
                                <h1 className='address-resume-tit'><FaMapLocationDot className='fa-resume-1' />
                                    <span className='address-resume-txt'> MUMBAI </span> </h1>

                            </Col>
                            <Col lg='6'>
                                <h1 className='email-resume-tit'><FaGithub className='fa-resume-2 fa-github' />
                                    <span className='github-resume-txt'><a href='https://github.com/dev-hamza7977'> https://github.com/dev-hamza7977 </a></span> </h1>
                                <h1 className='email-resume-tit'><FaLinkedin className='fa-resume-2 fa-linkedin' />
                                    <span className='linkedin-resume-txt text-justify'><a href='https://www.linkedin.com/in/hamza-meghani-7a6ba11a0'> https://www.linkedin.com/in/hamza-meghani-7a6ba11a0 </a></span> </h1>
                                <h1 className='email-resume-tit'><SiGmail className='fa-resume-2 fa-email' />
                                    <span className='email-resume-txt'> <a href="mailto:meghani9869@gmail.com">meghani9869@gmail.com</a></span> </h1>

                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="SKILLS - 02">
                        <Row className='pb-0'>
                            <Col lg='6'>
                                <div className='d-flex align-items-center'>
                                    <FaHtml5 className='fa-skills  fa-html' />
                                    <p className='skills-tit-html'>HTML</p> <br />
                                    <ProgressBar variant="danger" className='progress-bar-skills' animated now={99} />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <IoLogoCss3 className='fa-skills fa-css' />
                                    <p className='skills-tit-css'>CSS</p> <br />
                                    <ProgressBar variant="info-emphasis" className='progress-bar-skills-css' animated now={95} />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <TbBrandJavascript className='fa-skills fa-js' />
                                    <p className='skills-tit-js'>JAVASCRIPT</p> <br />
                                    <ProgressBar variant="warning" className='progress-bar-skills-js' animated now={89} />
                                </div>
                            </Col>
                            <Col lg='6'>
                                <div className='d-flex align-items-center'>
                                    <SiJquery className='fa-skills fa-react' /><br />
                                    <p className='skills-tit-jquery'>JQUERY</p> <br />
                                    <ProgressBar variant="info-emphasis" className='progress-bar-skills-jquery' animated now={85} />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <DiBootstrap className='fa-skills fa-bootstrap' /><br />
                                    <p className='skills-tit-bootstrap'>BOOTSTRAP</p> <br />
                                    <ProgressBar className='progress-bar-skills-bootstrap' animated now={95} />
                                </div>
                                <div className='d-flex align-items-center'>
                                    <IoLogoReact className='fa-skills fa-react' /><br />
                                    <p className='skills-tit-react'>REACT.js</p> <br />
                                    <ProgressBar bgcolor="#99ccff" className='progress-bar-skills-react' animated now={95} />
                                </div>

                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="longer-tab" title="EXPERIENCE - 03">
                        <Row>
                            <Col lg='6'>
                                <div className='div-experience-1'>
                                    <h1 className='tit-experience'>FRONTEND WEB TRAINEE</h1>
                                    <h1 className='sub-tit-education'>HEURISTIC ACADEMY</h1>
                                    <h1 className='sub-tit-durations'>6 MONTHS</h1>
                                    <p className='desc-experience-1' >During my internship at Heuristic Academy as a Frontend Trainee, I gained hands-on experience in HTML, CSS, JavaScript, and frameworks like Bootstrap and React.js, as well as jQuery. I contributed to various projects, creating engaging and responsive web applications.</p>
                                </div>
                            </Col>
                            <Col lg='6'>
                                <div className='div-experience-2'>
                                    <h1 className='tit-experience-2'>FRONTEND WEB DEVELOPER</h1>
                                    <h1 className='sub-tit-education'>ZIARAT PERFUMES</h1>
                                    <h1 className='sub-tit-durations-2'>1.5 YEARS</h1>
                                    <p className='desc-experience-1' >Worked as a frontend web developer at Ziarat Perfumes for 1.5 years, gaining experience in creating responsive web applications. Additionally, worked as a freelancer, delivering tailored web solutions to various clients, enhancing my skills in frontend development.</p>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>

            <Container className='contact-sec px-xxl-0 px-4' id='contact' data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <Row className='px-xxl-5 mt-4'>
                    <Col lg='6' className='contact-hire-sec' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className='tit-hire'>I'm <span className='available-txt'>Available</span> For <br /> Freelance Work Also</h1>
                        <Button href="https://wa.me/+917977027359?text=Hey Meghani Hamza, We're looking for a freelance/full-time web developer. Interested? Ref: Your portfolio." variant="outline-primary rounded-pill mt-4 hire-btn">HIRE ME NOW</Button> <br />
                        <img src={contactimg} className='img-fluid' />

                    </Col>
                    <Col lg='6' className='contact-number-sec' data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className='text-center tit-contact'>Let's Connect and Collaborate</h1>
                        <div className='d-flex contact-flex align-items-center mt-5 px-xxl-5'>
                            <FaHeadphonesAlt className='fa-contact' />
                            <p className='contact-details-txt'>+91 7977027359</p>
                        </div>
                        <div className='d-flex contact-flex align-items-center mt-5 px-xxl-5'>
                            <HiOutlineMailOpen className='fa-contact fa-contact-mail' />
                            <p className='contact-details-txt-mail'>meghani9869@gmail.com</p>
                        </div>
                        <div className='d-flex contact-flex  mt-5 px-xxl-5'>
                            <FaGithub className='fa-contact fa-contact-github' />
                            <p className='contact-details-txt-github'> https://github.com/dev-hamza7977</p>
                        </div>
                        <div className='d-flex contact-flex mt-xxl-5 mt-3  px-xxl-5'>
                            <FaLinkedin className='fa-contact fa-contact-linkedin' />
                            <p className='contact-details-txt-linkedin'> https://www.linkedin.com/in/<br />hamza-meghani-7a6ba11a0</p>
                        </div>
                        <div className='d-flex mt-2 px-xxl-5'>
                            <Button
                                variant="info"
                                onClick={handleDownload}
                                className='w-100 download-resume-btn'
                                size='lg'
                            >
                                Download My Resume ↓
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />

        </>
    )

}
export default Home