import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <>
      <div className="carousel-img">
        <Link to="/">
          <img className="cimg mx-auto" alt="cimg" src={props.img} />
        </Link>
      </div>
    </>
  );
};

export default ImageCard;
