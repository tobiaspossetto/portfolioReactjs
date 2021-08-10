import React from 'react'
import BtnLink from '../BtnLink'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'
import {motion} from 'framer-motion'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import('./aboutme.css')

const containerVariants={
    hidden: {
        opacity: 0,
        y: "50vh"

    },
    show:{
        opacity: 1,
        y:0,
        transition: {
            type: "spring"
        }
    }
}

const AboutMe = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <motion.div 
        variants={containerVariants} 
        initial='hidden'
        animate='show'
        className='aboutmeBody'>
            <div className='about container mb-5'>

              

                    <motion.div 
                    initial={{x:"-50px"}}
                    animate={{x:"50px", transition: {duration:3, ease: "easeIn", repeat: Infinity, repeatType: "reverse"}}}
                    className='img '>
                        <img src='https://i.imgur.com/25Up8qP.png' />

                    </motion.div>
                    <div className='info c'>
                        <div>

                             <h1>I'm Tobías</h1>
                            <h3>Web developer specialized in FrontEnd.
                            Code and coffee lover.</h3>
                        </div>
                        <a className='btn '>Download CV</a>
                    </div>
                </div>

                <div className="contact">
            <div className="contactMeans container">
                    <div className="row m-auto">
                        <a rel="noreferrer"  target="_blank" href='https://api.whatsapp.com/send?phone=549356465-6612' className=" social col-md-5 mb-2 mt-2  mr-auto ml-auto">
                                <div className="d-flex align-items-center ">

                                    <IoIcons.IoLogoWhatsapp size={30} color='black'/>
                                    <p>WhatsApp</p>
                                </div>
                               
                        </a>

                        <a rel="noreferrer"  target="_blank" href='https://www.instagram.com/tobias_possetto/?hl=es-la' className=" social col-md-5 mb-2 mt-2  mr-auto ml-auto">
                                <div className="d-flex align-items-center ">

                                     <AiIcons.AiFillInstagram size={30} color='black'/>
                                     <p>Instagram</p>
                                </div>
                                
                        </a>

                        <a rel="noreferrer"  target="_blank" href='https://www.linkedin.com/in/tob%C3%ADas-possetto-161270186/' className=" social col-md-5 mb-2 mt-2  mr-auto ml-auto">
                                <div className="d-flex align-items-center ">

                                  <AiIcons.AiFillLinkedin size={30} color='black'/>
                                  <p>Linkedin</p>
                                </div>
                                
                        </a>
                        <a rel="noreferrer"  target="_blank" href='mailto:tobigpossetto@gmail.com' className=" social col-md-5 mb-2 mt-2  mr-auto ml-auto">
                                <div className="d-flex align-items-center ">

                                <SiIcons.SiGmail size={30} color='black'/>
                                <p>Gmail</p>
                                </div>
                                
                        </a>
                                   
                                 
                                    
                    </div>
            </div>
        </div>


                <BtnLink to='/skills' name='skills'/>

           
        </motion.div >
    )
}

export default AboutMe
