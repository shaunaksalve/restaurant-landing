import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's a Great Time for a good Taste of Burger</h3>
        <h1>
          <span>BURGER </span>OF
          <br />
          THE WEEK
        </h1>
        <p className="details">
          Get Special Discount by applying the Promo-Code: <br />
          "SHAUNAK"
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
