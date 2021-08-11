import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import BtnLink from '../BtnLink';
import {motion} from 'framer-motion'
import CardP from './CardP';



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


import('./portfolio.css')
const Portfolio = () => {

    
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <motion.div 
        variants={containerVariants} 
        initial='hidden'
        animate='show'
        className='portfolio'>

        
            <div className="ContainerCertificados container ">
                <div className="titulo">
                    <div className="img">
                        <img src="https://i.imgur.com/fvZAcuk.png" />
                    </div>
                    <div className="infoTitulo">
                        <h2>"TÉCNICO EN PROGRAMACÍON"</h2>
                        <h4>Escuela ProA Técnica</h4>
                        <p>San Francisco, Córdoba</p>
                        <p>2016-2022</p>
                    </div>
                </div>
                <div className="certificados">
                    <div className="img imgC">
                        <img src="https://i.imgur.com/gLbJDc8.png" />
                    </div>
                    <div className="infoCertificado ">
                        <h2>"CARRERA DE DESARROLLO FRONTEND"</h2>
                        <h4 className='mb-3'>CoderHouse</h4>

                        <a className='btn  '>Certificate</a>
                    </div>
                </div>
            </div>
            <div className="proyectos container ">
                <div className="row m-auto">
                    <motion.div 
                         initial={{y:"50px", opacity:0}}
                             animate={{y:"0px", opacity:1, transition: {duration:1, ease: "easeIn"}}}
                        className="col-md-6 mb-2 mt-5 ">
                       <CardP name='Netflix UI clone' img='https://i.imgur.com/ikOZKvM.jpg' description='Clone of Netflix with React and TMDB.' link='https://github.com/tobiaspossetto/netflix-ui-clone'/>
                    </motion.div>

                    <motion.div 
                         initial={{y:"50px", opacity:0}}
                             animate={{y:"0px", opacity:1, transition: {duration:2, ease: "easeIn"}}}
                        className="col-md-6 mb-2 mt-5 ">
                        <CardP name='Pizza Club' img='https://i.imgur.com/bwtT9PT.png'  description='Website with pure html and css for a restaurant.' link='https://github.com/tobiaspossetto/PizzaClub-CoderHouse'/>
                    </motion.div>

                    <motion.div 
                         initial={{y:"50px", opacity:0}}
                             animate={{y:"0px", opacity:1, transition: {duration:3, ease: "easeIn"}}}
                        className="col-md-6 mb-2 mt-5 ">
                         <CardP name='Agape App' img='https://i.imgur.com/D9zEo41.png'description='Ecommerce created with React and Firebase.' link='https://github.com/tobiaspossetto/coder-react-agape'/>
                    </motion.div>

                    <motion.div 
                         initial={{y:"50px", opacity:0}}
                             animate={{y:"0px", opacity:1, transition: {duration:4, ease: "easeIn"}}}
                        className="col-md-6 mb-2 mt-5 ">
                        <CardP name='Cafe' img='https://i.imgur.com/NpgsDMB.png' description='My first website designed for a bar.' link='https://github.com/tobiaspossetto/confiteria'/>
                    </motion.div>
                </div>
                 <BtnLink to='/' name='About Me'/>
            </div>

        </motion.div >
    )
}

export default Portfolio
