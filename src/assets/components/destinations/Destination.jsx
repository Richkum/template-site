import React from "react";

function Destination() {
  return (
    <>
      <div className="choose-div">
        <p className="p">Popular Destinations</p>
        <h1 className="h1">
          Select Our Best Popular <br /> Destinations
        </h1>
      </div>
      <div className="arrows">
        <img className="arr" src="src/assets/Images/less.png" alt="" />
        <img className="ows" src="src/assets/Images/greatter.png" alt="" />
      </div>
      <div className="main-pop">
        <div className="pop-card">
          <img
            className="pop-img"
            src="src/assets/Images/cheetah-cub.jpg"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Kigali</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
        <div className="pop-card">
          <img
            className="pop-img"
            src="src/assets/Images/cheetah-cub.jpg"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Kigali</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>{" "}
        <div className="pop-card">
          <img
            className="pop-img"
            src="src/assets/Images/cheetah-cub.jpg"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Kigali</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>{" "}
        <div className="pop-card">
          <img
            className="pop-img"
            src="src/assets/Images/cheetah-cub.jpg"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Kigali</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
