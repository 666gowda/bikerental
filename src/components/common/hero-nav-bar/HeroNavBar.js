import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo1 from "../../assets/download.png";
import mainlogo from "../../assets/full-size-logo.png";
import "./HeroNavBar.css";
import { useNavigate } from "react-router-dom";

function HeroNavBar() {
  const expand = false; // Change this to 'sm', 'md', 'lg', 'xl', 'xxl' based on your needs.
  const navigate = useNavigate();

  return (
    <Navbar
      sticky="top"
      expand={expand}
      id="nav-bar-main-area"
      className="py-0 overflow-hidden"
    >
      <Container fluid className="mx-lg-4 mx-md-2">
        <Navbar>
          <Container>
            <Navbar.Brand href="/home">
              <img
                src={mainlogo}
                width="59"
                height="59"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* Center nav */}
        <Nav className="mx-auto d-none d-lg-flex d-md-flex flex-row align-items-center">
          <Nav.Link href="#1" className="mx-lg-4 mx-2">
            <span id="lg-md-navbar-items">Blogs</span>
          </Nav.Link>
          <Nav.Link href="#2" className="mx-lg-4 mx-2">
            <span id="lg-md-navbar-items">FAQ's</span>
          </Nav.Link>
          <Nav.Link href="#3" className="mx-lg-4 mx-2">
            <span id="lg-md-navbar-items">Contact Us</span>
          </Nav.Link>
          <Button
            id="home-page-login-signup-btn"
            className="mx-lg-4 mx-2 shadow-sm"
            onClick={() => navigate("/login")}
          >
            LOGIN / SIGNUP
          </Button>
        </Nav>

        <Navbar.Toggle
          id="navbar-burger"
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          className="offcanvas-navbar"
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
                src={mainlogo}
                width="36"
                height="36"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column justify-content-between">
            <div>
              <Nav className="flex-grow-1 pe-3">
                <div className="d-flex flex-row">
                  <img
                    src={logo1}
                    width="56"
                    height="56"
                    className="d-inline-block align-top"
                    alt="Profile Image"
                  />
                  <div className="d-flex flex-column ps-2">
                    <p className="mb-0" style={{ fontWeight: "600" }}>
                      Welcome
                    </p>
                    <span className="mb-0" id="profile-name">
                      Please Login..
                    </span>
                  </div>
                </div>
                <div className="mb-0">
                  <hr />
                </div>
                <div id="offcanvas-navitems">
                  <Nav.Link
                    href="#action1"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-solid fa-list-ol nav-icon-offset-list"></i>
                    &nbsp; My Bookings
                  </Nav.Link>
                  <Nav.Link
                    href="#action1"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-regular fa-heart nav-icon-offset-list"></i>
                    &nbsp; Wishlist
                  </Nav.Link>
                  <Nav.Link
                    href="#action1"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-solid fa-shield-halved nav-icon-offset-list"></i>
                    &nbsp; KYC
                    <span
                      id="offcanvas-kyc-custom-notice"
                      className="ms-2 px-2 py-1 rounded"
                    >
                      Custom Notice here!!!
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    href="/terms-and-condition"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-regular fa-file-lines nav-icon-offset-list"></i>
                    &nbsp; Terms & Condition
                  </Nav.Link>
                  <Nav.Link
                    href="/company-policy"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-regular fa-file-lines nav-icon-offset-list"></i>
                    &nbsp; Privacy Policy
                  </Nav.Link>
                  <Nav.Link
                    href="/company-refund-cancelletion"
                    className="offset-navbar-links-container rounded ps-2"
                  >
                    <i class="fa-solid fa-money-bill-transfer nav-icon-offset-list"></i>
                    &nbsp; Refund & Cancellation
                  </Nav.Link>
                </div>
              </Nav>
            </div>
            <div className="mx-auto mt-auto w-100 mb-2">
              <div className="row">
                <div className="col-6 px-1">
                  <Button
                    id="offcanvas-login-signup-btn"
                    className="w-100"
                    onClick={() => navigate("/login")}
                  >
                    Login / Signup
                  </Button>
                </div>
                <div className="col-6 px-1">
                  <Button
                    id="offcanvas-login-book-btn"
                    className="w-100"
                    onClick={() => navigate("/bike-booking")}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default HeroNavBar;
