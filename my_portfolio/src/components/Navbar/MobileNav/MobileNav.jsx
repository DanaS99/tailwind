import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile_menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile_menu_container'>
                    <h2 className='logo'>My Portfolio</h2>
                    <ul>
                        <li><a href="#home" className='menu_item'>Home</a></li>
                        <li><a href="#skills" className='menu_item'>Skills</a></li>
                        <li><a href="#work-experience" className='menu_item'>Work Experience</a></li>
                        <li><a href="#contact" className='menu_item'>Contact Me</a></li>
                        <button className='contact_btn'>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
