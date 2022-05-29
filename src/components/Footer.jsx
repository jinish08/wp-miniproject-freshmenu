import React from "react";

const Footer = () => {
  return (
    <div class="container">
      <br />
      <hr />
      <footer class="py-5">
        <div class="row">
          <div class="col-2">
            <h6>COMPANY</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQ
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Careers
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h6>HELP & CONTACT</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Help Center
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Email Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  080-4042-4242
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h6>MORE FROM US</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Bulk/Party Order
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Cake Order
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FreshClub
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Offers
                </a>
              </li>
            </ul>
          </div>

          <div class="col-4 offset-1">
            <form>
              <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png"
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img
                  src="	https://img.icons8.com/ios/2x/instagram.png
                  "
                  height={"24px"}
                  width={"24px"}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
