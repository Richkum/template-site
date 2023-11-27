import React from "react";
import { Navbar, Choose, DisplayImages } from "../reuasable/Reuse";
import Destination from "../destinations/Destination";
import Travel from "../travel/Travel";
import ClientsSay from "../clients/ClientsSay";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-bgr">
        <div className="experience">
          <h1 className="h1">
            Experience the beauty <br /> of Rwanda with us
          </h1>
          <p className="p">Discover the Land of a Thousand Hills</p>
          <div className="great-less">
            <button className="btn">
              {" "}
              <img src="src/assets/Images/less.png" alt="" />{" "}
            </button>
            <button className="btn">
              {" "}
              <img src="src/assets/Images/greatter.png" alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
      <Choose />
      <DisplayImages />
      <DisplayImages />
      <Destination />
      <Travel />
      <ClientsSay />
      <Footer />
    </>
  );
}

export default Home;
