import React from "react";
// import image from "rc/assets/Images/Phone.png";
import image from "../../Images/Phone.png";

export function Navbar() {
  return (
    <>
      <div className="navdiv">
        <div className="nav1">
          <div className="phone-mail">
            <div className="phone">
              <img className="phone-icon" src={image} alt="image alt" />
              <p className="phone-no">+250 784 688 641</p>
            </div>
            <div className="mail">
              <img
                className="mail-icon"
                src="src/assets/Images/Envelope.png"
                alt=""
              />
              <p className="mail-text">bbonteemma@gmail.com</p>
            </div>
          </div>
          <div className="social-icons">
            <img src="src/assets/Images/Facebook.png" alt="" />
            <img src="src/assets/Images/Twitter.png" alt="" />
            <img src="src/assets/Images/in.png" alt="" />
            <img src="src/assets/Images/Camera.png" alt="" />
          </div>
        </div>
        <div className="nav2">
          <div className="nav-2">
            <div className="africa-div">
              <img
                className="afri-img"
                src="src/assets/Images/africamap.png"
                alt=""
              />
              <div className="routes">
                <p className="p">Home</p>
                <p className="p">About</p>
                <p className="p">Tour package</p>
                <p className="p">Gallery</p>
                <p className="p">Blog</p>
                <p className="p">Contact us</p>
              </div>
            </div>
            <div className="sign-in">
              <button className="sign">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Choose() {
  return (
    <>
      <div className="choose-div">
        <p className="p">Choose your Package</p>
        <h1 className="h1">
          Select your Best Package <br /> for your Travel
        </h1>
      </div>
    </>
  );
}

export function DisplayImages() {
  return (
    <>
      <div className="main-div">
        <div className="cards">
          <div className="img-div">
            <img
              className="card-img"
              src="src/assets/Images/cheetah-cub.jpg"
              alt=""
            />
          </div>
          <div className="img-des">
            <h6 className="h6">Akagera National Park</h6>
            <p className="p">
              Visitors to Akagera National Park can take part in a range of
              activities, including game drives, boat safaris, bird watching,
              and nature walks.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="cards">
          <div className="img-div">
            <img
              className="card-img"
              src="src/assets/Images/cheetah-cub.jpg"
              alt=""
            />
          </div>
          <div className="img-des">
            <h6 className="h6">Bisoke Hike</h6>
            <p className="p">
              The Bisoke hike is a popular mountain trek in Rwanda, located in
              the Volcanoes National Park. It is one of the most challenging
              hikes in the park.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="cards">
          <div className="img-div">
            <img
              className="card-img"
              src="src/assets/Images/cheetah-cub.jpg"
              alt=""
            />
          </div>
          <div className="img-des">
            <h6 className="h6">Lake Kivu trip</h6>
            <p className="p">
              A trip to Lake Kivu can be a truly unique and memorable
              experience.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
