import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer-head">
        <div className="footer-nav">

        <div className="container">
            <ul className="footer-nav-list">

            <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
                <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
                </div>

                <address className="content">
                419 State 414 Rte
                Satur Main Road, Cinnakamanpatti,
                </address>
            </li>

            <li className="footer-nav-item flex">
                <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" className="footer-nav-link">8610583500</a>
            </li>

            <li className="footer-nav-item flex">
                <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
            </li>

            </ul>



        </div>

        </div>
        <div className="footer-bottom">

        <div className="container">
            <p className="copyright">
            Copyright &copy; <a href="#"></a> all rights reserved.
            </p>

        </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
