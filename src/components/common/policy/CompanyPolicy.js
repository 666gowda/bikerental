import React from "react";
import HeroNavBar from "../hero-nav-bar/HeroNavBar";
import HeroFooter from "../hero-footer/HeroFooter";
import { Button } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <HeroNavBar />
      <div className="mt-5">
        <Button>
          <i class="fa-regular fa-file-lines nav-icon-offset-list"></i>
        </Button>
      </div>
      <div className="container my-4">
        <h2 className="text-center">Privacy Policy</h2>
        <div className="text-start">
          <p>
            Speed Rent (“us”, “we”, or “our”) operates the https://speedrent.in/
            Website/App and the Speed Rent mobile application (the “Service”).
          </p>
          <p>
            Speed Rent LLP is a company duly registered and incorporated under
            the companies Act, 2008. It is registered at no. E-43/1, Pocket D,
            Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020.
          </p>
          <p>
            Speed Rent LLP owns and operates https://speedrent.in/ that is a
            Website / App for booking two-wheelers on rent/lease for short term
            as well as for long term.
          </p>
          <p>
            This document is published and shall be construed in accordance with
            the provisions of the Information Technology (reasonable security
            practices and procedures and sensitive personal data of information)
            rules, 2011 under Information Technology Act, 2000; that require
            publishing of the Privacy Policy for collection, use, storage, and
            transfer of sensitive personal data or information.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using the Website /
            App, you indicate that you understand, agree, and consent to this
            Privacy Policy. If you do not agree with the terms of this Privacy
            Policy, please do not use this Website / App.
          </p>
          <p>
            By providing us your Information or by making use of the facilities
            provided by the Website / App, You hereby consent to the collection,
            storage, processing, and transfer of any or all of Your Personal
            Information and Non-Personal Information by us as specified under
            this Privacy Policy. You further agree that such collection, use,
            storage, and transfer of Your Information shall not cause any loss
            or wrongful gain to you or any other person.
          </p>
          <h3>Information Collection And Use</h3>
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <h4>Types of Data Collected</h4>
          <h5>Personal Data</h5>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (“Personal Data”). Personally identifiable information
            may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Employer</li>
            <li>College Name</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <h4>User Information</h4>
          <p>
            To avail certain services on our App, users are required to provide
            certain information for the registration process namely:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Sex</li>
            <li>Age</li>
            <li>PIN code</li>
            <li>Credit card or Debit card details</li>
            <li>Medical records and history</li>
            <li>Sexual orientation</li>
            <li>Biometric information</li>
            <li>Password</li>
            <li>Occupation, interests, and the like</li>
          </ul>
          <h4>Cookies</h4>
          <p>
            To improve the responsiveness of the sites for our users, we may use
            “cookies” or similar electronic tools to collect information to
            assign each visitor a unique, random number as a User Identification
            (User ID) to understand the user's individual interests using the
            Identified Computer.
          </p>
          <h4>Information Sharing</h4>
          <p>
            We share the sensitive personal information to any third party
            without obtaining the prior consent of the user in the following
            limited circumstances:
          </p>
          <ul>
            <li>
              When it is requested or required by law or by any court or
              governmental agency or authority.
            </li>
            <li>
              We propose to share such information within its group companies
              for processing personal information on its behalf.
            </li>
          </ul>
          <h4>Information Security</h4>
          <p>
            We take appropriate security measures to protect against
            unauthorized access to or unauthorized alteration, disclosure, or
            destruction of data.
          </p>
          <p>
            However, as effective as our security measures are, no security
            system is impenetrable. We cannot guarantee the security of our
            database, nor can we guarantee that information you supply will not
            be intercepted while being transmitted to us over the Internet.
          </p>
          <p>
            The internet is an ever-evolving medium. We may change our Privacy
            Policy from time to time to incorporate necessary future changes.
          </p>
        </div>
      </div>
      <HeroFooter />
    </>
  );
};

export default PrivacyPolicy;
