import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { FaLinkedin,FaInstagramSquare,FaTwitterSquare, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

import headerImg from '../../img/Artboard 1.png'

const Header = () =>{

    return(
        <header className="header" id='1'>
            <div className='header__desc' >
            <h1>everything is connected  with <span>tech.az</span> </h1>
            <p> a technology media and event platforms that  brings international experience and practice  to the local startup & technology ecosystem</p>
            <a href=' https://www.facebook.com/www.tech.az'> <span>learn more</span> <IoIosArrowForward className='iconArrow'/> </a>
            </div>
            <div className='header__icons'>
                <a href=' https://www.facebook.com/www.tech.az' target='blank'> <FaFacebookSquare className='icon'/></a>
                <a href='https://www.linkedin.com/company/tech-az/' target='blank'>  <FaLinkedin className='icon'/></a>
                <a href='https://twitter.com/Techaz5' target='blank'>  <FaTwitterSquare className='icon'/></a>
                <a href='https://www.instagram.com/tech.azerbaijan/' target='blank'>  <FaInstagramSquare className='icon'/></a>
                <a href='https://www.youtube.com/channel/UCp5hYFUzfP3_hw29S8dGlQg' target='blank'>  <FaYoutubeSquare className='icon'/></a>
            
            </div>
        
            <img src={headerImg} alt='Slogan' />

            <a href='#1' className='arrowIcon'><FiChevronUp/> </a>
        </header>
    )
}


export default Header