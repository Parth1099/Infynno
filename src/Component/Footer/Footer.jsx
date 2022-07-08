import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid ">
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="container p-4 ">
            <div className="row mt-4 ">
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h6>English</h6>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="">Navigation</h5>

                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>FAq</li>
                  <li>Regulations</li>
                  <li>Investor Relation</li>
                  <li>Job</li>
                  <li>About Us</li>
                  <li>Help Center</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="">Legal</h5>

                <ul className="list-unstyled">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Preferences</li>
                  <li>Corporate Information</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5 className="">Talk to us</h5>

                <ul className="list-unstyled">
                  <li>support@ercom.com</li>
                  <li>+66 2399 1145</li>
                </ul>
              </div>

              {/* Social Media Button */}
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0"></div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Dramatic. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
