import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import mainlogo from "../../assets/full-size-logo.png";
import "./HeroFooter.css";
import { useNavigate } from "react-router-dom";

const HeroFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-light border-top pt-4">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={3} className="text-md-start mb-3 mb-lg-0">
            <ul className="list-unstyled">
              <li>
                <img
                  src={mainlogo}
                  width="95"
                  height="110"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </li>
              <li>
                <Button
                  className="footer-column-three-btn-book m-1 shadow border"
                  onClick={() => navigate("/bike-booking")}
                >
                  Book Now
                </Button>
              </li>
              <li className="p-1">
                <i class="fa-solid fa-envelope fa-icon-footer"></i>
                <a
                  href="mailto:speedrentbikes@gmail.com"
                  className="footer-quick-link-address"
                >
                  speedrentbikes@gmail.com
                </a>
              </li>
              <li className="p-1">
                <i class="fa-solid fa-location-dot fa-icon-footer"></i>
                <a
                  href="https://maps.app.goo.gl/6rgPF5kxJ166jvfQ7"
                  className="footer-quick-link-address"
                >
                  Plot No 280 Starcity Road Near RTO-II, Patia, Bhubaneswar,
                  Odisha 751024.
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} lg={3} className="text-md-start mb-3 mb-lg-0">
            <ul className="list-unstyled">
              <li>
                <h4 className="footer-column-header">
                  <u>Quick Links</u>
                </h4>
              </li>
              <li className="p-1">
                <a href="/bike-booking" className="footer-quick-link">
                  <i class="fa-solid fa-reply fa-arrow-footer me-2"></i>
                  Bike Rental in Bhubaneswar
                </a>
              </li>
              <li className="p-1">
                <a href="/bike-booking" className="footer-quick-link">
                  <i class="fa-solid fa-reply fa-arrow-footer me-2"></i>
                  Bike Rental in Cuttack
                </a>
              </li>
              <li className="p-1">
                <a href="/bike-booking" className="footer-quick-link">
                  <i class="fa-solid fa-reply fa-arrow-footer me-2"></i>
                  Bike Rental in Bangalore
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} lg={3} className="text-md-start mb-3 mb-lg-0">
            <ul className="list-unstyled">
              <li>
                <h4 className="footer-column-header">
                  <u>Terms & Policies</u>
                </h4>
              </li>
              <li className="p-1">
                <a href="/company-policy" className="footer-quick-link">
                  <i class="fa-solid fa-file-lines fa-icon-footer"></i>
                  Privacy Policy
                </a>
              </li>
              <li className="p-1">
                <a href="/terms-and-condition" className="footer-quick-link">
                  <i class="fa-solid fa-file-lines fa-icon-footer"></i>
                  Terms & Conditions
                </a>
              </li>
              <li className="p-1">
                <a
                  href="/company-refund-cancelletion"
                  className="footer-quick-link"
                >
                  <i class="fa-solid fa-file-lines fa-icon-footer"></i>
                  Refund & Cancellations
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} lg={3} className="text-md-start mb-3 mb-lg-0">
            <ul className="list-unstyled">
              <li>
                <h4 className="footer-column-header">
                  <u>Get it from</u>
                </h4>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.customer.speedrent">
                  <Button className="footer-column-three-btn m-1">
                    <i class="fa-brands fa-lg fa-apple me-2"></i>
                    App Store
                  </Button>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.customer.speedrent">
                  <Button className="footer-column-three-btn m-1">
                    <i class="fa-brands fa-google-play me-2"></i>
                    Play Store
                  </Button>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* Second Row */}
        <Row className="mt-3 pt-2 border-top">
          <Col md={6} className="text-right p-1">
            <FaFacebookF className="mx-2" />
            <FaTwitter className="mx-2" />
            <FaInstagram className="mx-2" />
          </Col>
          <Col md={6} className="text-left p-1">
            <p>© 2023 Speed Rent. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HeroFooter;
