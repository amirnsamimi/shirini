import React from "react";

const Carousel = (props) => {
  return (
    <div className="relative w-[400px] h-[500px] object-cover">
      <div className="object-contain  h-full overflow-hidden">
        <img
          src="https://s3.envato.com/files/313050163/32_1R3A0390.jpg"
          alt="donat image"
          type="image/png"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="absolute top-0 bg-black w-full h-full opacity-25"></div>

      <div className="absolute bottom-10 p-10 w-full h-ful">
        <div className="Buttons flex justify-center">
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">{props.icontxt}</div>
          <div className="bg-white  h-8 flex p-4 rounded-xl justify-center items-center">{props.txt}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
