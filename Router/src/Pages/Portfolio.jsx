import React from "react";
import { Helmet } from "react-helmet";

function Portfolio() {
  return (
    <>
      {/* portfolio section */}
      <section className="portfolio_section layout_padding2-top">
        <div className="heading_container">
          <h2>
            Por<span>tf</span>olio
          </h2>
          <p>
            adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolore
            magn
          </p>
        </div>
        <div className="portfolio_container layout_padding">
          <div className="box-1">
            <div className="img-box b-1">
              <img src="images/p1.jpg" alt />
              <div className="btn-box">
                <a href className="btn-1"></a>
                <a href className="btn-2"></a>
              </div>
            </div>
            <div className="img-box b-2">
              <img src="images/p2.jpg" alt />
              <div className="btn-box">
                <a href className="btn-1"></a>
                <a href className="btn-2"></a>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="img-box b-3">
              <img src="images/p3.jpg" alt />
              <div className="btn-box">
                <a href className="btn-1"></a>
                <a href className="btn-2"></a>
              </div>
            </div>
            <div className="img-box b-4">
              <img src="images/p4.jpg" alt />
              <div className="btn-box">
                <a href className="btn-1"></a>
                <a href className="btn-2"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end portfolio section */}
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

export default Portfolio;
