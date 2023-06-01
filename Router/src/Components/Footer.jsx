import React from "react";

function Footer() {
  return (
    <>
{/* info section */}
<section className="info_section  layout_padding2-top">
  <div className="social_container">
    <div className="social_box">
      <a href>
        <img src="images/fb.png" alt />
      </a>
      <a href>
        <img src="images/twitter.png" alt />
      </a>
      <a href>
        <img src="images/linkedin.png" alt />
      </a>
      <a href>
        <img src="images/youtube.png" alt />
      </a>
    </div>
  </div>
  <div className="info_container ">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <h6>
            ABOUT US
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6>
            Instagram
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipi
            scing elit, sed doLorem ipsum dolor sit
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6>
            NEED HELP
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6>
            CONTACT US
          </h6>
          <div className="info_link-box">
            <a href>
              <img src="images/location.png" alt />
              <span> Gb road 123 london Uk </span>
            </a>
            <a href>
              <img src="images/call.png" alt />
              <span>+01 12345678901</span>
            </a>
            <a href>
              <img src="images/mail.png" alt />
              <span> demo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer section */}
  <section className=" footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
  {/* footer section */}
</section>
{/* end info section */}

    </>
  );
}

export default Footer;
