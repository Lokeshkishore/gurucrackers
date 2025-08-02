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
                2/651, Ammam Town Ship,Mettamalai,Anuppankulam
                Satur(TK), Virudhunagar(DT) - 626203
                </address>
            </li>

            <li className="footer-nav-item flex">
                <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" className="footer-nav-link">8610583500</a>
            </li>

            {/* <li className="footer-nav-item flex">
                <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
            </li> */}

            </ul>
             <ul className="footer-nav-list">

            <li className="footer-nav-item">
                <h2 className="nav-title">Account Info</h2>
            </li>

            <li className="footer-nav-link">
               <p>Account Name: GURU SITHICKESH CRACKERS</p>
            </li>
              <li className="footer-nav-link">
               <p>Account Number: 521150050800182</p>
            </li>
            <li className="footer-nav-link">
               <p>Branch : 521  MEENAMPATTI</p>
            </li>
            <li className="footer-nav-link">
               <p>S.NO 539/1, SRI KRISHNA AVENUE</p>
            </li>
            <li className="footer-nav-link">
               <p>SATTUR MAIN ROAD</p>
            </li>
             <li className="footer-nav-link">
               <p>IFSC Code :TMBL0000521</p>
            </li> <li className="footer-nav-link">
               <p>MICR Code :626060312</p>
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
