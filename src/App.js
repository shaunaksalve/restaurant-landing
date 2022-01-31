import "./App.css";
import Navbar from "./components/Navbar";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import React from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
