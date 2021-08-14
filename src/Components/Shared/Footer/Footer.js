import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Response" , link: "/emergency"},
        {name: "Support" , link: "/support"},
        {name: "Delivery before dateline" , link: "/personal-treatment"},
        {name: "Product Extraction" , link: "/tooth-extract"},
        {name: "Support" , link: "/support"},
    ]
    const ourAddress = [
        {name: "Bangladesh - 1207 Dhaka" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Response" , link: "/emergency"},
        {name: "Support" , link: "/support"},
        {name: "Advice for proper model" , link: "/proper-model"},
        {name: "Immediately enquiry" , link: "/Immediately-enquiry"},
        {name: "Support" , link: "/support"},
        {name: "Support" , link: "/support"},
        {name: "Support" , link: "/support"}
    ]
    const services = [
        {name: "Emergency Response" , link: "/emergency"},
        {name: "Support" , link: "/support"},
        {name: "Advice for proper model" , link: "/proper-model"},
        {name: "Immediately enquiry" , link: "/Immediately-enquiry"},
        {name: "Support" , link: "/support"},
        {name: "Support" , link: "/support"},
        {name: "Support" , link: "/support"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Author" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            {/* <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li> */}
                            {/* <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li> */}
                            {/* <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li> */}
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+8801772536411</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;