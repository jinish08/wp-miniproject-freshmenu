import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <br />
      <hr />
      <footer className="py-5">
        <div className="row">
          <div className="col-2">
            <h6>COMPANY</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  FAQ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Careers
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h6>HELP & CONTACT</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Help Center
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Email Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  080-4042-4242
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h6>MORE FROM US</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Bulk/Party Order
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Cake Order
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  FreshClub
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-dark" to="/">
                <img
                  src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-dark" to="/">
                <img
                  src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png"
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-dark" to="/">
                <img
                  src="	https://img.icons8.com/ios/2x/instagram.png
                  "
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
