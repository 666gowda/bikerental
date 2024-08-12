import React from "react";
import heroimg from "../../assets/hero-img.png";
import { Button, Card, Badge, Col } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import sectiontwoimgone from "../../assets/bhubaneswar-img.png";
import sectiontwoimgtwo from "../../assets/cuttack-img.png";
import sectiontwoimgthree from "../../assets/bengalluru-img.png";
import sectiontwoimgmore from "../../assets/more-symbol-img.png";
import quoteimg from "../../assets/hero-section-quote-img.png";
import profilepicone from "../../assets/testimonial-one.png";
import profilepictwo from "../../assets/testimonial-two.png";
import profilepicthree from "../../assets/testimonial-three.png";
import profilepicfour from "../../assets/testimonial-four.png";
import profilepicfive from "../../assets/testimonial-five.png";
import profilepicsix from "../../assets/testimonial-six.png";
import Accordion from "react-bootstrap/Accordion";
import contactformimg from "../../assets/contact-form-img.png";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <header>
        <div id="hero-section-one">
          <div class="row p-lg-4 p-md-2 p-1">
            <div class="col-lg-6 col-xl-6 col-md-12 d-flex align-items-center justify-content-center">
              <div className="p-lg-2 py-5 text-left">
                <div>
                  <h1 class="h1-large">
                    <span id="hero-section-header-text-no-one">#1</span>
                    <br />
                    <span id="hero-section-header-text">
                      Bike Rental Services in Odisha
                    </span>
                  </h1>
                </div>
                <div>
                  <p class="p-large hero-caption-text">
                    Your Ultimate Solution for Bike and Scooter Rentals in
                    Odisha - Explore Cities with Ease!
                  </p>
                </div>
                <div>
                  <a href="https://play.google.com/store/apps/details?id=com.customer.speedrent">
                    <Button
                      id="download-app-btn-landing-page"
                      className="shadow-sm"
                    >
                      Download App
                    </Button>
                  </a>
                  <Button
                    id="book-now-btn-landing-page"
                    className="ms-2 shadow"
                    onClick={() => navigate("/bike-booking")}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="image-container">
                <img class="img-fluid" src={heroimg} alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div id="hero-section-two">
          <div class="row px-lg-4 px-md-2 px-1">
            <div class="col-lg-6 col-xl-6 order-1 order-lg-2">
              <div className="my-md-4 my-2">
                <div className="tablet-width-75 d-flex justify-content-center">
                  <div className="mx-lg-0 w-100 w-sm-100 mx-4 d-flex image-container">
                    <img
                      className="img-fluid"
                      src={quoteimg}
                      alt="alternative"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div class="w-100 mx-lg-0 mx-4">
                    <span
                      id="section-two-part-two-text-caption"
                      className="text-start"
                    >
                      <div>
                        <div className="tablet-width-75">
                          <h2 id="lp-section-two-r-caption">
                            Discover Rental Freedom Across Numerous Cities!
                          </h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-6 col-md-12 d-flex align-items-center justify-content-center order-2 order-lg-1">
              <div className="p-lg-2 px-3 text-left py-5">
                <div className="row my-3">
                  <div className="col-6">
                    <div class="image-container">
                      <div>
                        <img
                          src={sectiontwoimgone}
                          alt="React Bootstrap logo"
                          class="img-fluid rounded-4 shadow-sm"
                        />
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i class="fa-solid fa-location-arrow m-1 location-icon-section-two"></i>
                        <div>
                          <span className="location-icon-section-two-caption">
                            Bhubaneshwar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="image-container">
                      <div>
                        <img
                          src={sectiontwoimgtwo}
                          alt="React Bootstrap logo"
                          class="img-fluid rounded-4 shadow-sm"
                        />
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i class="fa-solid fa-location-arrow m-1 location-icon-section-two"></i>{" "}
                        <div>
                          <span className="location-icon-section-two-caption">
                            Cuttack
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="image-container">
                      <div>
                        <img
                          src={sectiontwoimgthree}
                          alt="React Bootstrap logo"
                          class="img-fluid rounded-4 shadow-sm"
                        />
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <i class="fa-solid fa-location-arrow m-1 location-icon-section-two"></i>{" "}
                        <div>
                          <span className="location-icon-section-two-caption">
                            Bangalore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="image-container">
                      <div>
                        <img
                          src={sectiontwoimgmore}
                          alt="React Bootstrap logo"
                          class="img-fluid rounded-4 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="hero-section-three">
          <div className="p-lg-4 p-md-2 p-1">
            <div className="mt-md-3 d-flex align-items-center justify-content-center">
              <div className="p-lg-2 py-4 text-left">
                <div>
                  <h1 className="h1-large">
                    <h4 id="hero-section-three-part-one-text">
                      Know Why We are
                    </h4>
                    <h2 id="">Best Bike Rental Services</h2>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="row justify-content-center px-lg-5 px-sm-4 px-3 py-3">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-street-view hero-section-three-card-icons"></i>
                        </span>
                        Access
                      </Card.Title>
                      <Card.Text>
                        You can access Speed Rent Bike Rental Services branches
                        all over Odisha. Our broad-based network will provide
                        you with the comfort to hire a bike near you anytime.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-user-shield hero-section-three-card-icons"></i>
                        </span>
                        Safety
                      </Card.Title>
                      <Card.Text>
                        Speed Rent gives the utmost priority to its customers’
                        safety. Our bikes and scooters are regularly serviced
                        and mandatory mechanical checkups will be carried out
                        before renting the bike.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-money-check-dollar hero-section-three-card-icons"></i>
                        </span>
                        Payments
                      </Card.Title>
                      <Card.Text>
                        With Speed Rent Bike Rental Services you will get
                        Flexible payment methods so that you will have a
                        smoother and hassle-free booking and payment experience.
                        You can Pay through UPI, Cards, Net Banking or Cash.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-medal hero-section-three-card-icons"></i>
                        </span>
                        Quality
                      </Card.Title>
                      <Card.Text>
                        At Speed Rent, we prioritize top-notch quality in bikes
                        and services, ensuring each ride is in excellent
                        condition and thoroughly sanitized. Experience
                        unparalleled value for your investment with our
                        commitment to service excellence.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-headset hero-section-three-card-icons"></i>
                        </span>
                        Customer Support
                      </Card.Title>
                      <Card.Text>
                        Count on our dedicated team, available 24/7, for
                        seamless support from booking to ride completion.
                        Whether by call or WhatsApp, we're here to assist you at
                        every step. Your satisfaction is our immediate priority.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <span className="hero-section-three-card-icons-container px-2 py-1 rounded me-2">
                          <i class="fa-solid fa-hand-holding-dollar hero-section-three-card-icons"></i>
                        </span>
                        Affordable Prices
                      </Card.Title>
                      <Card.Text>
                        Best Quality, Best Customer Support, and here comes the
                        Low cost Bike Rental services. Speed Rent provides bikes
                        on rent at the most competitive and lowest prices across
                        the industry.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="hero-section-four">
          <div className="py-5 my-5 bg-testtimonials-color">
            <div className="mx-lg-5 mx-md-4 mx-4">
              <div className="text-start text-light">
                <div>
                  <h2 className="text-bold">Real Experiences, Real Results</h2>
                  <p style={{ color: "#9397a3" }}>
                    Lorem ipsum dolor sit amet consectetur. Enim ut eget integer
                    tellus ullamcorper mauris eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* testimonials slider for mobile */}
              <div className="d-flex-lg-none d-md-none row justify-content-center">
                <div className="scroll-container scroll-container-maxi py-4 px-4 d-flex overflow-scroll overflow-y-hidden">
                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepicone}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Philip John</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepictwo}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Mariana</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepicthree}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Shankar</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepicfour}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Sruthi</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepicfive}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Adam</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                      style={{
                        width: "320px",
                      }}
                    >
                      <Card className="shadow-sm border-0 card-texstimonials-transparent">
                        <Card.Body className="text-start">
                          <Card.Title>
                            <div className="d-flex flex-row">
                              <div className="profile-pic-textimonials-container rounded px-2 py-1">
                                <img
                                  src={profilepicsix}
                                  width="32"
                                  height="38"
                                  className="d-inline-block align-top"
                                  alt="Profile Image"
                                />
                              </div>
                              <div className="d-flex flex-column ps-2">
                                <p className="mb-0 fs-6">Andrew</p>
                                <div className="mb-0" id="profile-rating">
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star fa-sm text-warning"></i>
                                  <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </Card.Title>
                          <Card.Text>
                            Speed Rent gives the utmost priority to its
                            customers’ safety. Our bikes and scooters are
                            regularly serviced and mandatory mechanical checkups
                            will be carried out before renting the bike.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/* testimonials for md lg */}
              <div className="d-none d-lg-flex d-md-flex row justify-content-center px-lg-5 px-sm-4 px-3 py-3">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepicone}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">Adam</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        You can access Speed Rent Bike Rental Services branches
                        all over Odisha. Our broad-based network will provide
                        you with the comfort to hire a bike near you anytime.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepictwo}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">John</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Speed Rent gives the utmost priority to its customers’
                        safety. Our bikes and scooters are regularly serviced
                        and mandatory mechanical checkups will be carried out
                        before renting the bike.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepicthree}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">Andrew</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        With Speed Rent Bike Rental Services you will get
                        Flexible payment methods so that you will have a
                        smoother and hassle-free booking and payment experience.
                        You can Pay through UPI, Cards, Net Banking or Cash.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepicfour}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">Maria</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        At Speed Rent, we prioritize top-notch quality in bikes
                        and services, ensuring each ride is in excellent
                        condition and thoroughly sanitized. Experience
                        unparalleled value for your investment with our
                        commitment to service excellence.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepicfive}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">Shankar</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Count on our dedicated team, available 24/7, for
                        seamless support from booking to ride completion.
                        Whether by call or WhatsApp, we're here to assist you at
                        every step. Your satisfaction is our immediate priority.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                  <Card className="shadow-sm border-0 card-texstimonials-transparent">
                    <Card.Body className="text-start">
                      <Card.Title>
                        <div className="d-flex flex-row">
                          <div className="profile-pic-textimonials-container rounded px-2 py-1">
                            <img
                              src={profilepicsix}
                              width="32"
                              height="38"
                              className="d-inline-block align-top"
                              alt="Profile Image"
                            />
                          </div>
                          <div className="d-flex flex-column ps-2">
                            <p className="mb-0 fs-6">Victor</p>
                            <div className="mb-0" id="profile-rating">
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-star fa-sm text-warning"></i>
                              <i className="fa fa-regular fa-sm fa-star text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Best Quality, Best Customer Support, and here comes the
                        Low cost Bike Rental services. Speed Rent provides bikes
                        on rent at the most competitive and lowest prices across
                        the industry.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="hero-section-five">
          <div className="p-lg-4 p-md-2 p-1">
            <div className="mt-md-3 d-flex align-items-center justify-content-center">
              <div className="p-lg-2 py-4 text-left">
                <div className="px-2"> {/* 12aug */}
                  <span className="h1-large">
                    <h2 className="fw-bolder">
                      Have Questions? We've got answers!
                    </h2>
                    <p className="fw-light ">
                      Explore our comprehensive list of frequently asked
                      questions to find the information you need quickly and
                      easily.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="row justify-content-center px-lg-5 px-sm-4 px-3 py-3">
                <Accordion defaultActiveKey="0" id="faq-main-body">
                  <div id="div-accordian" className="text-start">
                    <Accordion.Item eventKey="0" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>What is Speed Rent?</h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Speed Rent is one of the Best Bike & Scooter rental
                          companies in Odisha. You can get bikes for rent from
                          us.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div id="div-accordian" className="text-start">
                    <Accordion.Item eventKey="1" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>Where does Speed Rent Services Available?</h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Our bike rental services are available in Bhubaneswar,
                          Cuttack and Puri
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div id="div-accordian" className="text-start">
                    <Accordion.Item eventKey="2" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>
                          What are the Documents required to book the bike on
                          rental?
                        </h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Booking a bike through Speed Rent is easy. You just
                          need an Original Aadhaar Card and Driving Licence for
                          verification purposes.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div id="div-accordian" className="text-start">
                    <Accordion.Item eventKey="3" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>Do I need to pay Security Deposit?</h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Yes, there will be a nominal amount of Security
                          Deposit you need to pay for hiring any bike for rent.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div id="div-accordian" className="text-start">
                    <Accordion.Item eventKey="4" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>Do I need to fuel the Bike?</h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Yes, you need to fuel the bike for your travel.
                          Sometimes bikes will be sufficiently fueled for the
                          journey, in that case, you need to leave the vehicle
                          with same fuel level at the time of returning. If you
                          fuel the vehicle more than level while taking, we will
                          refund the difference amount.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div id="div-accordian-last" className="text-start">
                    <Accordion.Item eventKey="5" id="faq-main-body-inside">
                      <Accordion.Header>
                        <h6>Can I extend my bike rental duration?</h6>
                      </Accordion.Header>
                      <Accordion.Body id="faq-main-body-inside">
                        <p className="fw-light">
                          Yes, you can extend your bike rental booking, duration
                          in advance subject to the availability of the bike for
                          the extension. In case, if the same bike is not
                          available for extension, you need to return it at the
                          given time and you can get another available bike for
                          rental.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="hero-section-six">
          <div className="my-sm-4 my-4">
            <div className="mx-lg-5 mx-md-4 mx-4 d-block d-md-none">
              <h2 className="text-bold text-center">
                Have Questions? Contact Us Here
              </h2>
            </div>
            <div className="mx-lg-5 mx-md-4 mx-4">
              <div className="row">
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <img
                    className="img-fluid"
                    src={contactformimg}
                    alt="alternative"
                  />
                </div>
                <div className="col-12 col-md-6 order-2 order-md-1 my-auto">
                  <h4 className="text-bold text-start d-none d-md-block pb-4">
                    Have Questions? Contact Us Here
                  </h4>
                  <Form>
                    <div id="form-field-container">
                      <Form.Group controlId="formName">
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          className="transparent-input"
                        />
                      </Form.Group>
                    </div>
                    <div id="form-field-container">
                      <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email address"
                          className="transparent-input"
                        />
                      </Form.Group>
                    </div>
                    <div id="form-field-container">
                      <Form.Group controlId="formPhone" className="mt-3">
                        <Form.Control
                          type="number"
                          required
                          placeholder="Enter your mobile number"
                          className="transparent-input"
                        />
                      </Form.Group>
                    </div>
                    <div id="form-field-container">
                      <Form.Group controlId="formMessage" className="mt-3">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Write a query here"
                          className="transparent-input"
                        />
                      </Form.Group>
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 custom-button form-message-submit-btn shadow-sm"
                    >
                      Send Message
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
