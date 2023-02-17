import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footers'>
            <footer id='footer'>
            <div className='leftFooter'>
                <h4>DOWNLOAD OUR APA</h4>
                <p>Download App fo Android and IOS Mobile Phone</p>
            </div>

            <div className='midFooter'>
                <h1>E-com</h1>
                <p>HIGH QUALITY IS OUR FIRST PRIPORITY</p>
                <p>Copyright 2023 & Me Raviraj Singh</p>
            </div>

            <div className='rightFooter'>
                <h4>Follow Us</h4>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
                <a href="#">Facebook</a>
            </div>
            </footer>
        </div>
    )
}

export default Footer