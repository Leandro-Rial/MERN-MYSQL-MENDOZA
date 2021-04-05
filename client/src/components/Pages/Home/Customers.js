import React, { useState, useEffect } from "react";
import axios from "axios";
import customer from "../../../images/customers.mp4";
import "./customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      await axios
        .get("http://localhost:5000/api/customers")
        .then((data) => setCustomers(data.data));
    };
    getCustomers();
  });

  return (
    <div>
      <div className="customerSection">
        <div className="videoBg">
          <video src={customer} autoPlay muted loop />
        </div>
        <div className="customer-content">
          <h1>Costumers</h1>
        </div>
      </div>
      <div className="presentation">
        <h1>Know our Customers</h1>
      </div>
      <div className="customers">
        {customers.map((customer, index) => {
          return (
            <div className="customers-content" key={index}>
              <div className="cards-custom">
                <div className="content-custom">
                  <h2>{customer.name}</h2>
                  <hr />
                  <span className="custom-span">{customer.city}</span>
                </div>
              </div>
            </div>
          );
        })}
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
      <footer>Mendoza &copy;2021</footer>
    </div>
  );
};

export default Customers;
