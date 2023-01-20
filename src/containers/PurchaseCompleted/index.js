import React from "react";
import "./index.css";

const checkIcon = (
  <svg
    width="48"
    height="35"
    viewBox="0 0 48 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M46.5041 6.7984L19.3601 33.7552C17.9681 35.1376 15.7641 35.1376 14.3721 33.7552L1.49615 20.968C0.104148 19.5856 0.104148 17.3968 1.49615 16.0144C2.88815 14.632 5.09215 14.632 6.48415 16.0144L16.8661 26.3248L41.5161 1.8448C42.9081 0.462399 45.1121 0.462399 46.5041 1.8448C47.8961 3.2272 47.8961 5.416 46.5041 6.7984Z"
      fill="#6FCF97"
    />
  </svg>
);

const PurchaseCompleted = () => {
  return (
    <div className="complete-card">
      <div>
        <span>
          {checkIcon}
        </span>
      </div>
      <h3 className="complete-heading">Purchase Completed</h3>
      <p className="complete-details">
        Please check your email for details concerning this transaction
      </p>
      <span className="return-link">Return Home</span>
    </div>
  );
};

export default PurchaseCompleted;
