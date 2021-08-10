import React, { useEffect } from 'react'
import BtnLink from '../BtnLink'

import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom'


import('./skills.css')
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
const Skills = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (

        <motion.div 
        variants={containerVariants} 
        initial='hidden'
        animate='show'
        className='skillsBody'>
       

            <div className="containerSkill">
                <div className="white">

                    <ul>
                        <li className="li   html">HTML</li>
                        <li className="li css">CSS</li>
                        <li className="li bootstrap">BOOTSTRAP</li>
                        <li className="li materialui">MATERIAL UI</li>
                        <li className="li react">REACT</li>
                        <li className="li express">EXPRESS</li>
                        <li className="li mysql">MySQL</li>
                        <li className="li mongodb">MONGODB</li>
                    </ul>
                </div>
            </div>

            <BtnLink to='/portfolio' name='PORTFOLIO'/>
            </motion.div>
    )
}

export default Skills
