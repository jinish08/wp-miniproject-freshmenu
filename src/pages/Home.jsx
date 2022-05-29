import React, { useEffect, useState } from "react";
import { MultiCarousel, DetailCard } from "./";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/init-firebase";

const Home = () => {
  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsCollectionRef);

        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <MultiCarousel />
      <div className="container-fluid nav_bg border-bottom">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {products?.map((product) => (
                <DetailCard
                  topContent={product.calories}
                  img={product.img}
                  name={product.name}
                  cost={product.price}
                  veg={product.veg}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
