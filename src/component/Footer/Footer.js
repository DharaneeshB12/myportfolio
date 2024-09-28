import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (    
    <div className='footer'>
        <div className='footer-links'>
            <li><a href='#About' className='footlink'>About</a></li>
            <li><a href='#Skills' className='footlink'>Skills</a></li>
            {/* <li><a href='#Projects' className='footlink'>Projects</a></li> */}
            <li><a href='#Contact' className='footlink'>Contact</a></li>
        </div>
        <div className='social-media'>
        <h2 className='icon-text'>Get in touch</h2>
        <a href="https://github.com/Nithish432">
            <FontAwesomeIcon icon={faGithub} className="links github"/>
        </a>
        <a href="https://www.linkedin.com/in/dharaneesh-b-0ab95b190/">
             <FontAwesomeIcon icon={faLinkedin} className="links linkedin" />
        </a>
        {/* <a href="https://www.instagram.com/thenameisnithish/">
             <FontAwesomeIcon icon={faInstagram} className="links instagram" />
        </a> */}
        </div>
    </div>
    
  )
}

export default Footer