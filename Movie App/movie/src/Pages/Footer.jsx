import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';
function Footer( ) {

    const usfulLinks = [
      "Home",
      "About us",
      "Services",
      "Terms of service",
      "Privacy policy",
    ];

    const location = [
      "Dolorum optio tempore voluptas dignissimos cumque fuga quia",
      "Molestiae accusamus ea nulla omnis",
      "Ullamco quidem occaecati deleniti aut",
      "Dolorum optio tempore voluptas dignissimos cumque fuga quia",
      "Molestiae accusamus ea nulla omnis",
    ];

    return (
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <span>CINEMA</span>
                </a>
                <p>
                  Cras sed fames sit amet nibh libero, in gravida nulla. Nulla
                  vel sem at nibh
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#" className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#" className="linkedin">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {usfulLinks.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  {location.map((link) => (
                    <FooterNavItem key={link} name={link} />
                  ))}
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022 - US
                  <br />
                  United States
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email: info@example.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>S.Lencovsky</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    );
}

export default Footer; 