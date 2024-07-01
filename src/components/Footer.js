// src/components/Footer.js

import React from 'react';
import '../Styles/Footer.css';
import facebookIcon from '../assets/Images/f.png';
import twitterIcon from '../assets/Images/x.jpeg';
import YoutubeIcon from '../assets/Images/y.png';
import instagramIcon from '../assets/Images/i.jpeg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/sitemap">Site Map</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www/facebook.com/thepage" target="_blank" rel="noopener noreferer">
                            <img src={facebookIcon} alt="Facebook" /><br></br><br></br>
                        </a>
                        <a href="https://www/twitter.com/thepage" target="_blank" rel="noopener noreferer">
                            <img src={twitterIcon} alt="Twitter" /><br></br><br></br>
                        </a>
                        <a href="https://www/youtube.com/thepage" target="_blank" rel="noopener noreferer">
                            <img src={YoutubeIcon} alt="Youtube" /><br></br><br></br>
                        </a>
                        <a href="https://www/instagram.com/thepage" target="_blank" rel="noopener noreferer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SUNSET SERENITY. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
