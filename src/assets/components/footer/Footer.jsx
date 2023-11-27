import React from "react";

function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="footter">
          <div className="foot1">
            <h3 className="h3">If you have any question, Let us help you!</h3>
            <p className="p">
              If you have any questions or would like to book a tour with us,{" "}
              <br />
              <br />
              please don't hesitate to contact us. Phone: +250 788 123 456
              Email: info@rwandatourism.com Address: Kigali, Rwanda
            </p>
            <h6 className="h6">Subscribe to our newspaper</h6>
            <div className="inp-send">
              <input
                className="inp"
                type="text"
                placeholder="input your email here"
              />
              <button className="send">
                <img src="src/assets/Images/greatter.png" alt="" />
              </button>
            </div>
          </div>
          <div className="foot2">
            <div className="africa-div">
              <img
                className="afri-img"
                src="src/assets/Images/africamap.png"
                alt=""
              />
              <div className="social-icons">
                <img src="src/assets/Images/Facebook.png" alt="" />
                <img src="src/assets/Images/Twitter.png" alt="" />
                <img src="src/assets/Images/in.png" alt="" />
                <img src="src/assets/Images/Camera.png" alt="" />
              </div>
            </div>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="paths">
              <p className="p">Home</p>
              <p className="p">About Us</p>
              <p className="p">Our Team</p>
              <p className="p">Testimonials</p>
              <p className="p">Packages</p>
              <p className="p">Blog</p>
              <p className="p">Destinations</p>
              <p className="p">Events</p>
              <p className="p">Contact Us</p>
              <p className="p">signinn</p>
              <p className="p">Gallery</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
