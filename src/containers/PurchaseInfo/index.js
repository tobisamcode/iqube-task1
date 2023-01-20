import React from "react";
import "./index.css";

const PurchaseInfo = () => {
  return (
    <div className="card">
      <div className="table-head">
        <span>Item Name</span>
        <span>&#8358; Price</span>
      </div>
      <div className="table-body">
        <div className="row">
          <span>Data science and usability</span>
          <span className="bold">50,000.00 </span>
        </div>
        <div className="row">
          <span>Shipping</span>
          <span className="bold">0.00</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="total row">
        <span>Total</span>
        <span className="bold">50,000.00</span>
      </div>
    </div>
  );
};

export default PurchaseInfo;
