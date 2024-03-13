import React from "react";
import Card from "../Card/card";
import "./Carousel.style.scss";
import CakeIcon from "@mui/icons-material/Cake";
const Carousel = () => {
  return (
    <div className="allthree">
      <Card txt="fdecdfvfeedcv" icontxt={<CakeIcon />} />
      <Card txt="ffdrtgbetvervcv" icontxt={<CakeIcon />} />
      <Card txt="fvfefverev" icontxt={<CakeIcon />} />
    </div>
  );
};

export default Carousel;
