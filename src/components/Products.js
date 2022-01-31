import React from "react";
import ProductBox from "./ProductBox";
import pimage1 from "../assets/s1.png";
import pimage2 from "../assets/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="a-container">
        <ProductBox image={pimage1} title="Special Paneer Burger" />
        <ProductBox image={pimage2} title="Chicken Burger" />
        <ProductBox image={pimage1} title="Simple Veg Burger" />
      </div>
    </div>
  );
}

export default Products;
