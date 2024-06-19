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
            src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            src="https://plus.unsplash.com/premium_photo-1667066302681-2893297c9b6e?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Huye</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>{" "}
        <div className="pop-card">
          <img
            className="pop-img"
            src="https://images.unsplash.com/photo-1597027145290-e1acec3f75f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Rubavu</h5>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>{" "}
        <div className="pop-card">
          <img
            className="pop-img"
            src="https://images.unsplash.com/photo-1641295437743-2ea0b8453392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="pop-des">
            <h5 className="h5">Musanze</h5>
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
