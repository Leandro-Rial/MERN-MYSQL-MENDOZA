import React from "react";
import { Link } from "react-router-dom";
import bottleBlonde from "../../../images/bottle-blonde.jpg";
import Contact from './Contact';
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="bg">
        <h1>Welcome to mendoza</h1>
        <p>Check out our history</p>
        <Link to="/about" className="btn">
          Let's see
        </Link>
      </div>
      <div className="history">
        <h1>Our History</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          maxime aperiam facere ad placeat laboriosam ipsum, distinctio, modi
          vel velit quidem quia. Natus quos accusamus aliquid ipsum fugiat,
          neque ex, adipisci qui, voluptatibus suscipit nisi ad quisquam placeat
          deserunt. Dicta numquam iusto perferendis, illum quibusdam qui dolores
          consequatur! Commodi nihil iure quis perspiciatis perferendis
          consectetur error, repudiandae deserunt minima iste reiciendis qui
          labore est velit laudantium aspernatur vel at maiores dolorem ad
          expedita. Quas voluptatibus provident accusamus, ratione adipisci
          illo!
        </p>
      </div>
      <div className="wines">
        <h1>Our Wines</h1>
        <div className="cards">
          <div className="image">
            <img src={bottleBlonde} alt="" />
          </div>
          <hr />
          <div className="card-content">
            <h2>Bottle Wine withe</h2>
            <hr />
            <span>$4500</span>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus saepe nobis, voluptas pariatur debitis
              reprehenderit! Praesentium, inventore. Ex eligendi magnam alias
              voluptates qui, doloribus nam necessitatibus dolore dignissimos
              error.
            </p>
            <button>See More</button>
          </div>
        </div>
        <Link to="/wines">See More</Link>
      </div>
      <div className="marcas">
        <h1>
          The world's largest brands rely on Mendoza to power digital commerce
        </h1>
        <div className="brands">
          <i className="fab fa-fedex"></i>
          <i className="fab fa-ebay"></i>
          <i className="fab fa-amazon"></i>
        </div>
      </div>
      <Contact />
      <footer>Mendoza &copy;2021</footer>
    </div>
  );
};

export default Home;
