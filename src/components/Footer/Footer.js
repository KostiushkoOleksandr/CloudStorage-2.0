import React from "react";


const Footer = () => {
    return (
        <body>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <footer>
            <div className="footer-content">
                <h3>cloud storage</h3>
                <p>
                    Cloud file hosting for organized data storage!
                </p>
                <ul className="socials">
                    <li>
                        <a href="https://www.instagram.com/alexkost_/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/A1exKost">
                            <i className="fa fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://alexkost.netlify.app/">
                            <i className="fa fa-book"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>
                    Cloud Storage &copy;2022-2023. designed by <span>Oleksandr Kostiushko</span>
                </p>
            </div>
        </footer>
        </body>
    );
};

export default Footer;