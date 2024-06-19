import React from "react";

function Travel() {
  return (
    <>
      <div className="choose-div">
        <p className="p">Why us?</p>
        <h1 className="h1">
          Why Travel with Africa <br /> wizzy Safari
        </h1>
      </div>
      <div className="boxes">
        <div className="boxx">
          <img className="box-img" src="src/assets/Images/Car.png" alt="" />
          <p className="p">
            100+ tours around <br /> Rwanda
          </p>
        </div>
        <div className="boxx">
          <img className="box-img" src="src/assets/Images/tick.png" alt="" />
          <p className="p">
            100% Trusted travel <br /> agency
          </p>
        </div>
        <div className="boxx">
          <img className="box-img" src="src/assets/Images/contact.png" alt="" />
          <p className="p">
            10 years of travel <br /> experience
          </p>
        </div>
        <div className="boxx">
          <img className="box-img" src="src/assets/Images/like.png" alt="" />
          <p className="p">
            90% of travelors are <br /> happy
          </p>
        </div>
      </div>
    </>
  );
}

export default Travel;
