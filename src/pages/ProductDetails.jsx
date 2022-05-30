import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../utils/init-firebase";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const docRef = doc(db, "products", productId);
    const getProduct = async () => {
      try {
        const doc = await getDoc(docRef);
        // console.log(doc.data());
        setProduct(doc.data());
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end">
            <img
              src={product?.img}
              alt="food-item"
              width={"600px"}
              height={"400px"}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "24px" }}>{product?.name}</p>
            <div>
              <img
                src={
                  product?.veg
                    ? "https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                    : "https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                }
                alt=""
                style={{ width: "25px" }}
              />
              <span>Continental</span>
            </div>
            <h5 className="mt-2">₹{product?.price}</h5>
            <div className="mt-2">
              <Link to="" className="btn btn-gradient fw-bold">
                Add
              </Link>
            </div>
            <p style={{ fontSize: "18px" }} className="mt-4">
              DETIALS ABOUT THIS MEAL
            </p>
            <p>{product?.details}</p>
            <img
              src={
                product?.veg
                  ? "https://img.icons8.com/color/30/000000/vegetarian-mark.png"
                  : "https://img.icons8.com/external-gradients-pongsakorn-tan/344/external-chicken-autumn-gradients-pongsakorn-tan.png"
              }
              alt="veg-icon"
              width={"50px"}
              height={"50px"}
            />
            {product?.veg ? <p>Veg</p> : <p>Non Veg</p>}
            <p style={{ fontSize: "18px" }} className="mt-5 mb-0">
              INGREDIENTS
            </p>
            <p>{product?.ingredients}</p>
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
