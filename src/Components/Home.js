import React from "react";
import mobile from "../assets/mobile.jpg";
import icon from "../assets/icon.png";

const Home = () => {
  return (
    <>
      <div
        className="add_to_cart"
        style={{ position: "absolute", right: "2%", top: "5%" }}
      >
        <img src={icon} />
      </div>
      <h3 className="text-center">Add to cart</h3>
      <div className="cart-wrapper container">
        <div
          className="col-6"
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px -1px #d0dbd0",
            height: "132px",
            marginTop: "6rem",
          }}
        >
          <div
            className="image-wrapper item"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={mobile}
              className="img-fluid"
              style={{
                width: "100px",
              }}
            />
          </div>
          <div
            className="text-wrapper item  my-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>I-Phone</span>
            <span>Price:10$</span>
          </div>
          <div
            className="btn-wrapper item "
            style={{ display: "flex", alignItems: "center" }}
          >
            <button className="btn btn-warning text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
