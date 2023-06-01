import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      {/* hero area */}
      <div className="hero_area">
        {/* header section strats */}
        {/* <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" alt />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header> */}
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section">
          <div className="slider_container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                >
                  01
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                  02
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                  03
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            Design
                            <br />
                            Agency
                          </h1>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the
                          </p>
                          <a href>Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            Design
                            <br />
                            Agency
                          </h1>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the
                          </p>
                          <a href>Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 px-0">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            Design
                            <br />
                            Agency
                          </h1>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the
                          </p>
                          <a href>Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span className="sr-only">Previous</span>
                </a>
                <img src="images/line.png" alt />
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* end hero area */}

      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Ser<span>vi</span>ces
            </h2>
            <p>
              adipiscingelit,sed do eiusmod tempor incididunt ut labore et
              dolore magn
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="img-container tab-content">
                <div
                  className="img-box tab-pane fade show active"
                  id="img1"
                  role="tabpanel"
                >
                  <img src="images/service-img.jpg" alt />
                </div>
                <div
                  className="img-box tab-pane fade  "
                  id="img2"
                  role="tabpanel"
                >
                  <img src="images/service-img.jpg" alt />
                </div>
                <div
                  className="img-box tab-pane fade  "
                  id="img3"
                  role="tabpanel"
                >
                  <img src="images/service-img.jpg" alt />
                </div>
                <div
                  className="img-box tab-pane fade  "
                  id="img4"
                  role="tabpanel"
                >
                  <img src="images/service-img.jpg" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="detail-container nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <div
                  className="detail-box active"
                  id="img1-tab"
                  data-toggle="tab"
                  href="#img1"
                  role="tab"
                  aria-selected="true"
                >
                  <h4>
                    Website <br />
                    design
                  </h4>
                </div>
                <div
                  className="detail-box"
                  id="img2-tab"
                  data-toggle="tab"
                  href="#img2"
                  role="tab"
                  aria-selected="false"
                >
                  <h4>
                    Logo <br />
                    design
                  </h4>
                </div>
                <div
                  className="detail-box"
                  id="img2-tab"
                  data-toggle="tab"
                  href="#img3"
                  role="tab"
                  aria-selected="false"
                >
                  <h4>
                    brochure <br />
                    design
                  </h4>
                </div>
                <div
                  className="detail-box"
                  id="img2-tab"
                  data-toggle="tab"
                  href="#img4"
                  role="tab"
                  aria-selected="false"
                >
                  <h4>
                    visiting card <br />
                    design
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>Read More</a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* portfolio section */}
      <section className="portfolio_section">
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
      {/* logo section */}
      <section className="logo_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              A N<span>EW</span> Logo <br />
              FOR YOUR COMPANY
            </h2>
            <p>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magn
            </p>
          </div>
        </div>
        <div className="logo_container layout_padding">
          <div className="carousel-wrap">
            <div className="owl-carousel">
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <img src="images/l1.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <img src="images/l2.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <img src="images/l3.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <img src="images/l4.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <img src="images/l5.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <img src="images/l6.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <img src="images/l3.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <img src="images/l4.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <h4>Logo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end logo section */}
      {/* started section */}
      <section className="started_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Lets <span>Get</span> Started <br />
                    Your Project
                  </h2>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magn
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <div className="btn-box">
                <a href>Let’s talk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end started section */}
      {/* agency section */}
      <section className="agency_section layout_padding-bottom">
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
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container">
            <h2 className>
              Con<span>ta</span>ct Us
            </h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row">
            <div className="col-lg-8 col-md-7 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={600}
                    height={300}
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 px-0">
              <form action>
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="d-flex ">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      {/* client section */}
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>
              What <span>says</span> our clients
            </h2>
          </div>
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Sandy <br />
                  Nor
                </h4>
              </div>
              <div className="img-box">
                <img src="images/client.jpg" alt />
              </div>
            </div>
            <div className="detail-box">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </p>
              <img src="images/quote.png" alt />
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}

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

export default Home;
