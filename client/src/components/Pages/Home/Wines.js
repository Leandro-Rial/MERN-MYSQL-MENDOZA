import React, { useState, useEffect } from "react";
import axios from "axios";
import bRed from "../../../images/bottle-dark.jpg";
import bWhite from "../../../images/bottle-blonde.jpg";
import bWhiteTwo from "../../../images/bottle-blonde-2.jpg";
import Rose from "../../../images/Mockup-0.jpg";
import Packaging from '../../../images/packaging.jpg';
import PackagingTwo from '../../../images/packaging-two.jpg';
import "./wines.css";

const Wines = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const getWines = async () => {
      await axios
        .get("http://localhost:5000/api/get")
        .then((data) => setWines(data.data));
    };

    getWines();
  }, []);

  return (
    <div>
      <div className="wineSection">
        <h1>Welcome to Wines</h1>
        <p>Here you can watch our lovely Wines</p>
      </div>
      {wines.map((wine, index) => {
        return (
          <div className="wines" key={index}>
            <div className="cards">
              <div className="image">
                <img src={bRed} alt="" />
              </div>
              <hr />
              <div className="card-content">
                <h2>{wine.name}</h2>
                <hr />
                <span>${wine.price}</span>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  necessitatibus saepe nobis, voluptas pariatur debitis
                  reprehenderit! Praesentium, inventore. Ex eligendi magnam
                  alias voluptates qui, doloribus nam necessitatibus dolore
                  dignissimos error.
                </p>
                <button>See More</button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <div className="carousel-item">
            <img src={bWhite} className="carrousel" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={Rose} className="carrousel" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={bWhiteTwo} className="carrousel" alt="..." />
        </div>
      </div>
      <div className="before-packaging">
        <h1>Packaging</h1>
      </div>
      <div className="packaging">
        <div className="image-packaging">
          <img src={Packaging} alt=""/>
        </div>
        <div className="image-packaging-two">
          <img src={PackagingTwo} alt=""/>
        </div>
      </div>
      <footer>Mendoza &copy;2021</footer>
    </div>
  );
};

export default Wines;
