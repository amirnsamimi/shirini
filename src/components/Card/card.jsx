import React from "react";
import "./card.style.scss";
const Carousel = (props) => {
  return (
    <>
      <img
        src={props.imgsrc}
        alt="some smoking hot chick eating a juicy big thick dounut"
        className="w-[25dvw] absolute h-[65dvh] rounded-2xl z-0 bg-gray-300"
      />
      <div className=" w-[25dvw] h-[65dvh] relative bottom-20	 flex justify-center items-end rounded-2xl">
        <div className="bg-white w-8 h-8 p-1 rounded-full z-10">
          {props.iconpic}
        </div>
        <div className="bg-white rounded-xl p-1 px-2 items-center justify-center z-10	">
          {props.txtpic}
        </div>
      </div>
    </>
  );
};

export default Carousel;
