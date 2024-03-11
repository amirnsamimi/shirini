import React from "react";
import "./Carousel.style.scss";
const Carousel = (props) => {
  return (
    <div className="bg-gray-300 w-[25dvw] h-[65dvh] p-5  pb-20 flex justify-center items-end rounded-2xl">
      <div className="bg-white w-8 h-8 rounded-full ">{props.iconpic}</div>
      <div className="bg-white rounded-xl p-1 px-2 items-center justify-center">{props.txtpic}</div>
    </div>
  );
};

export default Carousel;
