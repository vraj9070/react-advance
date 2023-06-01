import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      {/* agency section */}
      <section className="agency_section layout_padding2-top">
        <div className="agency_container ">
          <div className="box ">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>Design</span> Agency
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum
              </p>
              <a href>Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* end agency section */}
      <Helmet>
        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        ></script>
        <script type="text/javascript" src="js/custom.js"></script>
      </Helmet>
    </>
  );
}

export default About;
