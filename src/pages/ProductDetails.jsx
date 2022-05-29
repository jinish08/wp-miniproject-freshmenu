import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end">
            <img
              src="https://d3gy1em549lxx2.cloudfront.net/8a8e499b-17d0-4d3e-adc3-f0a1f0125d88.jpg"
              alt="food-item"
              width={"600px"}
              height={"400px"}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "24px" }}>Fusilli Arrabbiata</p>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                alt=""
                style={{ width: "25px" }}
              />
              <span>Continental</span>
            </div>
            <h5 className="mt-2">₹259</h5>
            <div className="mt-2">
              <Link to="" className="btn btn-gradient fw-bold">
                Add
              </Link>
            </div>
            <p style={{ fontSize: "18px" }} className="mt-4">
              DETIALS ABOUT THIS MEAL
            </p>
            <p>
              From Italy with love. This classic pasta is made with everything
              from zucchini to mushrooms. Then mixed with creamy mushroom sauce
              for flavour and generous amounts of parmesan cheese. Garnished
              with black olives. All our meals are prepared fresh on order.
            </p>
            <img
              src="https://img.icons8.com/color/30/000000/vegetarian-mark.png"
              alt="veg-icon"
            />
            <p>Veg</p>
            <p style={{ fontSize: "18px" }} className="mt-5 mb-0">
              INGREDIENTS
            </p>
            <p>
              Penne Pasta, Zuchhini, Mushrooms, Olives, Fresh Basil, Fresh
              Cream, Herbs
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default ProductDetails;
