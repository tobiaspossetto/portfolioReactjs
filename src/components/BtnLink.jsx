import React from 'react'
import { Link } from 'react-router-dom'
import('./btnLink.css')
const BtnLink = (props) => {
    return (
        <div className='control'>

            <Link to={props.to} className='btnControl btn text-center'>{props.name}</Link>
        </div>
    )
}

export default BtnLink
