import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
{/* hero area */}
<div className="hero_area">
  {/* header section strats */}
  <header className="header_section">
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
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/* end header section */}
  {/* slider section */}
  {/* <section className="slider_section">
    <div className="slider_container">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
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
                      There are many variations of passages of Lorem Ipsum available, but the
                    </p>
                    <a href>
                      Contact Us
                    </a>
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
                      There are many variations of passages of Lorem Ipsum available, but the
                    </p>
                    <a href>
                      Contact Us
                    </a>
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
                      There are many variations of passages of Lorem Ipsum available, but the
                    </p>
                    <a href>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <img src="images/line.png" alt />
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section> */}
  {/* end slider section */}
</div>
{/* end hero area */}

    </>
  );
}

export default Header;
