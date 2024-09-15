import React from 'react';
import './Footer.css';  // External CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
               
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="/services/trademark">Trademark Registration</a></li>
                        <li><a href="/services/legal">Comprehensive Trademark Search</a></li>
                        <li><a href="/services/ip">Trademark Services</a></li>
                        <li><a href="/services/trademark">Trademark Classes</a></li>
                        <li><a href="/services/legal">Internal Trademark Registration</a></li>
                        <li><a href="/services/ip">File a review</a></li>
                        <li><a href="/services/trademark">Trademark Renewal</a></li>
                        <li><a href="/services/legal">Statement Of Use</a></li>
                        <li><a href="/services/ip">Office Action Response</a></li>
                        <li><a href="/services/ip">Browse Top 300 Companies</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Search</h3>
                    <ul>
                        <li><a href="/search/trademarks">Free Trademark Search</a></li>
                        <li><a href="/search/copyrights">Free Copyright Search</a></li>
                        <li><a href="/search/trademarks">Owner Search</a></li>
                        <li><a href="/search/copyrights">Attorney Ranking Search</a></li>
                        <li><a href="/search/copyrights">Domain Search</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Rankings</h3>
                    <ul>
                        <li><a href="/rankings/top-lawyers">Company Ranking</a></li>
                        <li><a href="/rankings/most-filed">Law Firms Ranking</a></li>
                        <li><a href="/search/copyrights">Attorney Ranking</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/resources/blog">Blog</a></li>
                        <li><a href="/resources/faqs">FAQs</a></li>
                        <li><a href="/resources/faqs">Become an Influencer</a></li>
                        <li><a href="/resources/faqs">Bulk Data</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/company/about">About Us</a></li>
                        <li><a href="/company/careers">Press Coverage</a></li>
                        <li><a href="/company/about">Terms and Conditions</a></li>
                        <li><a href="/company/careers">Privacy Policy</a></li>
                        <li><a href="/company/careers">Sitemap</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: customer.service@trademarkia.com</li>
                        <li>Call: +1(877) 794-9511</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-section">
                <div className="social-icons">
                    <a>Instagram <i class="fa-brands fa-instagram"></i></a>
                    <a>facebook <i class="fa-brands fa-facebook"></i></a>
                    <a>X <i class="fa-brands fa-x-twitter"></i></a>
                    <a>Linkedin <i class="fa-brands fa-linkedin"></i></a>
                    <a>Tik-Tok <i class="fa-brands fa-tiktok"></i></a>
                    <a>Youtube <i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;