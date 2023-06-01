import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      {/* contact section */}
      <section className="contact_section layout_padding-bottom layout_padding2-top">
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

export default Contact;
