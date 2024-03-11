import React from "react";
import Text from "./text/Text";
import Sweets from "./sweets/Sweets";

function Product() {
  return (
    <div className="w-full flex justify-between">
      <Text />
      <Sweets />
    </div>
  );
}

export default Product;
